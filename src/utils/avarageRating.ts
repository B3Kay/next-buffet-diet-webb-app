import { ReviewV1 } from "@/services/types";

export const getAverageRating = (reviews: ReviewV1[]) => {
    const totalRatings = reviews.reduce((sum: number, review: any) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRatings / reviews.length : 0;
    return averageRating;
}