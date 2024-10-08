import { getLikedRestaurants } from '@/services/restaurantsService';
import { Restaurant } from '@/services/types';

import { getUser } from '@/actions/auth';

export default async function LikedRestaurants() {
    const user = await getUser();
    let restaurants: Restaurant[] = []
    if (user && user.id) {
        restaurants = await getLikedRestaurants(user.id);
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liked Restaurants</h1>
            {restaurants.length === 0 ? (
                <p>No liked restaurants found.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id} className="mb-2">
                            <div className="p-4 border rounded shadow-sm">
                                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                                <p>{restaurant.description}</p>
                                <p className="text-sm text-gray-600">{restaurant.address}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
