import { getRestaurants, getRestaurantsByProximity, getRestaurantsPaginated, mapRestaurantsWithAvarageReviews } from '../../services/restaurantsService';
import { isUserAuthenticated } from '../../actions/auth';
import { RestaurantCard } from './_components/RestaurantCard';
import { RestaurantSearchSection } from './_components/RestaurantSearchSection';

import type { Restaurant } from '@/services/types';
import RestaurantsMap from './_components/RestaurantsMap';
import RestaurantBreadcrumb from '@/components/core/Breadcrumb';
import { UrlBadges } from './_components/UrlBadges';
import type { NominatimAddressJSON } from './_components/SelectAddress';
import { RestaurantFilters } from './_components/RestaurantFilters';
import { Pagination } from './_components/Pagination';


// Escape user input for PocketBase filter strings to prevent injection
function sanitizeFilterValue(value: string): string {
    return value.replace(/[\\"]/g, '\\$&');
}

// revalidate
export const revalidate = 60

export default async function RestaurantsPage({ searchParams }: { searchParams?: { [key: string]: string } }) {
    const search = searchParams?.search || '';
    const location = searchParams?.location || '';
    const restaurantType = searchParams?.restaurantType || '';
    const userLocation = searchParams?.userLocation ? searchParams.userLocation.split(',') : [];
    const foodStyles = searchParams?.foodStyles ? searchParams.foodStyles.split(',') : [];
    const goodBadges = searchParams?.goodBadges ? searchParams.goodBadges.split(',') : [];
    const badBadges = searchParams?.badBadges ? searchParams.badBadges.split(',') : [];

    // New filter params
    const nameFilter = searchParams?.name || '';
    const typeFilter = searchParams?.type || '';
    const sortParam = searchParams?.sort || 'created';
    const currentPage = Number(searchParams?.page) || 1;

    let searchQuery: string | undefined;

    if (foodStyles?.length || goodBadges?.length || badBadges?.length) {
        const foodStylesQuery = Array.isArray(foodStyles)
            ? foodStyles.map(foodType => `foodBadges ~ "${sanitizeFilterValue(foodType)}"`).join(' || ')
            : '';

        const goodBadgesQuery = Array.isArray(goodBadges)
            ? goodBadges.map(badge => `foodBadges ~ "${sanitizeFilterValue(badge)}"`).join(' || ')
            : '';

        const badBadgesQuery = Array.isArray(badBadges)
            ? badBadges.map(badge => `foodBadges ~ "${sanitizeFilterValue(badge)}"`).join(' || ')
            : '';

        const searchQueryParts = [foodStylesQuery, goodBadgesQuery, badBadgesQuery].filter(Boolean);
        searchQuery = searchQueryParts.join(' && ');
    }

    // Build additional filter query from name/type filters
    const filterParts: string[] = [];
    if (searchQuery) filterParts.push(searchQuery);
    if (nameFilter) filterParts.push(`name ~ "${sanitizeFilterValue(nameFilter)}"`);
    if (typeFilter) filterParts.push(`type = "${sanitizeFilterValue(typeFilter)}"`);
    const combinedFilter = filterParts.join(' && ');

    // Determine sort
    let sortKey = 'created';
    let sortOrder: 'asc' | 'desc' = 'asc';
    if (sortParam.startsWith('-')) {
        sortKey = sortParam.slice(1);
        sortOrder = 'desc';
    } else if (sortParam === 'rating') {
        sortKey = 'rating';
        sortOrder = 'desc';
    } else {
        sortKey = sortParam;
        sortOrder = sortParam === 'price' ? 'asc' : 'asc';
    }

    let restaurants: Restaurant[];
    let totalPages = 1;

    let userLat = null;
    let userLng = null;

    if (location) {
        try {
            const coordinates = await getLocationLongLat(location);
            userLat = Number(coordinates.latitude);
            userLng = Number(coordinates.longitude);
        } catch (error) {
            console.error('Failed to get coordinates for location:', error);
        }
    }

    const hasLatLng = userLat && userLng;

    if (hasLatLng && userLat && userLng) {
        restaurants = await getRestaurantsByProximity({ maxDistance: 100, latitude: userLat, longitude: userLng, searchQuery: combinedFilter });
    } else {
        const result = await getRestaurantsPaginated({
            filterQuery: combinedFilter,
            page: currentPage,
            perPage: 12,
            sortKey: sortKey as any,
            sortOrder,
        });
        restaurants = result.items;
        totalPages = result.totalPages;
    }

    const restaurantsWithRatings = mapRestaurantsWithAvarageReviews(restaurants);

    const isAuthenticated = await isUserAuthenticated();
    const filteredRestaurants = restaurantsWithRatings.filter(restaurant =>
        restaurant.latitude !== 0 && restaurant.longitude !== 0
    );

    return (
        <div className="flex flex-col items-center justify-center pb-24">
            <div className={`${!hasLatLng && 'max-w-screen-lg'} w-full`}>
                <RestaurantBreadcrumb />
                <RestaurantSearchSection isAuthenticated={isAuthenticated} />
                <UrlBadges
                    location={location}
                    userLocation={userLocation}
                    restaurantType={restaurantType}
                    foodStyleBadges={foodStyles}
                    goodBadges={goodBadges}
                    badBadges={badBadges}
                />
                <RestaurantFilters />
                <div className={`${hasLatLng && 'grid grid-cols-1 md:grid-cols-2 gap-4'}`}>

                    {restaurantsWithRatings.length === 0 ?
                        <div className='justify-center items-center flex flex-col'>
                            <p className="text-center text-muted-foreground m-12">No restaurants found</p>
                        </div>
                        :
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                {restaurantsWithRatings.map((restaurant) => (
                                    <RestaurantCard
                                        key={restaurant.id}
                                        {...restaurant}
                                    />
                                ))}
                            </div>
                            {!hasLatLng && <Pagination currentPage={currentPage} totalPages={totalPages} />}
                        </div>
                    }
                    {(userLat && userLng) &&
                        <div className='flex-1  w-full md:flex h-[50vh] md:h-[calc(100vh-76px)] sticky top-[76px] rounded-lg overflow-hidden'>

                            <RestaurantsMap restaurantMarkers={filteredRestaurants}
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
