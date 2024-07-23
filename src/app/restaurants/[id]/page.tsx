import PocketBase from 'pocketbase';
import { RestaurantRating } from '../RestaurantCard';
import { Restaurant } from '../types';
import { formatCurrency } from '@/utils/formatCurrency';

import { Icon } from '@iconify/react';

export const revalidate = 1

async function getRestaurant(restaurantId: string) {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('restaurants').getOne<Restaurant>(restaurantId);

    return data;
}

const ImageGrid = ({ images: imageUrls }: { images: string[] }) => {
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


    const placeholderImageUrls = [
        'https://images.unsplash.com/photo-1605321995625-c77c7204cd70?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1533142146849-4620b8191531?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1524932326868-56e1f1ede465?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1687254351560-b8fb47e2bdff?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mb-12 text-3xl font-bold">Restaurant / {restaurant.id}</h1>

            <div className='max-w-screen-lg'>
                <ImageGrid images={placeholderImageUrls} />
                <h1 className='mb-1 mt-5 text-3xl font-bold'>{restaurant.name}</h1>
                <div className="badge badge-outline badge-primary">{restaurant.type}</div>
                <p className='mt-5 text-sm font-bold opacity-50'>{formatCurrency(restaurant.price!!, 'kronor')}</p>
                <RestaurantRating rating={restaurant.rating!!} roundedRating={Math.round(restaurant.rating!!)} id={restaurant.id!!} />

                <div className="divider"></div>
                <div className='flex gap-3'>

                    <a href={restaurant.website} target="_blank" rel="noreferrer">
                        <button className="btn btn-sm btn-outline rounded-full">Website</button>
                    </a>
                    <a href={restaurant.website} target="_blank" rel="noreferrer">
                        <button className="btn btn-sm btn-outline rounded-full">Directions</button>
                    </a>
                    <a href={restaurant.website} target="_blank" rel="noreferrer">
                        <button className="btn btn-sm btn-outline rounded-full">Save</button>
                    </a>
                </div>
                <div className="divider"></div>
                <div className='flex flex-col gap-3  '>
                    <h4 className='flex items-center'><Icon icon="lucide:map-pin" className='inline mr-3 text-primary' />{restaurant.address}</h4>
                    <h4 className='flex items-center '><Icon icon="lucide:phone" className='inline mr-3 text-primary' />031-312 76 77</h4>
                    <h4 className='flex items-center'><span className='opacity-100 text-success mr-1'><Icon icon="lucide:clock" className='text-primary inline mr-3' />Open </span> - Closes 20:00</h4>
                </div>
                <div className="divider"></div>
                <h3 className='text-lg mb-2 font-bold'>Description</h3>
                <p className="m-0 max-w-[30ch] text-base opacity-50">
                    {restaurant.description}
                </p>
            </div >
        </div >
    );
}


