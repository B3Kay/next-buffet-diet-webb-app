'use server'

import { getCoordinates } from '@/components/utils/map';
import { createRestaurant, updateRestaurant, deleteRestaurant, getRestaurant, likeRestaurant, removeLikedRestaurant } from '@/services/restaurantsService';
import type { RestaurantBaseV2, RestaurantV2 } from '@/services/types';
import { revalidatePath } from 'next/cache'
import { ClientResponseError } from 'pocketbase';
import { getUser } from './auth';

async function requireAdmin() {
    const user = await getUser();
    if (!user || !user.isAdmin) {
        throw new Error('Unauthorized: admin access required');
    }
    return user;
}

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


export async function updateRestaurantAction(restaurantId: string, restaurantV2: Partial<RestaurantBaseV2>) {
    await requireAdmin();

    try {
        // Only re-geocode if address actually changed
        if (restaurantV2.address) {
            const existing = await getRestaurant(restaurantId);
            if (existing && existing.address !== restaurantV2.address) {
                const { latitude, longitude } = await getCoordinates(restaurantV2.address);
                restaurantV2.latitude = latitude || 0;
                restaurantV2.longitude = longitude || 0;
            }
        }

        const result = await updateRestaurant(restaurantId, restaurantV2);

        if (result.success) {
            revalidatePath('/restaurants');
            revalidatePath(`/restaurants/${restaurantId}`);
            return { success: true, data: result.data };
        }
        throw new Error(result.error);
    } catch (error) {
        console.error('Error in updateRestaurantAction:', error);
        throw new Error(error instanceof Error ? error.message : 'Unexpected error occurred');
    }
}

export async function deleteRestaurantAction(restaurantId: string) {
    await requireAdmin();

    try {
        const result = await deleteRestaurant(restaurantId);

        if (result.success) {
            revalidatePath('/restaurants');
            return { success: true };
        }
        throw new Error(result.error);
    } catch (error) {
        console.error('Error in deleteRestaurantAction:', error);
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
