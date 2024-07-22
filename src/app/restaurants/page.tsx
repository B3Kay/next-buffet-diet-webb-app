import Link from 'next/link';
import PocketBase from 'pocketbase';
import { Restaurant } from './types';
import CreateRestaurant from './CreateRestaurant';
import { formatCurrency } from '../../utils/formatCurrency';

export const revalidate = 1

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
                        {...restaurant}
                    />
                ))}
            </div>

            <CreateRestaurant />
        </div>
    );
}

function RestaurantCard(restaurant: Restaurant) {

    const rating = restaurant?.rating ?? 0
    const roundedRating = Math.round(rating);
    return (
        <Link href={`/restaurants/${restaurant.id}`} >

            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <img src={restaurant.image_url} alt={`${restaurant.name} image`} className="w-full h-48 object-cover object-center rounded-lg" />
                <p className="mt-3 max-w-[30ch] text-sm opacity-50">
                    {restaurant.address}
                </p>
                <h2 className="mb-2 text-2xl font-semibold">
                    {restaurant.name}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>


                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {restaurant.description}
                </p>

                <p className='mt-5 text-sm font-bold opacity-50'>{formatCurrency(restaurant.price!!, 'kronor')}</p>
                <div className='flex justify-between  gap-2'>


                    <div className=' flex items-baseline gap-2'>
                        <p className='m-0 max-w-[30ch] text-2xl font-black '>
                            {rating}
                        </p>
                        <div className="rating">
                            {[...Array(5)].map((_, index) => {
                                const isChecked = (index + 1) === roundedRating;
                                return (
                                    <input
                                        key={`${index}_${restaurant.id}`} // Always provide a unique key for list items
                                        type="radio"
                                        name={`rating_${index}_${restaurant.id}`}
                                        className="mask mask-star bg-red-400"
                                        checked={isChecked} // Use checked for controlled components
                                        readOnly // Prevents user from changing the radio buttons
                                    />
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </Link >
    );
}