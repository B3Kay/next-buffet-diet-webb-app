'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Restaurant, RestaurantV2 } from './types';
import PocketBase from 'pocketbase';

import Select from "react-tailwindcss-select";
import { Option, SelectValue } from 'react-tailwindcss-select/dist/components/type';
import { makeRestV2 } from './restaurants';
import { foodLabelOption } from '../components/FoodBadges';

export default function CreateRestaurant() {
    const [restaurant, setRestaurant] = useState<Restaurant>({
        id: '',
        name: '',
        description: '',
        address: '',
        price: 0,
        rating: 0,
        type: '',
        website: '',
        imageUrl: '',
        foodBadges: [],
    });

    const router = useRouter();

    const create = async (e: React.FormEvent) => {
        e.preventDefault();

        const db = new PocketBase('http://127.0.0.1:8090');
        const collection = db.collection<RestaurantV2>('restaurants');

        const restV2 = makeRestV2(restaurant)

        await collection.create<RestaurantV2>(restV2);


        router.push('/restaurants');

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setRestaurant(prevState => ({
            ...prevState,
            [id]: id === 'rating' || id === 'price' ? parseFloat(value) : value
        }));
    };

    const [badge, setBadge] = useState<SelectValue>(null);

    const handleBadgeChange = (options: Option[]) => {
        console.log("value:", options);
        if (options === null) return;
        if (options.length === 0) return;
        const badgesInArray = options.map(option => {
            return option.value;
        })

        setBadge(options);


        setRestaurant(prevState => ({
            ...prevState,
            foodBadges: badgesInArray
        }));
    };


    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create Restaurant</h1>
            <form className="space-y-4" onSubmit={create}>
                <Select
                    primaryColor='red'

                    value={badge}
                    onChange={handleBadgeChange}
                    options={foodLabelOption}
                    isMultiple={true}
                    isSearchable={true}

                    // formatOptionLabel={data => (<div>{data.value}</div>)}
                    formatGroupLabel={data => (
                        <div className={`py-    2 text-xs flex items-center justify-between`}>
                            {/* // 👉 data represents each subgroup */}
                            <span className="font-bold">{data.label}</span>
                            <span className="bg-gray-200 h-5 h-5 p-1.5 flex items-center justify-center rounded-full">
                                {data.options.length}
                            </span>
                        </div>
                    )}
                />
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Edets Öde & Mammas Mat"
                        value={restaurant.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Bufférestaurang med fokus på hemlagad husmanskost...."
                        value={restaurant.description}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        placeholder="Solvägen 12, 123 45 Edet"
                        value={restaurant.address}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
                    <input
                        id="price"
                        type="number"
                        placeholder="Price"
                        value={restaurant.price}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        step="0.01" // Allows for decimal values
                        min="0" // Optional: Set minimum value if needed
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="rating">Rating</label>
                    <input
                        id="rating"
                        type="number"
                        placeholder="4.3"
                        value={restaurant.rating}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        step="0.1" // Allows for decimal values
                        min="0" // Optional: Set minimum value if needed
                        max="5" // Optional: Set maximum value if needed
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="type">Type</label>
                    <input
                        id="type"
                        type="text"
                        placeholder="Husmanskost"
                        value={restaurant.type}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="website">Website</label>
                    <input
                        id="website"
                        type="text"
                        placeholder="http://www.edetsode.se/"
                        value={restaurant.website}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="image_url">Image Url</label>
                    <input
                        id="image_url"
                        type="text"
                        placeholder="url of your image"
                        value={restaurant.imageUrl}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="btn rounded-full btn-primary w-full"
                >
                    Create Restaurant
                </button>
            </form>
        </div>
    );
}
