


import { getRestaurantRatings, getIsRestaurantLiked, getRestaurant } from '../../../services/restaurantsService';
import { isBadBadge, isFoodStyleBadge, isGoodBadge } from '@/components/FoodBadges';
import RestaurantMap from './_components/RestaurantMap';
import { RestaurantDetails } from './_components/RestaurantDetails';
import { notFound } from 'next/navigation';
import { getCoordinates } from '@/components/utils/map';
import { getUser } from '@/actions/auth';
import { ClientResponseError } from 'pocketbase';
import Breadcrumb from '@/components/core/Breadcrumb';
import { RestaurantReviews } from './_components/RestaurantReviws';

export const revalidate = 1


export default async function RestaurantPage({ params }: { params: { id: string } }) {
    const user = await getUser();

    const restaurant = await getRestaurant(params.id);
    const reviews = await getRestaurantRatings(params.id);

    var restaurantLike: {
        isLiked: boolean;
        recordId: string;
    } = { isLiked: false, recordId: '' };

    if (user && user.id) {
        const resp = await getIsRestaurantLiked(params.id, user.id);
        if (resp instanceof ClientResponseError) {
            console.log('Error fetching restaurant:', resp);
        } else {
            console.log('likes', resp)
            restaurantLike = resp
        }
        // Need error handling here

        // console.log('reviews', reviews)
    }



    if (!restaurant) {
        return notFound();
    }

    const coordinatesFromAddress = await getCoordinates(restaurant.address)

    const images = [restaurant.imageUrl!!]

    const foodStyleBadges = restaurant.foodBadges.filter(isFoodStyleBadge);
    const goodBadges = restaurant.foodBadges.filter(isGoodBadge);
    const badBadges = restaurant.foodBadges.filter(isBadBadge);

    return (
        <div className="max-w-screen-lg mx-auto">
            <Breadcrumb />
            <RestaurantDetails user={user} like={restaurantLike} restaurant={restaurant} images={images} foodStyleBadges={foodStyleBadges} goodBadges={goodBadges} badBadges={badBadges} reviews={reviews.items} />
            <div className='mx-4'>
                <RestaurantReviews reviews={reviews.items} />
            </div>
            <div className='flex-1  w-full sm:hidden md:flex h-[600px] max-h-[50vh]'>
                <RestaurantMap
                    latitude={
                        restaurant.latitude ||
                        coordinatesFromAddress?.latitude || 0}
                    longitude={restaurant.longitude ||
                        coordinatesFromAddress?.longitude || 0}

                />

            </div>
        </div >
    );
}



