import { getBoundingBox, getDistanceBetweenTwoCoordinates } from "@/lib/utils";
import { RestaurantV2, Restaurant, RestaurantV2Keys, LikeV1, LikeBaseV1, ReviewV1, ReviewBase, RestaurantWithRatings, RestaurantBase, RestaurantBaseV2 } from "./types";

import { ClientResponseError } from 'pocketbase';
import { loadAuthFromCookie } from "@/actions/auth";
import db from "@/db/db";

type Result<T> =
    | { success: true; data: T }
    | { success: false; error: string };


export function makeRestaurantFromV2(restaurantV2: RestaurantV2): Restaurant {

    let foodBadges: Array<string>;
    try {
        foodBadges = JSON.parse(restaurantV2.foodBadges);
    } catch (error) {
        foodBadges = [];
    }

    const restaurant: Restaurant = {
        id: restaurantV2.id,
        name: restaurantV2.name,
        description: restaurantV2.description,
        address: restaurantV2.address,
        type: restaurantV2.type,
        price: restaurantV2.price,
        rating: restaurantV2.rating,
        website: restaurantV2.website,
        imageUrl: restaurantV2.imageUrl,
        longitude: restaurantV2.longitude,
        latitude: restaurantV2.latitude,
        foodBadges: foodBadges,
        reviews: restaurantV2.expand?.reviews_via_restaurantId || [],
        // 
        collectionId: restaurantV2.collectionId,
        collectionName: restaurantV2.collectionName,
        created: restaurantV2.created,
        updated: restaurantV2.updated,
    };

    return restaurant;
}

export function makeRestV2(restaurant: Restaurant): RestaurantV2 {
    let foodBadgesV2: string;
    try {
        foodBadgesV2 = JSON.stringify(restaurant.foodBadges);
    } catch (error) {
        foodBadgesV2 = '';
    }

    return {
        name: restaurant.name || '',
        description: restaurant.description || '',
        address: restaurant.address || '',
        type: restaurant.type || '',
        price: restaurant.price || 0,
        rating: restaurant.rating || 0,
        website: restaurant.website || '',
        imageUrl: restaurant.imageUrl || '',
        foodBadges: foodBadgesV2 || '',
        longitude: restaurant.longitude || 0,
        latitude: restaurant.latitude || 0,
        // 
        id: restaurant.id || '',
        collectionId: restaurant.collectionId || '',
        collectionName: restaurant.collectionName || '',
        created: restaurant.created || '',
        updated: restaurant.updated || '',
    };
}

export function makeRestaurantBaseV2(restaurant: Restaurant): RestaurantBaseV2 {
    let foodBadgesV2: string;
    try {
        foodBadgesV2 = JSON.stringify(restaurant.foodBadges);
    } catch (error) {
        foodBadgesV2 = '';
    }

    return {
        name: restaurant.name || '',
        description: restaurant.description || '',
        address: restaurant.address || '',
        type: restaurant.type || '',
        price: restaurant.price || 0,
        rating: restaurant.rating || 0,
        website: restaurant.website || '',
        imageUrl: restaurant.imageUrl || '',
        foodBadges: foodBadgesV2 || '',
        longitude: restaurant.longitude || 0,
        latitude: restaurant.latitude || 0,
    };
}


export async function getRestaurants({ page = 1, perPage = 30, sortKey = 'created', sortOrder = 'asc', filterQuery = '' }: { page?: number, perPage?: number, sortKey?: RestaurantV2Keys, sortOrder?: 'asc' | 'desc', filterQuery?: string } = {}): Promise<Restaurant[]> {
    const order = sortOrder === 'desc' ? '' : '-'; // Only prepend '-' for descending order

    let data;
    try {
        data = await db.client.collection('restaurants').getList<RestaurantV2>(page, perPage, {
            sort: order + sortKey,
            filter: filterQuery,
            expand: 'reviews_via_restaurantId'
        });
        console.log('Successfully fetched restaurants', data.items[0])

    } catch (error) {
        console.error('Error fetching restaurants with filterQuery:', filterQuery, error);
        throw new Error('Failed to fetch restaurants');
    }
    const restaurants = data.items.map((restV2) => makeRestaurantFromV2(restV2))
    return restaurants;
}

export async function getRestaurantsByProximity({ latitude, longitude, maxDistance = 10, searchQuery = '', page = 1, perPage = 30 }: { latitude: number, longitude: number, maxDistance?: number, searchQuery?: string, page?: number, perPage?: number }) {
    // Fetch all restaurants matching text search
    const { minLat, maxLat, minLng, maxLng } = getBoundingBox(latitude, longitude, maxDistance);


    const filterQuery = `latitude >= ${minLat} && latitude <= ${maxLat} && longitude >= ${minLng} && longitude <= ${maxLng} ${searchQuery ? `&& ${searchQuery}` : ''}`;
    console.log('filterQuery:', filterQuery)

    const restaurantsV2InBoundingBox = await db.client.collection('restaurants').getList<RestaurantV2>(page, perPage, {
        filter: filterQuery,
        sort: 'created',
        sortOrder: '-',
        expand: 'reviews_via_restaurantId'
    });

    if (latitude && longitude) {
        const nearbyRestaurants = restaurantsV2InBoundingBox.items.filter((restaurant) => {
            const distance = getDistanceBetweenTwoCoordinates(
                latitude,
                longitude,
                restaurant.latitude,
                restaurant.longitude
            );
            return distance <= maxDistance;
        });
        return nearbyRestaurants.map((restV2) => makeRestaurantFromV2(restV2));
    }
    return restaurantsV2InBoundingBox.items.map((restV2) => makeRestaurantFromV2(restV2));
}

export const doesRestaurantExist = async (restaurantName: string): Promise<boolean> => {
    try {
        // Query the collection to check if a restaurant with this name exists
        const existingRestaurant = await db.client.collection('restaurants').getFirstListItem(`name="${restaurantName}"`);

        // If we found a restaurant with the same name, return true (it exists)
        return !!existingRestaurant;
    } catch (error) {
        // If an error occurs, such as no restaurant found, return false
        if (error instanceof ClientResponseError && error.status === 404) {
            // No restaurant found
            return false;
        }
        console.error('Error checking for existing restaurant', error);
        return false;
    }
};


export async function getRestaurant(restaurantId: string): Promise<Restaurant | null> {
    try {
        const data = await db.client.collection('restaurants').getOne<RestaurantV2>(restaurantId);

        if (data.name === undefined) {
            console.log('No data found');
            return null;
        }
        return makeRestaurantFromV2(data);
    } catch (error) {
        console.log('Error fetching restaurant:', error);
        return null;
    }

}

export async function createRestaurant(restaurant: RestaurantBaseV2): Promise<Result<RestaurantBaseV2>> {
    try {
        const existAlready = await doesRestaurantExist(restaurant.name);

        if (existAlready) {
            return { success: false, error: `Restaurant with name ${restaurant.name} already exists` };
        }

        const collection = db.client.collection<RestaurantBaseV2>('restaurants');
        console.log('Creating restaurant:', restaurant)
        const resp = await collection.create<RestaurantBaseV2>(restaurant, { requestKey: restaurant.name });

        return { success: true, data: resp };
    } catch (error) {
        console.log('Error creating restaurant:', error);

        return { success: false, error: 'Error creating restaurant' };
    }
}


export async function likeRestaurant(restaurantId: string, userId: string) {

    await loadAuthFromCookie();

    try {
        const record = await db.client.collection('likes').create<LikeBaseV1>({ restaurantId, userId });
        return record;

    } catch (error) {
        console.log('Error liking reestaurant:', error);
        return error as ClientResponseError;
    }
}

export async function getLikedRestaurants(userId: string): Promise<Restaurant[]> {
    await loadAuthFromCookie();

    try {
        const likes = await db.client.collection('likes').getFullList<LikeV1>({
            filter: `userId = "${userId}"`,
        });

        const likedRestaurants: Restaurant[] = [];
        for (const like of likes) {
            const restaurant = await getRestaurant(like.restaurantId);
            if (restaurant) {
                likedRestaurants.push(restaurant);
            }
        }

        return likedRestaurants;
    } catch (error) {
        console.log('Error fetching liked restaurants:', error);
        return [];
    }
}



// TODO, Refactor functions to use this error / response pattern
type SuccessResponse<T> = {
    isError: false;
    data: T; // Replace `any` with the actual type of the successful response if known
};

type ErrorResponse = {
    isError: true;
    message: string;
    code?: number;
};

type RemoveLikedRestaurantResponse<T> = SuccessResponse<T> | ErrorResponse;

export async function removeLikedRestaurant(recordId: string): Promise<RemoveLikedRestaurantResponse<boolean>> {

    await loadAuthFromCookie();

    try {
        const record = await db.client.collection('likes').delete(recordId);
        return {
            isError: false,
            data: record,
        };

    } catch (error) {
        if (error instanceof ClientResponseError) {
            return {
                isError: true,
                message: error.message,
                code: error.status,
            };
        }

        return {
            isError: true,
            message: "An unexpected error occurred",
        };
    }
}

export async function getIsRestaurantLiked(restaurantId: string, userId: string) {
    await loadAuthFromCookie();

    console.log('getIsRestaurantLiked', restaurantId, userId)
    const likeQuery = `userId = "${userId}" && restaurantId = "${restaurantId}"`;
    try {
        console.log('token:', db.client.authStore.token)
        const data = await db.client.collection('likes').getList<LikeV1>(1, 1, { filter: likeQuery });
        return { isLiked: data.totalItems > 0, recordId: data.items[0]?.id };
    } catch (error) {
        console.log('Error fetching restaurant:', error);
        return error as ClientResponseError;
    }
}


export async function reviewRestaurant(review: ReviewBase) {
    await loadAuthFromCookie();

    const resp = await db.client.collection('reviews').create<ReviewBase>({ ...review });

    return resp;
}

export async function getRestaurantRatings(restaurantId: string, page = 1, perPage = 100) {

    const reviews = await db.client.collection('reviews').getList<ReviewV1>(1, 100, {
        filter: `restaurantId = "${restaurantId}"`
    });

    return reviews;
}

// If we change to a more powerfull db, we can join the reviews table with the restaurants table to fetch reviews for multiple restaurants at once
export async function getReviewsForRestaurants(restaurantIds: string[]) {
    const filterQuery = restaurantIds.map(id => `restaurantId="${id}"`).join(' || ');
    const reviews = await db.client.collection('reviews').getList(1, 1000, {
        filter: filterQuery
    });
    return reviews.items;
}


export function mapRestaurantsWithAvarageReviews(restaurants: Restaurant[]): RestaurantWithRatings[] {
    const newRestaurants: RestaurantWithRatings[] = restaurants.map(restaurant => {
        const reviews = restaurant.reviews || [];
        const totalRatings = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
        const avgRating = reviews.length > 0 ? totalRatings / reviews.length : 0;

        return {
            ...restaurant,
            averageRating: avgRating,
            reviews: reviews
        };
    });

    return newRestaurants;
}

export async function getTotalRestaurants() {
    try {
        const restaurants = await db.client.collection('restaurants').getList(1, 1)
        return restaurants.totalItems
    } catch (error) {
        console.error('Error getting total restaurants', error)
        return 0
    }
}
