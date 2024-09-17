'use server'

import { getCoordinates } from '@/components/utils/map';
import { createRestaurant } from '@/services/restaurantsService';
import { RestaurantV2 } from '@/services/types';
import { revalidatePath } from 'next/cache'

export default async function createRestaurantAction(restaurantV2: RestaurantV2) {

    const { latitude, longitude } = await getCoordinates(restaurantV2.address)
    const restV2 = { ...restaurantV2, longitude: longitude || 0, latitude: latitude || 0 }

    const resp = await createRestaurant(restV2);

    if (resp instanceof Error) {
        return resp;
    }
    revalidatePath('/restaurants')
    return resp;
}
