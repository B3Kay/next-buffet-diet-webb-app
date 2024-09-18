
import { getRestaurants, getRestaurantsByProximity } from '../../services/restaurantsService';
import { isUserAuthenticated } from '../../actions/auth';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantSearchSection } from './components/RestaurantSearchSection';

import { Restaurant } from '@/services/types';




export default async function RestaurantsPage({ searchParams }: { searchParams?: { [key: string]: string } }) {
    console.log(searchParams);
    const search = searchParams?.search || '';
    const decodedSearch = decodeURIComponent(search);

    let searchQuery: string | undefined;
    if (decodedSearch && decodedSearch.length > 0) {
        searchQuery = decodedSearch.split(',').map(
            keyword => `name ~ "${keyword}" || address ~ "${keyword}" || type ~ "${keyword}" || foodBadges ~ "${keyword}"`
        ).join(' && ');
    }


    const restaurantQuery = searchQuery && searchQuery.length > 0 ? { filterQuery: searchQuery } : {};

    let restaurants: Restaurant[];
    if (searchParams?.latitude && searchParams?.longitude) {
        console.log('searching by proximity', Number(searchParams.latitude));
        restaurants = await getRestaurantsByProximity({ maxDistance: 20000, latitude: Number(searchParams.latitude), longitude: Number(searchParams.longitude), searchQuery: searchQuery });
    } else {
        restaurants = await getRestaurants(restaurantQuery);
    }
    // const restaurants = await getRestaurants(restaurantQuery);
    const isAuthenticated = await isUserAuthenticated();

    return (
        <div className="flex flex-col items-center justify-center pb-24">
            <div className='max-w-screen-lg'>
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


