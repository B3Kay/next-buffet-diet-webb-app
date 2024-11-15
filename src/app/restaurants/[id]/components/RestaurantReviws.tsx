import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ReviewV1 } from "@/services/types"

import { RestaurantRating } from "../../components/RestaurantCard"
import { formatTimeAgo } from "@/utils/formatDate"


export const RestaurantReviews = ({ reviews }: { reviews: ReviewV1[] }) => {
    return <div className="space-y-4 mb-5">
        <h2 className="text-xl font-bold">Customer Reviews</h2>
        {reviews.length === 0 && <Card className="p-12">
            <p className="text-center text-muted-foreground"><span >Be the first to review this restaurant!</span></p>
        </Card>}
        {reviews.map((review, index) => (
            <Card key={index}>
                <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.userId}`} />
                                <AvatarFallback>{review.userId.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-sm">User {review.userId}</CardTitle>
                                <RestaurantRating rating={parseInt(review.rating)} roundedRating={Math.round(parseInt(review.rating))} id={review.restaurantId} />
                            </div>
                        </div>

                    </div>
                    <span className="absolute top-4 right-5 text-sm text-muted-foreground">
                        {formatTimeAgo(review.updated || review.created)}
                    </span>
                </CardHeader>
                <CardContent>
                    <p className="text-base opacity-80 ">{review.comment}</p>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-wrap gap-2">
                        {/* {review.foodBadges && review.foodBadges.map((badge, badgeIndex) => (
                            <Badge key={badgeIndex} variant="secondary">{badge}</Badge>
                        ))} */}
                        <Badge variant="outline">⏱️ Badges will come soon</Badge>
                    </div>
                    {/* <section className='flex flex-wrap gap-3 '>
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
                    </section> */}
                </CardFooter>
            </Card>
        ))}
    </div>
}