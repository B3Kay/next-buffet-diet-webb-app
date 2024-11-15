'use client';
import { Images } from "@/components/Images";
import { formatCurrency } from "@/utils/formatCurrency";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, cn } from "reablocks";
import { Restaurant, ReviewV1 } from "../../../../services/types";
import { RestaurantRating } from "../../components/RestaurantCard";
import { likeRestaurantAction, removeLikeRestaurantAction } from "@/actions/restaurant";
import { Bookmark, Globe, HeartIcon, PenBoxIcon, Settings, Signpost, StarIcon } from "lucide-react";
import { AuthModel, ClientResponseError } from "pocketbase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { BookmarkFilledIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import RestaurantReview from "./RestaurantReview";
import { getAverageRating } from "@/utils/avarageRating";

export const RestaurantDetails = ({ restaurant, images, foodStyleBadges, goodBadges, badBadges, user, like, reviews }:
    {
        restaurant: Restaurant; images: string[]; foodStyleBadges: string[]; goodBadges: string[]; badBadges: string[],
        user: AuthModel | false, like: { isLiked: boolean, recordId: string }, reviews: ReviewV1[]
    }) => {
    const { toast } = useToast()
    const averageRating = getAverageRating(reviews)
    const handleLikeRestaurant = async () => {
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

                <Badge key={`foodStyleBadge-${index}`} variant="secondary">
                    {badge}
                </Badge>
            ))}
            {goodBadges.map((badge, index) => (

                <Badge key={`goodBadge-${index}`} variant="default">
                    {badge}
                </Badge>
            ))}
            {badBadges.map((badge, index) => (

                <Badge key={`badBadge-${index}`} variant="destructive">
                    {badge}
                </Badge>
            ))}
        </section>
        <Card className="light:bg-athens-gray flex-1 mt-5" contentClassName="flex flex gap-2 items-center">

            <div>
                <p className='text-sm font-bold opacity-50'>{formatCurrency(restaurant.price!!, 'kronor')}</p>

                <RestaurantRating rating={averageRating} roundedRating={Math.round(averageRating)} id={restaurant.id!!} />

            </div>
            <div className="divider divider-horizontal pointer-events-none" />
            <div className="text-secondary-foreground/30">
                <p>{reviews.length}</p>
                <a className="">{reviews.length === 1 ? 'Review' : 'Reviews'}</a>
            </div>

            {!!user && <>
                {like.isLiked && <Button variant={'secondary'} size={'icon'} className="ml-auto" onClick={() => handleLikeRestaurant()}><HeartFilledIcon className="w-5 h-5" /></Button>}
                {!like.isLiked && <Button variant={'secondary'} size={'icon'} className="ml-auto" onClick={() => handleLikeRestaurant()}><HeartIcon className="w-5 h-5" /></Button>}

                <Sheet>
                    <SheetTrigger asChild>
                        {/* Review */}
                        <Button ><PenBoxIcon className="mr-2 h-4 w-4" /> Write a review</Button>
                    </SheetTrigger>
                    {/* overflow-x-auto is for scrolling in the dialog sheet */}
                    <SheetContent className="overflow-x-auto">
                        <SheetHeader>
                            <SheetTitle>Let us know what you think</SheetTitle>
                            <SheetDescription>
                                Was it good? Was it bad? You can even add a photo!
                            </SheetDescription>
                            <RestaurantReview restaurantId={restaurant.id} />
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </>
            }
        </Card>

        <div className="divider"></div>
        {/* Description  section*/}
        <section className="mb-4 flex flex-col md:flex-row gap-3 justify-between">
            <div className="">
                <h3 className='text-lg mb-2 font-bold'>Description</h3>
                <p className="m-0 md:max-w-[30ch] lg:max-w-[50ch] text-base opacity-50 ">
                    {restaurant.description}
                </p>

            </div>
            <div className="divider"></div>
            <div>


                <div className='flex gap-3 mb-4'>

                    <a href={restaurant.website} target="_blank" rel="noreferrer">
                        <Button variant="secondary"><Globe className="mr-2 h-4 w-4" />Website</Button>
                    </a>
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.website}`} target="_blank" rel="noreferrer">
                        <Button variant="secondary"><Signpost className="mr-2 h-4 w-4" />Directions</Button>
                    </a>
                    {!like.isLiked && <Button variant="secondary" onClick={() => handleLikeRestaurant()} > <Bookmark className="mr-2 h-4 w-4" />Save</Button>}
                    {like.isLiked && <Button variant="secondary" onClick={() => handleLikeRestaurant()} ><BookmarkFilledIcon className="mr-2 h-4 w-4" />Saved</Button>}
                    <Button variant="secondary" aria-label='Edit restaurant' disabled><Settings className="mr-2 h-4 w-4" /></Button>

                </div>
                <div className='flex flex-col gap-3  text-sm text-sm text-gray-400 light:text-gray-600 mb-12'>
                    <h4 className='flex items-center'><Icon icon="lucide:map-pin" className='inline mr-3 text-primary' />{restaurant.address}</h4>
                    <h4 className='flex items-center '><Icon icon="lucide:phone" className='inline mr-3 text-primary' />031-312 76 77</h4>
                    <h4 className='flex items-center'><span className='opacity-100 text-success mr-1'><Icon icon="lucide:clock" className='text-primary inline mr-3' />Open </span> - Closes 20:00</h4>
                </div>
            </div>
        </section >
        {/* <div className="badge badge-outline badge-primary">{restaurant.type}</div> */}








    </div >;
};
