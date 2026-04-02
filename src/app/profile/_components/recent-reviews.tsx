import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReviewV1 } from "@/services/types"
import { formatTimeAgo } from "@/utils/formatDate"

export function RecentReviews({ reviews }: { reviews: ReviewV1[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent>
                {reviews.length === 0 ? (
                    <p className="text-sm text-muted-foreground">You haven&apos;t written any reviews yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {reviews.map((review) => (
                            <li key={review.id} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{review.comment.slice(0, 50)}{review.comment.length > 50 ? '...' : ''}</p>
                                    <p className="text-sm text-muted-foreground">{formatTimeAgo(review.created)}</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 mr-1">&#9733;</span>
                                    <span>{review.rating}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    )
}
