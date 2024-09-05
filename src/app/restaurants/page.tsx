
import { getRestaurants } from '../../db/pocketbase/restaurants';
import { NavigationButton } from './components/NavigationButton';
import { isUserAuthenticated } from '../../actions/auth';
import { revalidatePath } from 'next/cache';
import { RestaurantCard } from './components/RestaurantCard';


export default async function RestaurantsPage() {
    const restaurants = await getRestaurants();

    const isAuthenticated = await isUserAuthenticated();


    return (
        <div className=" flex flex-col items-center justify-center pb-24">
            <div className='max-w-screen-lg '>
                <h1 className="text-3xl font-bold ml-5">Restaurants</h1>

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
        </div>
    );
}


