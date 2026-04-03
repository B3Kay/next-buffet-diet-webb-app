"use client";

import { useState } from "react";
import type { Restaurant } from "@/services/types";
import {
    badOptions,
    foodOptions,
    goodOptions,
    restaurantTypes,
    isFoodStyleBadge,
    isGoodBadge,
    isBadBadge,
} from "@/components/FoodBadges";
import { MultiSelect } from "@/components/Multi-Select";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UpdateIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import { SelectAddress } from "@/app/restaurants/_components/SelectAddress";

export type RestaurantFormData = Restaurant & {
    goodBadges: string[];
    badBadges: string[];
    foodBadges: string[];
};

const emptyRestaurant: RestaurantFormData = {
    collectionId: "",
    collectionName: "",
    created: "",
    updated: "",
    id: "",
    name: "",
    description: "",
    address: "",
    price: 0,
    rating: 0,
    type: "",
    website: "",
    imageUrl: "",
    longitude: 0,
    latitude: 0,
    foodBadges: [],
    goodBadges: [],
    badBadges: [],
};

interface RestaurantFormProps {
    initialData?: Restaurant;
    onSubmit: (data: RestaurantFormData) => Promise<void>;
    submitLabel: string;
    loadingLabel: string;
    submitIcon: React.ReactNode;
}

export function RestaurantForm({
    initialData,
    onSubmit,
    submitLabel,
    loadingLabel,
    submitIcon,
}: RestaurantFormProps) {
    const existingGoodBadges = initialData?.foodBadges.filter(isGoodBadge) || [];
    const existingBadBadges = initialData?.foodBadges.filter(isBadBadge) || [];
    const existingFoodBadges = initialData?.foodBadges.filter(isFoodStyleBadge) || [];

    const [restaurant, setRestaurant] = useState<RestaurantFormData>(
        initialData
            ? { ...initialData, goodBadges: existingGoodBadges, badBadges: existingBadBadges, foodBadges: existingFoodBadges }
            : emptyRestaurant
    );

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [selectedGoodBadges, setSelectedGoodBadges] = useState<string[]>(existingGoodBadges);
    const [selectedBadBadges, setSelectedBadBadges] = useState<string[]>(existingBadBadges);
    const [selectedFoodOptions, setSelectedFoodOptions] = useState<string[]>(existingFoodBadges);

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!restaurant.name.trim()) newErrors.name = "Restaurant name is required";
        if (restaurant.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
        if (!restaurant.address.trim()) newErrors.address = "Address is required";
        if (!restaurant.type) newErrors.type = "Restaurant type is required";
        if (restaurant.price <= 0) newErrors.price = "Price must be greater than 0";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsLoading(true);
        try {
            await onSubmit(restaurant);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (value: string, id: string) => {
        setRestaurant((prev) => ({
            ...prev,
            [id]: ["rating", "price", "breakfastPrice", "lunchPrice", "eveningPrice", "weekendPrice"].includes(id)
                ? Number.parseFloat(value) || 0
                : value,
        }));
    };

    const handleNewGoodBadgeChange = (badges: string[]) => {
        setSelectedGoodBadges(badges);
        setRestaurant((prev) => ({ ...prev, goodBadges: badges }));
    };
    const handleNewBadBadgeChange = (badges: string[]) => {
        setSelectedBadBadges(badges);
        setRestaurant((prev) => ({ ...prev, badBadges: badges }));
    };
    const handleNewFoodBadgeChange = (badges: string[]) => {
        setSelectedFoodOptions(badges);
        setRestaurant((prev) => ({ ...prev, foodBadges: badges }));
    };

    const restType = Object.values(restaurantTypes);

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Edets Öde & Mammas Mat"
                    value={restaurant.name}
                    onChange={(e) => handleInputChange(e.target.value, "name")}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                <Textarea
                    id="description"
                    placeholder="Bufférestaurang med fokus på hemlagad husmanskost...."
                    value={restaurant.description}
                    onChange={(e) => handleInputChange(e.target.value, "description")}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="type">Restaurant type</label>
                <Select defaultValue={restaurant.type || undefined} onValueChange={(v) => setRestaurant((prev) => ({ ...prev, type: v }))}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={restaurantTypes.BUFFET} />
                    </SelectTrigger>
                    <SelectContent>
                        {restType.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.type && <p className="text-sm text-destructive mt-1">{errors.type}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Good Badges</label>
                <MultiSelect
                    options={goodOptions.options}
                    onValueChange={handleNewGoodBadgeChange}
                    defaultValue={selectedGoodBadges}
                    placeholder="Select good things"
                    variant="inverted"
                    animation={2}
                    maxCount={3}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Bad Badges</label>
                <MultiSelect
                    options={badOptions.options}
                    onValueChange={handleNewBadBadgeChange}
                    defaultValue={selectedBadBadges}
                    placeholder="Select bad things"
                    variant="inverted"
                    animation={2}
                    maxCount={3}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Food Types</label>
                <MultiSelect
                    options={foodOptions.options}
                    onValueChange={handleNewFoodBadgeChange}
                    defaultValue={selectedFoodOptions}
                    placeholder="Select food options"
                    variant="inverted"
                    animation={2}
                    maxCount={3}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
                {initialData && (
                    <Input
                        id="address"
                        type="text"
                        value={restaurant.address}
                        onChange={(e) => handleInputChange(e.target.value, "address")}
                        className="mb-1"
                    />
                )}
                {initialData && <p className="text-xs text-muted-foreground mb-1">Or search for a new address:</p>}
                <SelectAddress
                    onSelect={(address) => {
                        const addressString = `${address.address.road} ${address.address.house_number}, ${address.address.city}, ${address.address.country}`;
                        handleInputChange(addressString, "address");
                    }}
                />
                {errors.address && <p className="text-sm text-destructive mt-1">{errors.address}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
                <Input
                    id="price"
                    type="number"
                    placeholder="Price"
                    value={restaurant.price.toString()}
                    onChange={(e) => handleInputChange(e.target.value, "price")}
                    step="0.01"
                    min="0"
                />
                {errors.price && <p className="text-sm text-destructive mt-1">{errors.price}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="breakfastPrice">Breakfast Price</label>
                    <Input id="breakfastPrice" type="number" placeholder="Optional" value={restaurant.breakfastPrice?.toString() || ""} onChange={(e) => handleInputChange(e.target.value, "breakfastPrice")} step="0.01" min="0" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="lunchPrice">Lunch Price</label>
                    <Input id="lunchPrice" type="number" placeholder="Optional" value={restaurant.lunchPrice?.toString() || ""} onChange={(e) => handleInputChange(e.target.value, "lunchPrice")} step="0.01" min="0" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="eveningPrice">Evening Price</label>
                    <Input id="eveningPrice" type="number" placeholder="Optional" value={restaurant.eveningPrice?.toString() || ""} onChange={(e) => handleInputChange(e.target.value, "eveningPrice")} step="0.01" min="0" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="weekendPrice">Weekend Price</label>
                    <Input id="weekendPrice" type="number" placeholder="Optional" value={restaurant.weekendPrice?.toString() || ""} onChange={(e) => handleInputChange(e.target.value, "weekendPrice")} step="0.01" min="0" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="website">Website</label>
                <Input id="website" type="text" placeholder="http://www.edetsode.se/" value={restaurant.website} onChange={(e) => handleInputChange(e.target.value, "website")} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="image_url">Image Url</label>
                <Input id="image_url" type="text" placeholder="url of your image" value={restaurant.imageUrl} onChange={(e) => handleInputChange(e.target.value, "imageUrl")} />
                <p className="text-sm text-muted-foreground mt-2">
                    Upload your image to{" "}
                    <a href="https://imgbb.com/" className="underline" target="_blank" rel="noreferrer">imgbb.com</a>{" "}
                    or <a href="https://imgur.com/upload" className="underline" target="_blank" rel="noreferrer">imgur.com</a>, then paste the link.
                </p>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="additional_images">Additional Image URLs (one per line)</label>
                <Textarea
                    id="additional_images"
                    placeholder="Paste additional image URLs, one per line"
                    defaultValue={restaurant.imageUrls?.join('\n') || ''}
                    onChange={(e) => {
                        const urls = e.target.value.split('\n').filter(url => url.trim() !== '');
                        setRestaurant(prev => ({ ...prev, imageUrls: urls }));
                    }}
                />
            </div>
            <Button type="submit" className="w-full">
                {isLoading ? (
                    <>
                        <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
                        {loadingLabel}
                    </>
                ) : (
                    <>
                        {submitIcon}
                        {submitLabel}
                    </>
                )}
            </Button>
        </form>
    );
}
