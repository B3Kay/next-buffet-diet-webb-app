'use client';
import { Images } from "@/components/Images";
import { formatCurrency } from "@/utils/formatCurrency";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, cn } from "reablocks";
import { Restaurant } from "../../../../services/types";
import { RestaurantRating } from "../../components/RestaurantCard";
import { likeRestaurantAction } from "@/actions/restaurant";
import { HeartIcon } from "lucide-react";
import { AuthModel } from "pocketbase";
import { Button } from "@/components/ui/button";

export const RestaurantDetails = ({ restaurant, images, foodStyleBadges, goodBadges, badBadges, user, restaurantIsLiked }: { restaurant: Restaurant; images: string[]; foodStyleBadges: string[]; goodBadges: string[]; badBadges: string[], user: AuthModel | false, restaurantIsLiked: boolean, }) => {

    const handleLikeRestaurant = async () => {
        if (user && user.id && !restaurantIsLiked) {
            console.log('like restaurant', user)
            const resp = await likeRestaurantAction(restaurant.id, user.id);
            console.log(resp);
        } else {
            console.log('unlike restaurant', user)
        }
    }

    return <div className='w-full px-4 mt-4'>
        <Images imageAlt={restaurant.name} imageUrls={images} />

        <h1 className='mb-1 mt-5 text-3xl font-bold'>{restaurant.name}</h1>

        <div className="badge badge-outline badge-primary">{restaurant.type}</div>
        <Card className="light:bg-athens-gray flex-1 mt-5" contentClassName="flex flex gap-2 items-center">

            <div>
                <p className='text-sm font-bold opacity-50'>{formatCurrency(restaurant.price!!, 'kronor')}</p>

                <RestaurantRating rating={restaurant.rating!!} roundedRating={Math.round(restaurant.rating!!)} id={restaurant.id!!} />

            </div>
            <div className="divider divider-horizontal pointer-events-none" />
            <div className="text-secondary-foreground/30">
                <p>X</p>
                <a className="">Reviews</a>
            </div>

            {!!user && <>
                {restaurantIsLiked && <Button variant={'default'} size={'icon'} className="ml-auto" onClick={() => handleLikeRestaurant()}><HeartIcon className="w-5 h-5" /></Button>}
                {!restaurantIsLiked && <Button variant={'outline'} size={'icon'} className="ml-auto" onClick={() => handleLikeRestaurant()}><HeartIcon className="w-5 h-5" /></Button>}
            </>}

        </Card>

        <div className="divider"></div>

        <div className='flex flex-wrap gap-3 max-w-lg'>

            {foodStyleBadges.map((badge, index) => (
                <div key={`foodStyleBadge-${index}`} className="badge">
                    {badge}
                </div>
            ))}
            {goodBadges.map((badge, index) => (
                <div key={`goodBadge-${index}`} className="badge  badge-success">
                    {badge}
                </div>
            ))}
            {badBadges.map((badge, index) => (
                <div key={`badBadge-${index}`} className="badge  badge-warning">
                    {badge}
                </div>
            ))}
        </div>
        <div className="divider"></div>
        <div className='flex gap-3'>

            <a href={restaurant.website} target="_blank" rel="noreferrer">
                <button className="btn btn-sm btn-outline rounded-full"><Icon icon="lucide:globe" />Website</button>
            </a>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.website}`} target="_blank" rel="noreferrer">
                <button className="btn btn-sm btn-outline rounded-full"><Icon icon="lucide:signpost" />Directions</button>
            </a>
            <button className="btn btn-sm btn-outline rounded-full" disabled><Icon icon="lucide:bookmark" />Save</button>
            <button aria-label='Edit restaurant' className="btn btn-sm btn-outline btn-circle" disabled><Icon icon="lucide:settings" /></button>

        </div>

        <div className="divider"></div>
        <h3 className='text-lg mb-2 font-bold'>Description</h3>
        <p className="m-0 max-w-[30ch] text-base opacity-50 ">
            {restaurant.description}
        </p>
        <div className="divider"></div>
        <div className='flex flex-col gap-3  text-sm text-sm text-gray-400 light:text-gray-600 mb-12'>
            <h4 className='flex items-center'><Icon icon="lucide:map-pin" className='inline mr-3 text-primary' />{restaurant.address}</h4>
            <h4 className='flex items-center '><Icon icon="lucide:phone" className='inline mr-3 text-primary' />031-312 76 77</h4>
            <h4 className='flex items-center'><span className='opacity-100 text-success mr-1'><Icon icon="lucide:clock" className='text-primary inline mr-3' />Open </span> - Closes 20:00</h4>
        </div>
    </div >;
};
