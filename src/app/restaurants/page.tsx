
import { getRestaurants, getRestaurantsByProximity } from '../../services/restaurantsService';
import { isUserAuthenticated } from '../../actions/auth';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantSearchSection } from './components/RestaurantSearchSection';

import { Restaurant } from '@/services/types';
import RestaurantsMap from './components/RestaurantsMap';




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
    const userLat = searchParams?.latitude ? Number(searchParams.latitude) : 0;
    const userLng = searchParams?.longitude ? Number(searchParams.longitude) : 0;

    if (searchParams?.latitude && searchParams?.longitude) {
        console.log('Searching by proximity', userLat, userLng);
        restaurants = await getRestaurantsByProximity({ maxDistance: 100, latitude: userLat, longitude: userLng, searchQuery: searchQuery });
    } else {
        console.log('Searching by text');
        restaurants = await getRestaurants(restaurantQuery);
    }

    const isAuthenticated = await isUserAuthenticated();
    // Filter out restaurants with latitude or longitude equal to 0
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.latitude !== 0 && restaurant.longitude !== 0
    );
    const restaurantsMarkers = filteredRestaurants.map(restaurant => ({
        latitude: restaurant.latitude || 0,
        longitude: restaurant.longitude || 0,
        restaurantid: restaurant.id
    }));

    return (
        <div className="flex flex-col items-center justify-center pb-24">
            <div className='max-w-screen-lg w-full'>
                <RestaurantSearchSection isAuthenticated={isAuthenticated} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {restaurants.map((restaurant) => (
                        // Show "Open now on the card"
                        // If you are searching for a restaurant you probably want to eat it now, so is it open now?
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
                <div className='flex-1  w-full sm:hidden md:flex h-[600px] rounded-lg overflow-hidden'>

                    <RestaurantsMap restaurantMarkers={restaurantsMarkers}
                        // This should be based on search, current user location
                        currentMarker={{
                            latitude: userLat,
                            longitude: userLng,
                            restaurantid: ''
                        }} zoomLevel={15} />
                </div>
            </div>
        </div>
    );
}


