interface PocketbaseBase {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
}


interface RestaurantBase {
    name: string;
    description: string;
    address: string;
    type: string;
    price: number;
    rating: number;
    website: string;
    imageUrl: string;
    longitude: number;
    latitude: number;
    foodBadges: Array<string>;
}

export type RestaurantV2 = {
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
} & PocketbaseBase;

export type Restaurant = RestaurantBase & PocketbaseBase;

export type RestaurantV2Keys = keyof RestaurantV2;

export type LikeBaseV1 = {
    userId: string;
    restaurantId: string;
}

export type LikeV1 = LikeBaseV1 & PocketbaseBase;
