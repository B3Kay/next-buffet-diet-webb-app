import db from "@/db/db"
import type { ReviewV1 } from "./types"

export const getTotalReviews = async () => {
    try {
        const reviews = await db.client.collection('reviews').getList(1, 1)
        return reviews.totalItems
    } catch (error) {
        console.error('Error getting total reviews', error)
        return 0
    }
}

export const getReviewsByUser = async (userId: string): Promise<ReviewV1[]> => {
    try {
        const reviews = await db.client.collection('reviews').getList<ReviewV1>(1, 50, {
            filter: `userId = "${userId}"`,
            sort: '-created',
        })
        return reviews.items
    } catch (error) {
        console.error('Error getting user reviews', error)
        return []
    }
}