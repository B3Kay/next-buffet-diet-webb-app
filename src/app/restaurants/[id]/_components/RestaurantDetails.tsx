'use client';
import { Images } from "@/components/Images";
import { formatCurrency } from "@/utils/formatCurrency";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { Restaurant, ReviewV1 } from "../../../../services/types";
import { RestaurantRating } from "../../_components/RestaurantCard";
import { likeRestaurantAction, removeLikeRestaurantAction } from "@/actions/restaurant";
import { Bookmark, Globe, HeartIcon, PenBoxIcon, Settings, Signpost } from "lucide-react";
import { type AuthModel, ClientResponseError } from "pocketbase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { BookmarkFilledIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ReviewRestaurantFormSection from "./ReviewRestaurantFormSection";
import { getAverageRating } from "@/utils/avarageRating";
import { Card } from "@/components/ui/card";
export const RestaurantDetails = ({ restaurant, images, foodStyleBadges, goodBadges, badBadges, user, like, reviews }:
    {
        restaurant: Restaurant; images: string[]; foodStyleBadges: string[]; goodBadges: string[]; badBadges: string[],
        user: AuthModel | false, like: { isLiked: boolean, recordId: string }, reviews: ReviewV1[]
    }) => {
    const { toast } = useToast()
    const averageRating = getAverageRating(reviews)
    const handleLikeRestaurant = async () => {
        // biome-ignore lint/complexity/useOptionalChain: <explanation>
        if (user && user.id) {
            if (!like.isLiked) {
                console.log('like restaurant', user)
                const resp = await likeRestaurantAction(restaurant.id, user.id);
                if (resp instanceof ClientResponseError) {
                    toast({
                        variant: "destructive",
                        title: "Could not like restaurant",
                        description: resp.message,

                    })
                }
                console.log('successfully removed like', resp);
            } else {
                console.log("removing like", like.recordId)
                const resp = await removeLikeRestaurantAction(like.recordId);
                if (resp.isError) {
                    console.log('We had an error', resp)
                    toast({
                        variant: "destructive",
                        title: "Could not remove like",
                        description: resp.message,

                    })
                }
                console.log('successfully removed like', resp);
            }
        } else {
            console.log('unlike restaurant', user)
        }
    }

    return <div className='w-full px-4 mt-4'>
        <Images imageAlt={restaurant.name} imageUrls={images} />

        <h1 className='mb-4 mt-5 text-3xl font-bold'>{restaurant.name}</h1>
        <section className='flex flex-wrap gap-3 '>
            <Badge variant='outline'>{restaurant.type}</Badge>
            {foodStyleBadges.map((badge, index) => (

                <Badge key={`foodStyleBadge-${badge}`} variant="secondary">
                    {badge}
                </Badge>
            ))}
            {goodBadges.map((badge, index) => (

                <Badge key={`goodBadge-${badge}`} variant="default">
                    {badge}
                </Badge>
            ))}
            {badBadges.map((badge, index) => (

                <Badge key={`badBadge-${badge}`} variant="destructive">
                    {badge}
                </Badge>
            ))}
        </section>
        <Card className="light:bg-athens-gray flex-1 mt-5 flex gap-2 items-center p-5">

            <div>
                <p className='text-sm font-bold opacity-50'>{`${formatCurrency(restaurant.price, 'kronor')} *`}</p>
                <RestaurantRating rating={averageRating} roundedRating={Math.round(averageRating)} id={restaurant.id} /><div className="text-secondary-foreground/30">

                </div>
                <p className="text-xs opacity-50">* Prices may vary</p>

            </div>
            <div className="divider divider-horizontal pointer-events-none" />
            <Sheet>
                <div className="flex flex-col gap-2">
                    <span className="text-secondary-foreground/30">{reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}</span>
                    <SheetTrigger asChild>
                        {/* Review */}
                        <Button className=" sm:hidden flex" ><PenBoxIcon className="mr-2 h-4 w-4" /> <span className="hidden sm:inline">Write a review</span><span className="sm:hidden inline">Review</span></Button>
                    </SheetTrigger>
                </div>

                {!!user && <>
                    {like.isLiked && <Button variant={'secondary'} size={'icon'} className="ml-auto sm:flex hidden" onClick={() => handleLikeRestaurant()}><HeartFilledIcon className="w-5 h-5" /></Button>}
                    {!like.isLiked && <Button variant={'secondary'} size={'icon'} className="ml-auto  sm:flex hidden" onClick={() => handleLikeRestaurant()}><HeartIcon className="w-5 h-5" /></Button>}


                    <SheetTrigger asChild>
                        {/* Review */}
                        <Button className=" sm:flex hidden" ><PenBoxIcon className="mr-2 h-4 w-4" /> Write a review</Button>
                    </SheetTrigger>
                    {/* overflow-x-auto is for scrolling in the dialog sheet */}
                    <SheetContent className="overflow-x-auto">
                        <SheetHeader>
                            <SheetTitle>Let us know what you think</SheetTitle>
                            <SheetDescription>
                                Was it good? Was it bad? You can even add a photo!
                            </SheetDescription>
                            <ReviewRestaurantFormSection restaurantId={restaurant.id} />
                        </SheetHeader>
                    </SheetContent>

                </>
                }</Sheet>
        </Card>


        <section className="mb-4 mt-8 flex flex-col md:flex-row gap-3 justify-between">
            <div className="">
                <h3 className='text-lg mb-2 font-bold'>Description</h3>
                <p className="m-0 md:max-w-[30ch] lg:max-w-[50ch] text-base opacity-50 ">
                    {restaurant.description}
                </p>

            </div>

            <div>
                <div className='hidden sm:flex gap-3 mb-4'>

                    <a href={restaurant.website} target="_blank" rel="noreferrer">
                        <Button variant="secondary"><Globe className="mr-2 h-4 w-4" />Website</Button>
                    </a>
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.website}`} target="_blank" rel="noreferrer">
                        <Button variant="secondary"><Signpost className="mr-2 h-4 w-4" />Directions</Button>
                    </a>
                    {!like.isLiked && <Button variant="secondary" onClick={() => handleLikeRestaurant()} > <Bookmark className="mr-2 h-4 w-4" />Save</Button>}
                    {like.isLiked && <Button variant="secondary" onClick={() => handleLikeRestaurant()} ><BookmarkFilledIcon className="mr-2 h-4 w-4" />Saved</Button>}
                    <Button variant="secondary" aria-label='Edit restaurant' size="icon" disabled><Settings className="h-4 w-4" /></Button>
                </div>
                <div className="sm:hidden flex gap-1 mb-4">

                    <a href={restaurant.website} target="_blank" rel="noreferrer">
                        <Button variant="secondary"><Globe className="mr-2 h-4 w-4" />Website</Button>
                    </a>
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.website}`} target="_blank" rel="noreferrer">
                        <Button variant="secondary"><Signpost className="mr-2 h-4 w-4" />Directions</Button>
                    </a>
                    {!like.isLiked && <Button variant="secondary" size="icon" onClick={() => handleLikeRestaurant()} > <Bookmark className="h-4 w-4" /></Button>}
                    {like.isLiked && <Button variant="secondary" size="icon" onClick={() => handleLikeRestaurant()} ><BookmarkFilledIcon className="h-4 w-4" /></Button>}
                    <Button variant="secondary" aria-label='Edit restaurant' size="icon" disabled><Settings className="h-4 w-4" /></Button>
                </div>

                <div className='flex flex-col gap-3  text-sm text-gray-400 light:text-gray-600 mb-12'>
                    <h4 className='flex items-center'><Icon icon="lucide:map-pin" className='inline mr-3 text-primary' />{restaurant.address}</h4>
                    <h4 className='flex items-center '><Icon icon="lucide:phone" className='inline mr-3 text-primary' />031-312 76 77</h4>
                    <h4 className='flex items-center'><span className='opacity-100 text-success mr-1'><Icon icon="lucide:clock" className='text-primary inline mr-3' />Open </span> - Closes 20:00</h4>
                </div>
            </div>
        </section >
        {/* <div className="badge badge-outline badge-primary">{restaurant.type}</div> */}
    </div >;
};
