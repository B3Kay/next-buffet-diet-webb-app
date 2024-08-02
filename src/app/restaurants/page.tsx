

import { RestaurantCard } from './RestaurantCard';
import Link from 'next/link';
import { getRestaurants, makeRestaurantFromV2 } from './restaurants';

export const revalidate = 1

export default async function RestaurantsPage() {
    const restaurants = await getRestaurants();

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

