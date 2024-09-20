'use server'

import { getCoordinates } from '@/components/utils/map';
import { createRestaurant, likeRestaurant } from '@/services/restaurantsService';
import { RestaurantV2 } from '@/services/types';
import { revalidatePath } from 'next/cache'

export async function createRestaurantAction(restaurantV2: RestaurantV2) {

    const { latitude, longitude } = await getCoordinates(restaurantV2.address)
    const restV2 = { ...restaurantV2, longitude: longitude || 0, latitude: latitude || 0 }

    const resp = await createRestaurant(restV2);

    if (resp instanceof Error) {
        return resp;
    }

    revalidatePath('/restaurants')
    return resp;
}


export async function likeRestaurantAction(restaurantId: string, userId: string) {
    const resp = await likeRestaurant(restaurantId, userId);

    if (resp instanceof Error) {
        return resp;
    }

    revalidatePath('/restaurants')
    return resp;
}