import { RestaurantV2, Restaurant } from "./types";

import PocketBase from 'pocketbase';

export function makeRestaurantFromV2(restaurantV2: RestaurantV2): Restaurant {

    let foodBadges: Array<string>;
    try {
        foodBadges = JSON.parse(restaurantV2.foodBadges);
    } catch (error) {
        foodBadges = [];
    }

    const restaurant: Restaurant = {
        id: restaurantV2.id,
        name: restaurantV2.name,
        description: restaurantV2.description,
        address: restaurantV2.address,
        type: restaurantV2.type,
        price: restaurantV2.price,
        rating: restaurantV2.rating,
        website: restaurantV2.website,
        imageUrl: restaurantV2.imageUrl,
        foodBadges: foodBadges,
        // 
        collectionId: restaurantV2.collectionId,
        collectionName: restaurantV2.collectionName,
        created: restaurantV2.created,
        updated: restaurantV2.updated,
    };

    return restaurant;
}

export function makeRestV2(restaurant: Restaurant): RestaurantV2 {
    let foodBadgesV2: string;
    try {
        foodBadgesV2 = JSON.stringify(restaurant.foodBadges);
    } catch (error) {
        foodBadgesV2 = '';
    }

    return {
        id: restaurant.id || '',
        name: restaurant.name || '',
        description: restaurant.description || '',
        address: restaurant.address || '',
        type: restaurant.type || '',
        price: restaurant.price || 0,
        rating: restaurant.rating || 0,
        website: restaurant.website || '',
        imageUrl: restaurant.imageUrl || '',
        foodBadges: foodBadgesV2 || '',
        // 
        collectionId: restaurant.collectionId || '',
        collectionName: restaurant.collectionName || '',
        created: restaurant.created || '',
        updated: restaurant.updated || '',
    };
}

// PocketBase database URL
const pbUrl = 'http://127.0.0.1:8090';
const db = new PocketBase(pbUrl);

export async function getRestaurants(): Promise<Restaurant[]> {
    const data = await db.collection('restaurants').getList<RestaurantV2>(1, 30, { sort: '-created' });
    const restaurants = data.items.map((restV2) => makeRestaurantFromV2(restV2))
    return restaurants;

}

export async function getRestaurant(restaurantId: string): Promise<Restaurant | null> {
    try {
        const data = await db.collection('restaurants').getOne<RestaurantV2>(restaurantId);

        if (data.name === undefined) {
            console.log('No data found');
            return null;
        }
        return makeRestaurantFromV2(data);
    } catch (error) {
        console.log('Error fetching restaurant:', error);
        return null;
    }

}


export async function createRestaurant(restaurant: RestaurantV2) {
    const collection = db.collection<RestaurantV2>('restaurants');

    await collection.create<RestaurantV2>(restaurant);

}