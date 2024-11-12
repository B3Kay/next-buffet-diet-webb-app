'use server'
import { GeolocationCoords } from "@/lib/utils";
import { getLLMParsedQuery } from "@/services/groqService";
import { redirect } from "next/navigation";

export async function searchRestaurantAction(search: string, userLocation: GeolocationCoords) {
    // Fetch the groq response
    const groqResponse = await getLLMParsedQuery(search);
    console.log('groqResponse:', groqResponse);
    console.log('userLocation:', userLocation);

    // Safely handle the groqResponse object and its properties
    const foodTypes = Array.isArray(groqResponse?.foodTypes) ? groqResponse.foodTypes.join(',') : false;
    const goodBadges = Array.isArray(groqResponse?.goodBadges) ? groqResponse.goodBadges.join(',') : false;
    const badBadges = Array.isArray(groqResponse?.badBadges) ? groqResponse.badBadges.join(',') : false;

    console.log('Food Badges:', foodTypes);
    console.log('Good Badges:', goodBadges);
    console.log('Bad Badges:', badBadges);
    // Construct query parameters
    const params = new URLSearchParams();

    if (userLocation && userLocation.latitude !== 0 && userLocation.longitude !== 0) {
        params.append('userLocation', `${userLocation.latitude},${userLocation.longitude}`);
    } else {
        params.append('location', groqResponse.location)
    }
    if (foodTypes) {
        params.append('foodTypes', foodTypes);
    }
    if (goodBadges) {
        params.append('goodBadges', goodBadges);
    }
    if (badBadges) {
        params.append('badBadges', badBadges);
    }

    // : {
    //     location: 'krakow',
    //     foodTypes: [ 'SUSHI' ],
    //     goodBadges: [ 'VEGAN_FRIENDLY' ],
    //     badBadges: [],
    //     note: 'Vegan sushi specifically mentioned, matching closest food type and adding relevant badge, no other matches found'
    //   }

    const urlWithParams = `/restaurants?${params.toString()}`;
    // console.log('Redirecting to:', urlWithParams);

    // Perform the redirect
    redirect(urlWithParams);
}
