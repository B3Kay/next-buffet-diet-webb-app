'use server'

import { reviewRestaurant } from "@/services/restaurantsService";
import { getUser } from "./auth";
import { revalidatePath } from "next/cache";


export async function reviewRestaurantAction({
    comment,
    rating,
    priceRange,
    image,
    selectedFoodOptions,
    // date,
    restaurantId,
    badBadges,
    goodBadges
}: {
    comment: string,
    rating: number,
    priceRange: string,
    image: File | null,
    selectedFoodOptions: string[],
    // date: Date,
    restaurantId: string,
    badBadges: string[],
    goodBadges: string[]
}
) {
    // User ID should be fetched from the session
    const user = await getUser();
    if (!user || !user.id) {
        throw new Error('User not authenticated');
    }
    // console.log(user);
    // console.log(comment, rating, selectedFoodOptions, restaurantId, user.id);
    const resp = await reviewRestaurant({ comment, rating, foodBadges: selectedFoodOptions, restaurantId, userId: user.id });

    revalidatePath(`/restaurants`)
    return resp;
}