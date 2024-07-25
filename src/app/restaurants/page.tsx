
import PocketBase from 'pocketbase';
import { Restaurant, RestaurantV2 } from './types';

import { RestaurantCard } from './RestaurantCard';
import Link from 'next/link';

export const revalidate = 1

export function makeRestaurantFromV2(restaurantV2: RestaurantV2): Restaurant {

    let foodBadges;
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
    }

    return restaurant
}

export function makeRestV2(restaurant: Restaurant): Partial<RestaurantV2> {
    let foodBadgesV2: string;
    try {
        foodBadgesV2 = JSON.stringify(restaurant.foodBadges);
    } catch (error) {
        foodBadgesV2 = ''
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
    }
}

async function getRestaurants(): Promise<RestaurantV2[]> {

    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('restaurants').getList<RestaurantV2>(1, 30, { sort: '-created' });

    return data.items;
}

export default async function RestaurantsPage() {
    const restaurantsv2 = await getRestaurants();
    const restaurants = restaurantsv2.map((restV2) => makeRestaurantFromV2(restV2))


    return (
        <div className="flex flex-col items-center justify-center pb-24">

            <h1 className="text-3xl font-bold">Restaurants</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        {...restaurant}
                    />
                ))}
            </div>

            <Link href="/restaurants/new" className="mt-8 btn rounded-full btn-primary">Create Restaurant</Link>

        </div>
    );
}

