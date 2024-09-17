


import { getRestaurant, makeRestaurantFromV2 } from '../../../services/restaurantsService';
import { isBadBadge, isFoodStyleBadge, isGoodBadge } from '@/components/FoodBadges';
import RestaurantMap from './components/RestaurantMap';
import { RestaurantDetails } from './components/RestaurantDetails';
import { notFound } from 'next/navigation';
import { getCoordinates } from '@/components/utils/map';

export const revalidate = 1

export const ImageGrid = ({ images: imageUrls }: { images: string[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {imageUrls.map((image) => (
                <img src={image} alt={` image`} className="w-full h-48 object-cover object-center rounded-lg" />
            ))}
        </div>
    );
}

export default async function RestaurantPage({ params }: { params: { id: string } }) {

    const restaurant = await getRestaurant(params.id);

    if (!restaurant) {
        return notFound(); // This triggers the 404 page in Next.js
    }

    // ToDo: This should be done on backend when creating a restaurant.
    const coordinates = await getCoordinates(restaurant.address)

    const images = [restaurant.imageUrl!!]

    const foodStyleBadges = restaurant.foodBadges.filter(isFoodStyleBadge);
    const goodBadges = restaurant.foodBadges.filter(isGoodBadge);
    const badBadges = restaurant.foodBadges.filter(isBadBadge);


    return (
        <div className="">
            <RestaurantDetails restaurant={restaurant} images={images} foodStyleBadges={foodStyleBadges} goodBadges={goodBadges} badBadges={badBadges} />
            <div className='flex-1  w-full sm:hidden md:flex h-[600px]'>
                <RestaurantMap
                    latitude={
                        restaurant.latitude ||
                        coordinates?.latitude || 0}
                    longitude={restaurant.longitude ||
                        coordinates?.longitude || 0}

                />
            </div>
        </div >
    );
}



