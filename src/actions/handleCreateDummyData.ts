'use server'

import { RestaurantBaseV2 } from "@/services/types";
import { getUser, isUserAuthenticated } from "./auth";
import db from "@/db/db";
import { createRestaurant } from "@/services/restaurantsService";






export const handleCeateDummyData = async (restaurantsV2: RestaurantBaseV2[]) => {
    console.log('handleCeateDummyData');
    const isAuthenticated = await isUserAuthenticated();
    if (!isAuthenticated) {
        console.log('User not authenticated');
        return { error: 'User not authenticated' };
    }
    console.log('User authenticated', isAuthenticated);


    // const resp = await createRestaurant(restaurantsV2[0])
    // console.log('resp', resp)

    // const c
    // Map restaurants to promises
    let created = 0;
    let messages: string[] = [];
    const restaurantPromises = restaurantsV2.map(async (restaurant) => {
        try {
            const result = await createRestaurant(restaurant);
            if (!(result instanceof Error)) {
                console.log(`Created restaurant: ${restaurant.name}`);
                created++;
            } else {
                messages.push(`Failed to create restaurant: ${restaurant.name} - ${result.message}`);
                console.log(`Failed to create restaurant: ${restaurant.name} - ${result.message}`);
            }
        } catch (e) {
            messages.push(`Error creating restaurant: ${restaurant.name} - ${e}`);
            console.error(`Error creating restaurant: ${restaurant.name}`, e);
        }
    });


    // // Wait for all restaurant creation promises to resolve
    await Promise.all(restaurantPromises);

    return { created, messages }
}