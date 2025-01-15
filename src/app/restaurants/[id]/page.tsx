


import { getRestaurantRatings, getIsRestaurantLiked, getRestaurant } from '../../../services/restaurantsService';
import { isBadBadge, isFoodStyleBadge, isGoodBadge } from '@/components/FoodBadges';
// import RestaurantMap from './_components/RestaurantMap';
import { RestaurantDetails } from './_components/RestaurantDetails';
import { notFound } from 'next/navigation';
import { getCoordinates } from '@/components/utils/map';
import { getUser } from '@/actions/auth';
import { ClientResponseError } from 'pocketbase';
import RestaurantBreadcrumb from '@/components/core/Breadcrumb';
// import { RestaurantReviews } from './_components/RestaurantReviews';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { RestaurantReviews } from './_components/RestaurantReviews';

export const revalidate = 1

const DynamicBreadcrumb = dynamic(() => import('@/components/core/Breadcrumb'), {
    loading: () => <p>Loading Breadcrumb...</p>,
});

const DynamicMap = dynamic(() => import('./_components/RestaurantMap'), {
    loading: () => <p>Loading Map...</p>,
});



export default async function RestaurantPage({ params }: { params: { id: string } }) {
    const user = await getUser();

    const restaurant = await getRestaurant(params.id);
    const reviews = await getRestaurantRatings(params.id);

    let restaurantLike: {
        isLiked: boolean;
        recordId: string;
    } = { isLiked: false, recordId: '' };

    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (user && user.id) {
        const resp = await getIsRestaurantLiked(params.id, user.id);
        if (resp instanceof ClientResponseError) {
            console.log('Error fetching restaurant:', resp);
        } else {
            console.log('likes', resp)
            restaurantLike = resp
        }
    }



    if (!restaurant) {
        return notFound();
    }

    const images = [restaurant.imageUrl]

    const foodStyleBadges = restaurant.foodBadges.filter(isFoodStyleBadge);
    const goodBadges = restaurant.foodBadges.filter(isGoodBadge);
    const badBadges = restaurant.foodBadges.filter(isBadBadge);

    return (
        <div className="max-w-screen-lg mx-auto">
            <Suspense fallback={<p>Loading Breadcrumb...</p>}>
                <DynamicBreadcrumb />
            </Suspense>

            <RestaurantDetails
                user={user}
                like={restaurantLike}
                restaurant={restaurant}
                images={[restaurant.imageUrl]}
                foodStyleBadges={foodStyleBadges}
                goodBadges={goodBadges}
                badBadges={badBadges}
                reviews={reviews.items}
            />

            <div className="mx-4">
                <Suspense fallback={<p>Loading Reviews...</p>}>
                    <RestaurantReviews reviews={reviews.items} />
                </Suspense>
            </div>

            <div className="flex-1 w-full sm:hidden md:flex h-[600px] max-h-[50vh]">
                <DynamicMap
                    latitude={restaurant.latitude ?? 0}
                    longitude={restaurant.longitude ?? 0}
                />
            </div>
        </div>
    );
}



