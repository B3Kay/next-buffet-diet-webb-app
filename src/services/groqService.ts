import { badBadges, foodStylesBadges, goodBadges, restaurantTypes } from "@/components/FoodBadges";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

type RestaurantSearch = {
    foodStyles: string[];
    goodBadges: string[];
    badBadges: string[];
    restaurantType: string;
    negativeRestaurantType: string;
    location: string;
    note: string;
}

const extractRestaurantSearchPrompt = (userQuery: string) => `
    This is a prompt to extract the desired location, food type, and any relevant good or bad badges from a user query.
    The respond should be formated as only a valid JSON object, nothing else. Don't include any other text than the JSON object.
    Expected double-quoted property names in JSON.
    Use the exact names of the food types and badges.
    Do not forget starting and closing curly braces.
    Double check your answer to make sure you do not set an explicit food type or badge if no matches are found.
    Try to figure out what the user is looking for and match the restaurantType accordingly.

    Given the following user query: \`${userQuery}\`, extract the desired location, food type, and any relevant good or bad badges, if available.
    These are the valid food types and badges:
    - Valid foodStyles: \`${Object.keys(foodStylesBadges).join(', ')}\`
    - Valid goodBadges: \`${Object.keys(goodBadges).join(', ')}\`
    - Valid badBadges: \`${Object.keys(badBadges).join(', ')}\`
    - Valid restaurantTypes: \`${Object.keys(restaurantTypes).join(', ')}\`

    ### Context:
   

    1. **location**:
       - If the query includes phrases like "nearby me", "around here", or "my location", set the location to \`"USER_LOCATION"\`.
       - Otherwise, if a location is explicitly mentioned (e.g., "krakow"), extract it directly. If no location is mentioned, leave the location field empty.
       - Location, could be a city, country, adress, or a specific place, It should figure out what part of the query is a location.
       - Example: "Rydlowka 27, Krakow" should match "Rydlowka 27, Krakow"
       - Example: "Rydlowka 27" should match "Rydlowka 27"
       - Example: "Krakow" should match "Krakow"
       - Example: "Poland" should match "Poland"
       - Example: "nearby me" should match "USER_LOCATION"
       - Example: "all i can eat nearby Stockholm" should match "Sthockholm"
    
    2. **foodStyles**:
       - If a food style is mentioned, extract it. Map it to valid food styles (e.g., map "BBQ" to "American" if "BBQ" is not in the valid list).
       - The system should handle partial and case-insensitive matches (e.g., "SUSHI", "sushi", or "Sush" should match "sushi").
       - **Do not assume a food style** unless explicitly mentioned (so "Sweden" should not automatically match "Husmanskost"), then leave the foodStyles field empty.

    3. **badges**:
       - Good badges are preferences the user wants (e.g., "vegan"), and bad badges are things the user wants to avoid.
       - If the query mentions a specific dietary need (like "vegan"), map that to a "vegan" badge in the good or bad section.
       - Only add badges if they are explicitly mentioned in the query.

    4. **restaurantType**:
       - Restaurant types are the types of restaurants the user is looking for. For example "BUFFET", "COUNTER", etc. what is else is valid restaurantType.
       - If the query mentions a specific type of restaurant (like "buffet"), map that to a "restaurantType" in the JSON.
       - Only add restaurantType if it is explicitly mentioned in the query.
       - Match the restaurantType according to what the user is looking for. For example "all you can eat" should match "BUFFET".
       - Example: "All i can eat", "all you can eat", "buffet" should match "BUFFET" and "COUNTER".
       - Example: "I want to eat a lot of food" should match "BUFFET", "COUNTER". 
       - Example: "place where you can weigh the food and pay accordingly to it" should match to "COUNTER".

    5. **negativeRestaurantType**:
       - If the user is looking for the opposite of a restaurant type, add the negative restaurant type to the JSON. For example, if the user is looking for a restaurant that is not a buffet, add "NO_BUFFET" to the negativeRestaurantType field.

    6. **Error Handling and Notes**:
       - If no food type or badge matches are found, include a message in the \`note\` field explaining that no matches were found.
       - The \`note\` field should also include explanations for any fallback matches or clarifications about why certain inputs were not fully matched.
       - The note should also indicate that only the location was matched if no food type or badges were found.

    ### JSON Output Format:
    \`\`\`json
    {
        "location": "string",
        "foodStyles": ["string"],
        "goodBadges": ["string"],
        "badBadges": ["string"],
        "restaurantType": "string",
        "negativeRestaurantType": "string",
        "note": "string"
    }
    \`\`\`
`;





export async function getLLMParsedQuery(userQuery: string, maxRetries: number = 3): Promise<RestaurantSearch> {
    let attempt = 0;
    const prompt = extractRestaurantSearchPrompt(userQuery);
    console.log('Prompt:', prompt);

    while (attempt < maxRetries) {
        try {
            // Generate the LLM response
            const answer = await groq.chat.completions.create({
                model: "llama3-8b-8192",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            });

            console.log('LLM answer:', answer.choices[0]?.message);
            const json: RestaurantSearch = JSON.parse(answer.choices[0]?.message?.content || '{}');

            return json;
        } catch (error) {
            attempt++;
            console.error(`Attempt ${attempt} failed:`, (error as Error).message);

            // If the max retries are reached, throw an error
            if (attempt >= maxRetries) {
                throw new Error(`Failed to parse response after ${maxRetries} attempts: ${(error as Error).message}`);
            }

            console.log(`Retrying prompt...`);
            return getLLMParsedQuery(userQuery, attempt);
        }
    }

    // Fallback error if loop exits unexpectedly
    throw new Error("Unexpected failure: Unable to parse response");
}

