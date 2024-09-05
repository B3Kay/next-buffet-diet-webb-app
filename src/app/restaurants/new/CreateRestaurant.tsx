'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Restaurant, RestaurantV2 } from '../../../db/pocketbase/types';
import PocketBase from 'pocketbase';

import { Button, Input, Select, SelectOption, SelectInput, SelectInputChip, SelectMenu } from 'reablocks';
import { makeRestV2 } from '../../../db/pocketbase/restaurants';
import { foodLabelOption } from '../../../components/FoodBadges';
import { revalidatePath, revalidateTag } from 'next/cache';

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

        // TODO: This should be done in the backend, not on the client!!!
        const db = new PocketBase('http://127.0.0.1:8090');
        const collection = db.collection<RestaurantV2>('restaurants');

        console.log("restaurant:", restaurant);
        const restV2 = makeRestV2(restaurant)

        await collection.create<RestaurantV2>(restV2);


        revalidatePath('/restaurants');
        router.push('/restaurants');
    };

    const handleInputChange = (value: string, id: string) => {
        setRestaurant(prevState => ({
            ...prevState,
            [id]: id === 'rating' || id === 'price' ? parseFloat(value) : value
        }));
    };

    const [badgeOptions, setBadgeOptions] = useState(foodLabelOption);
    const [selectedBadges, setSelectedBadges] = useState<string[]>();

    const handleNewBadgeChange = (newBadges: string[]) => {
        setSelectedBadges(newBadges);

        setRestaurant(prevState => ({
            ...prevState,
            foodBadges: newBadges
        }));
    };

    const restaurantTypes = ['🤩All you can eat (Buffet)', '⚖️Weigh in the counter (Buffet)', '📦Take away (Buffet)', '🛑No Buffet, much food', '🫷No Buffet, little food']
    const [selectedRestaurantType, setSelectedRestaurantType] = useState<string>();
    const handleSelectedRestaurantTypeChange = (newType: string) => {
        setSelectedRestaurantType(newType);

        setRestaurant(prevState => ({
            ...prevState,
            type: newType
        }));
    };

    const [value, setValue] = useState<string | null>(null);
    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create Restaurant</h1>
            {/*  TODO: form needs to be validated */}
            <form className="space-y-4" onSubmit={create}>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Edets Öde & Mammas Mat"
                        value={restaurant.name}
                        onValueChange={(value) => handleInputChange(value, 'name')}

                        fullWidth
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                    <Input
                        id="description"
                        type="text"
                        placeholder="Bufférestaurang med fokus på hemlagad husmanskost...."
                        value={restaurant.description}
                        onValueChange={(value) => handleInputChange(value, 'description')}

                        fullWidth
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="type">Type</label>
                    <Select
                        id='type'
                        placeholder="Select type"
                        closeOnSelect={false}
                        selectOnPaste
                        selectOnKeys={['Enter', 'Space', 'Comma']}
                        searchOptions={{
                            threshold: 0
                        }}
                        value={selectedRestaurantType}
                        onChange={handleSelectedRestaurantTypeChange}>
                        {restaurantTypes.map(type => <SelectOption key={type} value={type}>{type}</SelectOption>)}
                    </Select>
                </div>
                <div>

                    <label className="block text-sm font-medium mb-1" htmlFor="badges">Badges</label>
                    <Select
                        // Does not know how to make it creatable atm...
                        // TODO: make creatable, add color for groups of chips. Placeholder does not work
                        id='badges'
                        multiple
                        placeholder="Add some categories or pick existing one..."
                        closeOnSelect={false}
                        selectOnPaste
                        selectOnKeys={['Enter', 'Space', 'Comma']}
                        searchOptions={{
                            threshold: 0
                        }}
                        // input={<SelectInput chip={<SelectInputChip className='bg-gray-800' />} />}
                        value={selectedBadges}
                        onChange={handleNewBadgeChange}
                    >

                        {badgeOptions.map(group => group.options.map(opt => <SelectOption key={opt.value} group={group.label} value={opt.value}>{opt.label}</SelectOption>))}
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
                    <Input
                        id="address"
                        type="text"
                        placeholder="Solvägen 12, 123 45 Edet"
                        value={restaurant.address}
                        onValueChange={(value) => handleInputChange(value, 'address')}

                        fullWidth
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
                    <Input
                        id="price"
                        type="number"
                        placeholder="Price"
                        value={restaurant.price.toString()}
                        onValueChange={(value) => handleInputChange(value, 'price')}

                        fullWidth
                        step="0.01"
                        min="0"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="rating">Rating</label>
                    <Input
                        id="rating"
                        type="number"
                        placeholder="4.3"
                        value={restaurant.rating.toString()}
                        onValueChange={(value) => handleInputChange(value, 'rating')}

                        fullWidth
                        step="0.1"
                        min="0"
                        max="5"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="website">Website</label>
                    <Input
                        id="website"
                        type="text"
                        placeholder="http://www.edetsode.se/"
                        value={restaurant.website}
                        onValueChange={(value) => handleInputChange(value, 'website')}

                        fullWidth
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="image_url">Image Url</label>
                    <Input
                        id="image_url"
                        type="text"
                        placeholder="url of your image"
                        value={restaurant.imageUrl}
                        onValueChange={(value) => handleInputChange(value, 'imageUrl')}

                        fullWidth
                    />
                </div>
                <Button
                    variant='filled'
                    type="submit"


                >
                    Create Restaurant
                </Button>
            </form>
        </div >
    );
}
