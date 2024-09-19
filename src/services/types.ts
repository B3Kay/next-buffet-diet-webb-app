interface PocketbaseBase {
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
}


interface RestaurantBase {
    id: string;
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
    id: string;
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

export type Restaurant = RestaurantBase & Partial<PocketbaseBase>;

export type RestaurantV2Keys = keyof RestaurantV2;

