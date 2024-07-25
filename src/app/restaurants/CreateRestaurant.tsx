'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Restaurant } from './types';
import PocketBase from 'pocketbase';

import Select from "react-tailwindcss-select";

// Define constants for food style badges
const foodStylesBadges = {
    ASIAN: '🍜 Asian',
    PIZZA: '🍕 Pizza',
    HAMBURGER: '🍔 Hamburger',
    ITALIAN: '🍝 Italian',
    MEXICAN: '🌮 Mexican',
    AMERICAN: '🍽️ American',
    SWEDISH: '🥔 Husmanskost/Swedish',
    PAKISTANI: '🍛 Pakistani',
    ARABIC: '🥙 Arabic',
    INDIAN: '🍛 Indian',
} as const;

type FoodStylesBadges = typeof foodStylesBadges[keyof typeof foodStylesBadges];

// Define constants for good badges
const goodBadges = {
    LEAN_PROTEIN: '💪 Lean protein',
    MEAT_VARIATION: '🍖 Meat variation',
    HIGH_MEAT_QUALITY: '🥩 High meat quality',
    CARNIVORE_FRIENDLY: '🍗 Carnivore friendly',
    VEGAN_FRIENDLY: '🌱 Vegan friendly',
    KETO_FRIENDLY: '🥑 Keto friendly',
    GLUTEN_FREE: '🌾 Gluten free',
    LOW_FAT_OPTIONS: '🏃 Low fat options',
    ANIMAL_BASED_FATS: '🐄 Animal based fats',
} as const;

type GoodBadges = typeof goodBadges[keyof typeof goodBadges];

// Define constants for bad badges
const badBadges = {
    MEATS_HIDDEN: '🙈 Meats are hidden',
    VEGAN_ONLY: '🥦 Vegan only',
    COOKS_IN_SEED_OILS: '🌻 Cooks in seed oils',
    MOSTLY_GRAIN_BASED: '🌾 Mostly grain based',
} as const;

type BadBadges = typeof badBadges[keyof typeof badBadges];

// Interfaces
interface Option<T> {
    value: T,
    label: T,
}

interface FoodStyleOptions<T> {
    label: string,
    options: Array<Option<T>>
}

// Food options
const foodOptions: FoodStyleOptions<FoodStylesBadges> = {
    label: '🍽️ Food styles',
    options: Object.values(foodStylesBadges).map(badge => ({
        label: badge,
        value: badge,
    })),
}

// Good options
const goodOptions: FoodStyleOptions<GoodBadges> = {
    label: '💚 Good',
    options: Object.values(goodBadges).map(badge => ({
        label: badge,
        value: badge,
    })),
}

// Bad options
const badOptions: FoodStyleOptions<BadBadges> = {
    label: '🛑 Bad',
    options: Object.values(badBadges).map(badge => ({
        label: badge,
        value: badge,
    })),
}


const foodLabelOption = [
    foodOptions,
    goodOptions,
    badOptions
]

// Type guard functions
function isFoodStyleBadge(value: any): value is FoodStylesBadges {
    return Object.values(foodStylesBadges).includes(value);
}

function isGoodBadge(value: any): value is GoodBadges {
    return Object.values(goodBadges).includes(value);
}

function isBadBadge(value: any): value is BadBadges {
    return Object.values(badBadges).includes(value);
}

// Usage example
const getBadgeStyle = (value: string, foodStyleStyles: string, goodBadges: string, badBadges: string): string => {
    if (isFoodStyleBadge(value)) {
        return foodStyleStyles;
    } else if (isGoodBadge(value)) {
        return goodBadges;
    } else if (isBadBadge(value)) {
        return badBadges;
    } else {
        return '';
    }
}


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
        image_url: '',
    });

    const router = useRouter();

    const create = async (e: React.FormEvent) => {
        e.preventDefault();

        const db = new PocketBase('http://127.0.0.1:8090');
        const collection = db.collection<Restaurant>('restaurants');

        collection.create<Restaurant>(restaurant);

        router.push('/restaurants');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setRestaurant(prevState => ({
            ...prevState,
            [id]: id === 'rating' || id === 'price' ? parseFloat(value) : value
        }));
    };

    const [badge, setBadge] = useState(null);

    const handleBadgeChange = (value: any) => {
        console.log("value:", value);
        setBadge(value);
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
                        value={restaurant.image_url}
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
