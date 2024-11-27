import db from "@/db/db"

export const getTotalReviews = async () => {
    try {
        const reviews = await db.client.collection('reviews').getList(1, 1)
        return reviews.totalItems
    } catch (error) {
        console.error('Error getting total reviews', error)
        return 0
    }
}