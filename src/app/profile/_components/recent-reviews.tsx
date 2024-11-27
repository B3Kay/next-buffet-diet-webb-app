import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentReviews() {
    const reviews = [
        { id: 1, restaurant: "Golden Buffet", rating: 4, date: "2023-06-15" },
        { id: 2, restaurant: "Sushi Paradise", rating: 5, date: "2023-06-10" },
        { id: 3, restaurant: "BBQ Heaven", rating: 3, date: "2023-06-05" },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {reviews.map((review) => (
                        <li key={review.id} className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">{review.restaurant}</p>
                                <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span>{review.rating}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

