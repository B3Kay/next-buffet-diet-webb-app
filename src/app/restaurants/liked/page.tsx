import { getLikedRestaurants } from '@/services/restaurantsService';
import { Restaurant } from '@/services/types';

import { getUser } from '@/actions/auth';
import Link from 'next/link';

export default async function LikedRestaurants() {
    const user = await getUser();
    let restaurants: Restaurant[] = []
    if (user && user.id) {
        restaurants = await getLikedRestaurants(user.id);
    }


    return (
        <div className="max-w-screen-lg mx-auto">
            <h1 className="text-2xl font-bold m-5">Liked Restaurants</h1>
            {restaurants.length === 0 ? (
                <p>No liked restaurants found.</p>
            ) : (
                <ul className="">
                    {restaurants.map((restaurant) => (

                        <li key={restaurant.id} className="mb-2">
                            <Link href={`/restaurants/${restaurant.id}`}>
                                <div className="roup rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-muted/40 bg-card">
                                    <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                                    <p>{restaurant.description}</p>
                                    <p className="text-sm text-gray-600">{restaurant.address}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
