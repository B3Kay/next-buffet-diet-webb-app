'use server'

import { createRestaurant } from '@/services/restaurantsService';
import { RestaurantV2 } from '@/services/types';
import { revalidatePath } from 'next/cache'

export default async function createRestaurantAction(restaurantV2: RestaurantV2) {
    const resp = await createRestaurant(restaurantV2);

    if (resp instanceof Error) {
        return resp;
    }
    revalidatePath('/restaurants')
    return resp;
}