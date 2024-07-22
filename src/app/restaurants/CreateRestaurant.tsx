'use client';

import { useRouter } from 'next/navigation'

import { useState } from "react";
import { Restaurant } from "./types";
import PocketBase from 'pocketbase';

export default function CreateRestaurant() {

    const [restaurant, setRestaurant] = useState<Restaurant>({
        id: '',
        name: '',
        description: '',
        address: '',
    });

    const router = useRouter();


    const create = async () => {
        const db = new PocketBase('http://127.0.0.1:8090');
        const collection = db.collection<Restaurant>('restaurants');

        collection.create<Restaurant>(restaurant);

        router.refresh();
    }

    return (
        <div>
            <h1>Create Restaurant</h1>
            <form className="flex flex-col gap-4 text-slate-700" onSubmit={create}>

                <input
                    type="text"
                    placeholder="Name"
                    value={restaurant.name}
                    onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
                ></input>
                <textarea
                    placeholder="Description"
                    value={restaurant.description}
                    onChange={(e) => setRestaurant({ ...restaurant, description: e.target.value })}
                ></textarea>
                <input
                    type="text"
                    placeholder="Adress"
                    value={restaurant.address}
                    onChange={(e) => setRestaurant({ ...restaurant, address: e.target.value })}
                ></input>
                <button type="submit">Create restaurant</button>
            </form>
        </div>
    )
}