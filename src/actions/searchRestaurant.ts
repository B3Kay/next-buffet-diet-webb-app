'use server'
import type { GeolocationCoords } from "@/lib/utils";
import { getLLMParsedQuery } from "@/services/groqService";
import { redirect } from "next/navigation";

export async function searchRestaurantAction(search: string, userLocation: GeolocationCoords) {
    // Fetch the groq response
    const groqResponse = await getLLMParsedQuery(search);
    console.log('groqResponse:', groqResponse);
    console.log('userLocation:', userLocation);

    // Safely handle the groqResponse object and its properties
    const foodStyles = Array.isArray(groqResponse?.foodStyles) ? groqResponse.foodStyles.join(',') : false;
    const goodBadges = Array.isArray(groqResponse?.goodBadges) ? groqResponse.goodBadges.join(',') : false;
    const badBadges = Array.isArray(groqResponse?.badBadges) ? groqResponse.badBadges.join(',') : false;


    const params = new URLSearchParams();

    if (groqResponse.location.length > 0) {
        params.append('location', groqResponse.location)
    } else {
        params.append('userLocation', `${userLocation.latitude},${userLocation.longitude}`);
    }
    if (foodStyles) {
        params.append('foodStyles', foodStyles);
    }
    if (goodBadges) {
        params.append('goodBadges', goodBadges);
    }
    if (badBadges) {
        params.append('badBadges', badBadges);
    }
    if (groqResponse.restaurantType) {
        params.append('restaurantType', groqResponse.restaurantType);
    }


    const urlWithParams = `/restaurants?${params.toString()}`;

    redirect(urlWithParams);
}
