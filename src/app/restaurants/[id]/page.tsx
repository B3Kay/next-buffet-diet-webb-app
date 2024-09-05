


import { getRestaurant, makeRestaurantFromV2 } from '../restaurants';
import { isBadBadge, isFoodStyleBadge, isGoodBadge } from '@/app/components/FoodBadges';
import RestaurantMap from './RestaurantMap';
import { RestaurantDetails } from './RestaurantDetails';

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

async function getCoordinates(address: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Your App Name'
            }
        });

        const data = await response.json();

        if (data.length > 0) {
            const { lat, lon } = data[0];
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            const latitude = parseFloat(lat);
            const longitude = parseFloat(lon);

            return { latitude: latitude, longitude: longitude };
        } else {
            console.log('No results found');
            return {};
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return {};
    }
}

export default async function RestaurantPage({ params }: { params: { id: string } }) {
    const restaurant = await getRestaurant(params.id);

    // ToDo: This should be done on backend when creating a restaurant.
    const coordinates = await getCoordinates(restaurant.address)

    const images = [restaurant.imageUrl!!]

    const foodStyleBadges = restaurant.foodBadges.filter(isFoodStyleBadge);
    const goodBadges = restaurant.foodBadges.filter(isGoodBadge);
    const badBadges = restaurant.foodBadges.filter(isBadBadge);


    return (
        <div className="flex">
            <RestaurantDetails restaurant={restaurant} images={images} foodStyleBadges={foodStyleBadges} goodBadges={goodBadges} badBadges={badBadges} />
            <div className='flex-1 bg-slate-100 w-full sm:hidden md:flex'>
                <RestaurantMap
                    latitude={coordinates?.latitude || 0}
                    longitude={coordinates?.longitude || 0}

                />
            </div>
        </div >
    );
}



