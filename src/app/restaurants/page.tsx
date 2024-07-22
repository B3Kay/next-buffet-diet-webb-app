import Link from 'next/link';
import PocketBase from 'pocketbase';
import { Restaurant } from './types';
import CreateRestaurant from './CreateRestaurant';

export const revalidate = 60

async function getRestaurants(): Promise<Restaurant[]> {

    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('restaurants').getList<Restaurant>(1, 30);

    return data.items;
}

export default async function RestaurantsPage() {
    const restaurants = await getRestaurants();

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Restaurants</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                    />
                ))}
            </div>

            <CreateRestaurant />
        </div>
    );
}

function RestaurantCard(restaurant: Restaurant) {
    return (
        <Link href={`/restaurants/${restaurant.id}`} >
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h2 className="mb-3 text-2xl font-semibold">
                    {restaurant.name}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {restaurant.description}
                </p>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {restaurant.address}
                </p>
            </div>
        </Link >
    );
}