import { getRestaurants, getRestaurantsByProximity, mapRestaurantsWithAvarageReviews } from '../../services/restaurantsService';
import { isUserAuthenticated } from '../../actions/auth';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantSearchSection } from './components/RestaurantSearchSection';

import { Restaurant } from '@/services/types';
import RestaurantsMap from './components/RestaurantsMap';
import Breadcrumb from '@/components/core/Breadcrumb';
import { getLLMParsedQuery } from '@/services/groqService';
import { UrlBadges } from './components/UrlBadges';
import { NominatimAddressJSON } from './components/SelectAddress';


// revalidate
export const revalidate = 10

export default async function RestaurantsPage({ searchParams }: { searchParams?: { [key: string]: string } }) {
    const search = searchParams?.search || '';
    const decodedSearch = decodeURIComponent(search);



    const location = searchParams?.location || '';
    const restaurantType = searchParams?.restaurantType || '';
    const userLocation = searchParams?.userLocation ? searchParams.userLocation.split(',') : [];
    const foodStyles = searchParams?.foodStyles ? searchParams.foodStyles.split(',') : [];
    const goodBadges = searchParams?.goodBadges ? searchParams.goodBadges.split(',') : [];
    const badBadges = searchParams?.badBadges ? searchParams.badBadges.split(',') : [];

    console.log('THIS IS THE PAGE ---------------')
    console.log('userLocation:', userLocation)
    console.log('location:', location)
    console.log('foodStyles:', foodStyles)
    console.log('goodBadges:', goodBadges)
    console.log('badBadges:', badBadges)



    let searchQuery: string | undefined;

    if (foodStyles?.length || goodBadges?.length || badBadges?.length) {
        // Construct the individual parts of the query

        const foodStylesQuery = Array.isArray(foodStyles)
            ? foodStyles.map(foodType => `foodBadges ~ "${foodType}"`).join(' || ')
            : '';

        const goodBadgesQuery = Array.isArray(goodBadges)
            ? goodBadges.map(badge => `foodBadges ~ "${badge}"`).join(' || ')
            : '';

        const badBadgesQuery = Array.isArray(badBadges)
            ? badBadges.map(badge => `foodBadges ~ "${badge}"`).join(' || ')
            : '';

        // Combine the parts into a single query with '&&' between non-empty sections
        const searchQueryParts = [foodStylesQuery, goodBadgesQuery, badBadgesQuery].filter(Boolean);
        searchQuery = searchQueryParts.join(' && ');

        console.log('searchQuery:', searchQuery);
    }



    // console.log('restaurantQuery:', searchQuery, searchQuery && searchQuery.length > 0, { filterQuery: searchQuery });
    // const restaurantQuery = searchQuery && searchQuery.length > 0 ? { filterQuery: searchQuery } : {};

    let restaurants: Restaurant[];
    // These user lat sould be either location or userLocation


    // let userLat = searchParams?.latitude ? Number(searchParams.latitude) : null;
    // let userLng = searchParams?.longitude ? Number(searchParams.longitude) : null;
    let userLat = null;
    let userLng = null;

    // If we have a location string but no coordinates, try to geocode it
    // const locationCoordinates: { latitude: number | null, longitude: number | null } = { latitude: null, longitude: null };
    if (location) {
        try {
            const coordinates = await getLocationLongLat(location);
            userLat = Number(coordinates.latitude);
            userLng = Number(coordinates.longitude);
        } catch (error) {
            console.error('Failed to get coordinates for location:', error);
            // You might want to show this error to the user
            // For now, we'll continue with null coordinates
        }
    }

    const hasLatLng = userLat && userLng;

    if (hasLatLng && userLat && userLng) {
        console.log('Users proximity query', searchQuery)
        restaurants = await getRestaurantsByProximity({ maxDistance: 100, latitude: userLat, longitude: userLng, searchQuery: searchQuery });
    } else {
        console.log('No users proximity restaurant query', searchQuery)
        restaurants = await getRestaurants({ filterQuery: searchQuery });

    }

    const restaurantsWithRatings = mapRestaurantsWithAvarageReviews(restaurants);


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
                <UrlBadges
                    location={location}
                    userLocation={userLocation}
                    restaurantType={restaurantType}
                    foodStyleBadges={foodStyles}
                    goodBadges={goodBadges}
                    badBadges={badBadges}
                />
                <div className={`${hasLatLng && 'grid grid-cols-1 md:grid-cols-2 gap-4 h-screen'}`}>



                    {restaurantsWithRatings.length === 0 ?
                        <div className='justify-center items-center flex flex-col'>
                            <p className="text-center text-muted-foreground m-12">No restaurants found</p>
                        </div>
                        :
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {restaurantsWithRatings.map((restaurant) => (
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
                                // Key is necessary to re-render the map when the user location changes
                                key={`${userLat}-${userLng}`}
                                currentLocationMarker={{
                                    latitude: userLat,
                                    longitude: userLng,
                                }} zoomLevel={12} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}


async function getLocationLongLat(address: string) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(address)}&limit=1&addressdetails=1`);
        if (!response.ok) {
            throw new Error(`Error fetching location data: ${response.statusText}`);
        }
        const data = await response.json() as NominatimAddressJSON[];
        if (data.length === 0) {
            throw new Error('No location data found for the given address');
        }
        return { longitude: data[0].lon, latitude: data[0].lat };
    } catch (error) {
        console.error('Failed to get location data:', error);
        throw error;
    }
}