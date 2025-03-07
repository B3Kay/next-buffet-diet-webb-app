interface PocketbaseBase {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
}

export interface ReviewBase {
    userId: string;
    restaurantId: string;
    comment: string;
    rating: number;
    foodBadges: string[];
}
// priceRange: string;
// image: File;
// date: Date;
// badBadges: string[];
// goodBadges: string[];

interface location {
    city: string
    street: string
    streetNumber: string
    country: string
    geoloc: {
        lat: string
        lan: string
    }
}

export interface RestaurantBase {
    name: string;
    description: string;
    address: string;
    type: string;
    price: number;
    breakfastPrice?: number;
    lunchPrice?: number;
    eveningPrice?: number;
    weekendPrice?: number;
    rating: number;
    website: string;
    imageUrl: string;
    imageUrls?: Array<string>;
    longitude: number;
    latitude: number;
    reviews?: ReviewBase[];
    foodBadges: Array<string>;
}

export type RestaurantBaseV2 = {
    name: string;
    description: string;
    address: string;
    type: string;
    price: number;
    rating: number;
    website: string;
    imageUrl: string;
    foodBadges: string;
    longitude: number;
    latitude: number;
    expand?: { reviews_via_restaurantId: ReviewV1[] };
};

export type RestaurantV2 = RestaurantBaseV2 & PocketbaseBase;

export type Restaurant = RestaurantBase & PocketbaseBase;

export type RestaurantWithRatings = {
    averageRating: number;
} & Restaurant;

export type RestaurantV2Keys = keyof RestaurantV2;

export type LikeBaseV1 = {
    userId: string;
    restaurantId: string;
}

export type LikeV1 = LikeBaseV1 & PocketbaseBase;

export type ReviewV1 = ReviewBase & PocketbaseBase;