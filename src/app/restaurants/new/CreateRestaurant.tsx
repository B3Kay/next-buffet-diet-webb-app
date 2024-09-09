'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Restaurant, RestaurantV2 } from '../../../services/types';

import { createRestaurant, makeRestV2 } from '../../../services/restaurantsService';
import { badOptions, foodLabelOption, foodOptions, goodOptions } from '../../../components/FoodBadges';
import { revalidatePath, revalidateTag } from 'next/cache';
import { MultiSelect } from '@/components/Multi-Select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusIcon } from '@radix-ui/react-icons';
import { Textarea } from '@/components/ui/textarea';

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

        console.log("restaurant:", restaurant);
        const restV2 = makeRestV2(restaurant)
        const collection = await createRestaurant(restV2);


        revalidatePath('/restaurants');
        router.push('/restaurants');
    };

    const handleInputChange = (value: string, id: string) => {
        setRestaurant(prevState => ({
            ...prevState,
            [id]: id === 'rating' || id === 'price' ? parseFloat(value) : value
        }));
    };

    // const [badgeOptions, setBadgeOptions] = useState();
    const [selectedGoodBadges, setSelectedGoodBadges] = useState<string[]>([]);
    const [selectedBadBadges, setSelectedBadBadges] = useState<string[]>([]);
    const [selectedFoodOptions, setSelectedFoodOptions] = useState<string[]>([]);

    const handleNewBadgeChange = (newBadges: string[]) => {
        setSelectedGoodBadges(newBadges);

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
                        onChange={(e) => handleInputChange(e.target.value, 'name')}


                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                    <Textarea
                        id="description"
                        placeholder="Bufférestaurang med fokus på hemlagad husmanskost...."

                        value={restaurant.description}
                        onChange={(e) => handleInputChange(e.target.value, 'description')}


                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="type">Restaurant type</label>

                    <Select onValueChange={(e) => handleSelectedRestaurantTypeChange(e)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Buffet" />
                        </SelectTrigger>
                        <SelectContent>
                            {restaurantTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}

                        </SelectContent>
                    </Select>

                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="badges">Good Badges</label>
                    <MultiSelect
                        options={goodOptions.options}
                        onValueChange={setSelectedGoodBadges}
                        defaultValue={selectedGoodBadges}
                        placeholder="Select good things"
                        variant="inverted"
                        animation={2}
                        maxCount={3}
                    />

                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="badges">Bad Badges</label>
                    <MultiSelect
                        options={badOptions.options}
                        onValueChange={setSelectedBadBadges}
                        defaultValue={selectedBadBadges}
                        placeholder="Select bad things"
                        variant="inverted"
                        animation={2}
                        maxCount={3}
                    />

                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="badges">Food Types</label>
                    <MultiSelect
                        options={foodOptions.options}
                        onValueChange={setSelectedFoodOptions}
                        defaultValue={selectedFoodOptions}
                        placeholder="Select food options"
                        variant="inverted"
                        animation={2}
                        maxCount={3}
                    />

                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
                    <Input
                        id="address"
                        type="text"
                        placeholder="Solvägen 12, 123 45 Edet"
                        value={restaurant.address}
                        onChange={(e) => handleInputChange(e.target.value, 'address')}
                    // onChange={}

                    />
                </div>
                <div className="grid grid-cols-2 gap-4">


                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
                        <Input
                            id="price"
                            type="number"
                            placeholder="Price"
                            value={restaurant.price.toString()}
                            onChange={(e) => handleInputChange(e.target.value, 'price')}


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
                            onChange={(e) => handleInputChange(e.target.value, 'rating')}


                            step="0.1"
                            min="0"
                            max="5"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="website">Website</label>
                    <Input
                        id="website"
                        type="text"
                        placeholder="http://www.edetsode.se/"
                        value={restaurant.website}
                        onChange={(e) => handleInputChange(e.target.value, 'website')}


                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="image_url">Image Url</label>
                    <Input
                        id="image_url"
                        type="text"
                        placeholder="url of your image"
                        value={restaurant.imageUrl}
                        onChange={(e) => handleInputChange(e.target.value, 'imageUrl')}


                    />
                </div>
                <Button
                    // variant='filled'
                    type="submit"


                >
                    <PlusIcon className="mr-2 h-4 w-4" />Create Restaurant
                </Button>
            </form>
        </div >
    );
}
