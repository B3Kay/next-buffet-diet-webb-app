
import { getRestaurants, getRestaurantsByProximity } from '../../services/restaurantsService';
import { isUserAuthenticated } from '../../actions/auth';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantSearchSection } from './components/RestaurantSearchSection';

import { Restaurant } from '@/services/types';
import { Card } from '@/components/ui/card';




export default async function RestaurantsPage({ searchParams }: { searchParams?: { [key: string]: string } }) {
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
        console.log('Searching by proximity', Number(searchParams.latitude), Number(searchParams.longitude));
        restaurants = await getRestaurantsByProximity({ maxDistance: 100, latitude: Number(searchParams.latitude), longitude: Number(searchParams.longitude), searchQuery: searchQuery });
    } else {
        console.log('Searching by text');
        restaurants = await getRestaurants(restaurantQuery);
    }

    const isAuthenticated = await isUserAuthenticated();

    return (
        <div className="flex flex-col items-center justify-center pb-24">
            <div className='max-w-screen-lg w-full'>
                <RestaurantSearchSection isAuthenticated={isAuthenticated} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            {...restaurant}
                        />
                    ))}

                </div>
                {restaurants.length === 0 &&
                    <div className='justify-center items-center flex flex-col'>
                        <p className="text-center text-muted-foreground m-12">No restaurants found</p>
                    </div>

                }
            </div>
        </div>
    );
}


