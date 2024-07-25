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
} & Partial<PocketbaseBase>;

export type Restaurant = Partial<RestaurantBase> & Partial<PocketbaseBase>;

