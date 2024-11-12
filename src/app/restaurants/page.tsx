
import { getRestaurants, getRestaurantsByProximity } from '../../services/restaurantsService';
import { isUserAuthenticated } from '../../actions/auth';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantSearchSection } from './components/RestaurantSearchSection';

import { Restaurant } from '@/services/types';
import RestaurantsMap from './components/RestaurantsMap';
import Breadcrumb from '@/components/core/Breadcrumb';
import { getLLMParsedQuery } from '@/services/groqService';


// revalidate
export const revalidate = 10

export default async function RestaurantsPage({ searchParams }: { searchParams?: { [key: string]: string } }) {
    const search = searchParams?.search || '';
    const decodedSearch = decodeURIComponent(search);



    const location = searchParams?.location || '';
    const userLocation = Array.isArray(searchParams?.userLocation) ? searchParams.userLocation.join(', ') : searchParams?.userLocation || '';
    const foodTypes = Array.isArray(searchParams?.foodTypes) ? searchParams.foodTypes.join(', ') : searchParams?.foodTypes || '';
    const goodBadges = Array.isArray(searchParams?.goodBadges) ? searchParams.goodBadges.join(', ') : searchParams?.goodBadges || '';
    const badBadges = Array.isArray(searchParams?.badBadges) ? searchParams.badBadges.join(', ') : searchParams?.badBadges || '';

    console.log('THIS IS THE PAGE ---------------')
    console.log('userLocation:', userLocation)
    console.log('location:', location)
    console.log('foodTypes:', foodTypes)
    console.log('goodBadges:', goodBadges)
    console.log('badBadges:', badBadges)

    let searchQuery: string | undefined;
    if (decodedSearch && decodedSearch.length > 0) {
        searchQuery = decodedSearch.split(',').map(
            keyword => `name ~ "${keyword}" || address ~ "${keyword}" || type ~ "${keyword}" || foodBadges ~ "${keyword}"`
        ).join(' && ');
    }


    const restaurantQuery = searchQuery && searchQuery.length > 0 ? { filterQuery: searchQuery } : {};

    let restaurants: Restaurant[];
    const userLat = searchParams?.latitude ? Number(searchParams.latitude) : null;
    const userLng = searchParams?.longitude ? Number(searchParams.longitude) : null;
    const hasLatLng = userLat && userLng;

    if (hasLatLng) {
        restaurants = await getRestaurantsByProximity({ maxDistance: 100, latitude: userLat, longitude: userLng, searchQuery: searchQuery });
    } else {
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
        restaurantid: restaurant.id,
        restaurantName: restaurant.name
    }));


    return (
        <div className="flex flex-col items-center justify-center pb-24">
            <div className={`${!hasLatLng && 'max-w-screen-lg'} w-full`}>
                <Breadcrumb />
                <RestaurantSearchSection isAuthenticated={isAuthenticated} />
                <div className={`${hasLatLng && 'grid grid-cols-1 md:grid-cols-2 gap-4 h-screen'}`}>



                    {restaurants.length === 0 ?
                        <div className='justify-center items-center flex flex-col'>
                            <p className="text-center text-muted-foreground m-12">No restaurants found</p>
                        </div>
                        :
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {restaurants.map((restaurant) => (
                                // Show "Open now on the card"
                                // If you are searching for a restaurant you probably want to eat it now, so is it open now?
                                <RestaurantCard
                                    key={restaurant.id}
                                    {...restaurant}
                                />
                            ))}

                        </div>
                    }
                    {(userLat && userLng) &&
                        <div className='flex-1  w-full sm:hidden md:flex h-full rounded-lg overflow-hidden'>

                            <RestaurantsMap restaurantMarkers={filteredRestaurants}
                                // This should be based on search, current user location
                                currentLocationMarker={{
                                    latitude: userLat,
                                    longitude: userLng,
                                }} zoomLevel={13} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}


