import { badBadges, foodStylesBadges, goodBadges } from "@/components/FoodBadges";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

type RestaurantSearch = {
    foodTypes: string[];
    goodBadges: string[];
    badBadges: string[];
    location: string;
    note: string;
}

const extractRestaurantSearchPrompt = (userQuery: string) => `
        Respond with a valid JSON object, nothing else.
        Expected double-quoted property names in JSON.
        Use the exact names of the food types and badges.
        Do not forget starting and closing curly braces.

        Given the following user query: \`${userQuery}\`, extract the desired location, food type, and any relevant good or bad badges, if available.
        - Valid food types: \`${Object.keys(foodStylesBadges).join(', ')}\`
        - Valid good badges: \`${Object.keys(goodBadges).join(', ')}\`
        - Valid bad badges: \`${Object.keys(badBadges).join(', ')}\`

        ### Context:
        1. **Location Extraction**:
           - If the query includes phrases like "nearby me", "around here", or "my location", set the location to \`"USER_LOCATION"\`.
           - Otherwise, if a location is explicitly mentioned, extract it. If no location is mentioned, leave the location field empty.

        2. **Food Types**:
           - If no food type is mentioned, leave the food types field empty.
           - Food types should match valid options if they exist. If an exact match is not found, map to a close equivalent (e.g., map "BBQ" to "American" if "BBQ" is not in the valid list).
           - The system should handle partial and case-insensitive matches (e.g., "SUSHI", "sushi", or "Sush" should match "sushi").
           - If it says for example "vegan sushi", it should match "sushi" or whatever the closest match is of the food types, and vegan should be in the good or bad badges, depending on the user's preference.

        3. **Badges**:
           - Good and bad badges should match entries in the given lists.
           - Good badges are what the user wants.
           - Bad badges are what the user wants to avoid.
           - The system should be smart enough to recognize partial matches (e.g., "lean proteins" should map to "lean protein").
           - Matches should be case insensitive.
           - Should not select any dietary restrictions unless they are explicitly mentioned.

        4. **Error Handling and Notes**:
           - If no food type or badge matches are found, include a message in the \`note\` field explaining that no matches were found.
           - The \`note\` field should also include explanations for any fallback matches or clarifications about why certain inputs were not fully matched.

        ### JSON Output Format:
        \`\`\`json
        {
            "location": "string",
            "foodTypes": ["string"],
            "goodBadges": ["string"],
            "badBadges": ["string"],
            "note": "string"
        }
        \`\`\`
    `;


export async function getLLMParsedQuery(userQuery: string, maxRetries: number = 3): Promise<RestaurantSearch> {
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            // Generate the LLM response
            const answer = await groq.chat.completions.create({
                model: "llama3-8b-8192",
                messages: [
                    {
                        role: "user",
                        content: extractRestaurantSearchPrompt(userQuery)
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

async function executeWithRetry<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            // Attempt to execute the function
            return await fn();
        } catch (error) {
            attempt++;
            console.error(`Attempt ${attempt} failed:`, (error as Error).message);

            // If it's the last attempt, rethrow the error
            if (attempt >= maxRetries) {
                throw new Error(`Failed after ${maxRetries} attempts: ${(error as Error).message}`);
            }
        }
    }

    // If the loop exits without returning, throw a general error
    throw new Error("Unexpected failure: all attempts failed");
}
