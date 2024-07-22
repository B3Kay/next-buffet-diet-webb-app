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
    image_url: string;
}

export type Restaurant = Partial<RestaurantBase> & Partial<PocketbaseBase>;

