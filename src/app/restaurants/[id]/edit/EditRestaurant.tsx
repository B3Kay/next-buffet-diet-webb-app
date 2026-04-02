"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Restaurant } from "../../../../services/types";
import { makeRestV2 } from "../../../../services/restaurantsService";
import {
    badOptions,
    foodOptions,
    goodOptions,
    restaurantTypes,
    isFoodStyleBadge,
    isGoodBadge,
    isBadBadge,
} from "../../../../components/FoodBadges";
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
import { updateRestaurantAction, deleteRestaurantAction } from "@/actions/restaurant";
import { SelectAddress } from "../../_components/SelectAddress";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2 } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function EditRestaurant({ restaurant: initialRestaurant }: { restaurant: Restaurant }) {
    const existingGoodBadges = initialRestaurant.foodBadges.filter(isGoodBadge);
    const existingBadBadges = initialRestaurant.foodBadges.filter(isBadBadge);
    const existingFoodBadges = initialRestaurant.foodBadges.filter(isFoodStyleBadge);

    const [restaurant, setRestaurant] = useState<
        Restaurant & {
            goodBadges: string[];
            badBadges: string[];
            foodBadges: string[];
        }
    >({
        ...initialRestaurant,
        goodBadges: existingGoodBadges,
        badBadges: existingBadBadges,
        foodBadges: existingFoodBadges,
    });

    const router = useRouter();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const restV2 = makeRestV2({
            ...restaurant,
            foodBadges: [
                ...restaurant.badBadges,
                ...restaurant.goodBadges,
                ...restaurant.foodBadges,
            ],
        });

        try {
            await updateRestaurantAction(initialRestaurant.id, restV2);
            toast({
                title: `${restaurant.name} updated successfully!`,
                description: "Redirecting to restaurant page...",
            });
            router.push(`/restaurants/${initialRestaurant.id}`);
        } catch (error) {
            console.log("Error updating restaurant:", error);
            toast({
                variant: "destructive",
                title: "Error updating restaurant",
                description: "Please try again later",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deleteRestaurantAction(initialRestaurant.id);
            toast({
                title: `${restaurant.name} deleted successfully!`,
                description: "Redirecting to restaurants page...",
            });
            router.push("/restaurants");
        } catch (error) {
            console.log("Error deleting restaurant:", error);
            toast({
                variant: "destructive",
                title: "Error deleting restaurant",
                description: "Please try again later",
            });
        } finally {
            setIsDeleting(false);
        }
    };

    const handleInputChange = (value: string, id: string) => {
        setRestaurant((prevState) => ({
            ...prevState,
            [id]:
                id === "rating" || id === "price" || id === "breakfastPrice" || id === "lunchPrice" || id === "eveningPrice" || id === "weekendPrice"
                    ? Number.parseFloat(value) || 0
                    : value,
        }));
    };

    const [selectedGoodBadges, setSelectedGoodBadges] = useState<string[]>(existingGoodBadges);
    const [selectedBadBadges, setSelectedBadBadges] = useState<string[]>(existingBadBadges);
    const [selectedFoodOptions, setSelectedFoodOptions] = useState<string[]>(existingFoodBadges);

    const handleNewGoodBadgeChange = (goodBadges: string[]) => {
        setSelectedGoodBadges(goodBadges);
        setRestaurant((prevState) => ({ ...prevState, goodBadges: goodBadges }));
    };
    const handleNewBadBadgeChange = (badBadges: string[]) => {
        setSelectedBadBadges(badBadges);
        setRestaurant((prevState) => ({ ...prevState, badBadges: badBadges }));
    };
    const handleNewFoodBadgeChange = (foodBadges: string[]) => {
        setSelectedFoodOptions(foodBadges);
        setRestaurant((prevState) => ({ ...prevState, foodBadges: foodBadges }));
    };

    const restType = Object.values(restaurantTypes);
    const handleSelectedRestaurantTypeChange = (newType: string) => {
        setRestaurant((prevState) => ({ ...prevState, type: newType }));
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Edit Restaurant</h1>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will permanently delete &quot;{restaurant.name}&quot;. This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
                                {isDeleting ? "Deleting..." : "Delete"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <form className="space-y-4" onSubmit={handleUpdate}>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Restaurant name"
                        value={restaurant.name}
                        onChange={(e) => handleInputChange(e.target.value, "name")}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                    <Textarea
                        id="description"
                        placeholder="Restaurant description..."
                        value={restaurant.description}
                        onChange={(e) => handleInputChange(e.target.value, "description")}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="type">Restaurant type</label>
                    <Select defaultValue={restaurant.type} onValueChange={handleSelectedRestaurantTypeChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={restaurant.type || restaurantTypes.BUFFET} />
                        </SelectTrigger>
                        <SelectContent>
                            {restType.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
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
                    <Input
                        id="address"
                        type="text"
                        value={restaurant.address}
                        onChange={(e) => handleInputChange(e.target.value, "address")}
                    />
                    <p className="text-xs text-muted-foreground mt-1">Or search for a new address:</p>
                    <SelectAddress
                        onSelect={(address) => {
                            const addressString = `${address.address.road} ${address.address.house_number}, ${address.address.city}, ${address.address.country}`;
                            handleInputChange(addressString, "address");
                        }}
                    />
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
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="breakfastPrice">Breakfast Price</label>
                        <Input
                            id="breakfastPrice"
                            type="number"
                            placeholder="Optional"
                            value={restaurant.breakfastPrice?.toString() || ""}
                            onChange={(e) => handleInputChange(e.target.value, "breakfastPrice")}
                            step="0.01"
                            min="0"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="lunchPrice">Lunch Price</label>
                        <Input
                            id="lunchPrice"
                            type="number"
                            placeholder="Optional"
                            value={restaurant.lunchPrice?.toString() || ""}
                            onChange={(e) => handleInputChange(e.target.value, "lunchPrice")}
                            step="0.01"
                            min="0"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="eveningPrice">Evening Price</label>
                        <Input
                            id="eveningPrice"
                            type="number"
                            placeholder="Optional"
                            value={restaurant.eveningPrice?.toString() || ""}
                            onChange={(e) => handleInputChange(e.target.value, "eveningPrice")}
                            step="0.01"
                            min="0"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="weekendPrice">Weekend Price</label>
                        <Input
                            id="weekendPrice"
                            type="number"
                            placeholder="Optional"
                            value={restaurant.weekendPrice?.toString() || ""}
                            onChange={(e) => handleInputChange(e.target.value, "weekendPrice")}
                            step="0.01"
                            min="0"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="website">Website</label>
                    <Input
                        id="website"
                        type="text"
                        placeholder="http://www.example.com/"
                        value={restaurant.website}
                        onChange={(e) => handleInputChange(e.target.value, "website")}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="image_url">Image Url</label>
                    <Input
                        id="image_url"
                        type="text"
                        placeholder="url of your image"
                        value={restaurant.imageUrl}
                        onChange={(e) => handleInputChange(e.target.value, "imageUrl")}
                    />
                </div>
                <Button type="submit" className="w-full">
                    {isLoading ? (
                        <>
                            <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
                            Updating...
                        </>
                    ) : (
                        <>
                            <Pencil className="mr-2 h-4 w-4" />
                            Update Restaurant
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}
