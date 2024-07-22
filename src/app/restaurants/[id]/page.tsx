import PocketBase from 'pocketbase';

type Restaurant = {
    id: string;
    name: string;
    description: string;
    adress: string;
}

async function getRestaurant(restaurantId: string) {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('restaurants').getOne<Restaurant>(restaurantId);

    return data;
}

export default async function RestaurantPage({ params }: { params: { id: string } }) {
    const restaurant = await getRestaurant(params.id);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Restaurant / {restaurant.id}</h1>
            <div className="bg-slate-800 shadow-md rounded-lg p-4 m-2">
                <h2 className="text-xl font-bold">{restaurant.name}</h2>
                <p className="text-gray-300">{restaurant.description}</p>
                <p className="text-gray-300">{restaurant.adress}</p>
            </div>
        </div>
    );
}


