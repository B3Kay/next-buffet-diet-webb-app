
import { RestaurantCard } from './RestaurantCard';
import { getRestaurants } from './restaurants';
import { NavigationButton } from './NavigationButton';
import { cookies } from 'next/headers';
import db from '@/db';

// export const revalidate = 1

const isUtherAuthenticated = async () => {
    const cookieStore = cookies();

    const result = await db.isAuthenticated(cookieStore);

    return result as any;
}

export default async function RestaurantsPage() {
    const restaurants = await getRestaurants();

    const isAuthenticated = await isUtherAuthenticated();
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


            {isAuthenticated && <NavigationButton />}
        </div>
    );
}


