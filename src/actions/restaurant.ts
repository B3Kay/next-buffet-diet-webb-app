'use server'

import { getCoordinates } from '@/components/utils/map';
import { createRestaurant, likeRestaurant, removeLikedRestaurant } from '@/services/restaurantsService';
import type { RestaurantV2 } from '@/services/types';
import { revalidatePath } from 'next/cache'
import { ClientResponseError } from 'pocketbase';

export async function createRestaurantAction(restaurantV2: RestaurantV2) {
    try {
        const { latitude, longitude } = await getCoordinates(restaurantV2.address);
        const restV2 = { ...restaurantV2, longitude: longitude || 0, latitude: latitude || 0 };

        const result = await createRestaurant(restV2);

        if (result.success) {
            console.log('Created restaurant:', result.data);
            revalidatePath('/restaurants')
            return { success: true, data: result.data };
        }
        console.error('Failed to create restaurant:', result.error);
        throw new Error(result.error); // This error is sent to the client.
    } catch (error) {
        console.error('Error in createRestaurantAction:', error);
        throw new Error(error instanceof Error ? error.message : 'Unexpected error occurred');
    }
}


export async function likeRestaurantAction(restaurantId: string, userId: string) {
    const resp = await likeRestaurant(restaurantId, userId);
    console.log('likeRestaurantAction resp:', resp)
    if (resp instanceof ClientResponseError) {
        console.log(resp.data.message);
        return resp;
    }

    revalidatePath('/restaurants')
    return resp;
}

export async function removeLikeRestaurantAction(recordId: string) {
    const resp = await removeLikedRestaurant(recordId);
    console.log('likeRestaurantAction resp:', resp)
    if (resp.isError) {
        console.log(resp.message);
        return resp;
    }

    revalidatePath('/restaurants')
    return resp;
}
