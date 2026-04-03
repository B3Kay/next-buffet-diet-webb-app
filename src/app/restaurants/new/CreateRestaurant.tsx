"use client";

import { useRouter } from "next/navigation";
import { makeRestV2 } from "@/services/restaurantsService";
import { PlusIcon } from "@radix-ui/react-icons";
import { createRestaurantAction } from "@/actions/restaurant";
import { useToast } from "@/hooks/use-toast";
import { RestaurantForm, type RestaurantFormData } from "../_components/RestaurantForm";

export default function CreateRestaurant() {
    const router = useRouter();
    const { toast } = useToast();

    const handleCreate = async (data: RestaurantFormData) => {
        const restV2 = makeRestV2({
            ...data,
            foodBadges: [...data.badBadges, ...data.goodBadges, ...data.foodBadges],
        });

        try {
            const collection = await createRestaurantAction(restV2);
            toast({
                title: `${collection.data.name} was created successfully!`,
                description: "Redirecting to restaurants page...",
            });
            router.push("/restaurants");
        } catch (error) {
            console.log("Error creating restaurant:", error);
            toast({
                variant: "destructive",
                title: "Error creating restaurant",
                description: "Please try again later",
            });
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create Restaurant</h1>
            <RestaurantForm
                onSubmit={handleCreate}
                submitLabel="Create Restaurant"
                loadingLabel="Creating..."
                submitIcon={<PlusIcon className="mr-2 h-4 w-4" />}
            />
        </div>
    );
}
