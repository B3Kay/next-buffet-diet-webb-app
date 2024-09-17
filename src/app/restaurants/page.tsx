
import { getRestaurants } from '../../services/restaurantsService';
import { isUserAuthenticated } from '../../actions/auth';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantSearchSection } from './components/RestaurantSearchSection';



export default async function RestaurantsPage() {
    const restaurants = await getRestaurants({});
    const isAuthenticated = await isUserAuthenticated();

    return (
        <div className=" flex flex-col items-center justify-center pb-24">
            <div className='max-w-screen-lg '>

                <RestaurantSearchSection isAuthenticated={isAuthenticated} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            {...restaurant}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}


