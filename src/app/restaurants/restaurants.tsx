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

export function makeRestV2(restaurant: Restaurant): Partial<RestaurantV2> {
    let foodBadgesV2: string;
    try {
        foodBadgesV2 = JSON.stringify(restaurant.foodBadges);
    } catch (error) {
        foodBadgesV2 = '';
    }

    return {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        address: restaurant.address,
        type: restaurant.type,
        price: restaurant.price,
        rating: restaurant.rating,
        website: restaurant.website,
        imageUrl: restaurant.imageUrl,
        foodBadges: foodBadgesV2,
        // 
        collectionId: restaurant.collectionId,
        collectionName: restaurant.collectionName,
        created: restaurant.created,
        updated: restaurant.updated,
    };
}

export async function getRestaurants(): Promise<Restaurant[]> {

    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('restaurants').getList<RestaurantV2>(1, 30, { sort: '-created' });
    const restaurants = data.items.map((restV2) => makeRestaurantFromV2(restV2))
    return restaurants;

}

export async function getRestaurant(restaurantId: string): Promise<Restaurant> {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('restaurants').getOne<RestaurantV2>(restaurantId);

    return makeRestaurantFromV2(data);
}
