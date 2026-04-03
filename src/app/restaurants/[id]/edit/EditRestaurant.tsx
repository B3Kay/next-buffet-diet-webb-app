"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Restaurant } from "@/services/types";
import { makeRestV2 } from "@/services/restaurantsService";
import { updateRestaurantAction, deleteRestaurantAction } from "@/actions/restaurant";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { RestaurantForm, type RestaurantFormData } from "../../_components/RestaurantForm";

export default function EditRestaurant({ restaurant: initialRestaurant }: { restaurant: Restaurant }) {
    const router = useRouter();
    const { toast } = useToast();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleUpdate = async (data: RestaurantFormData) => {
        const restV2 = makeRestV2({
            ...data,
            foodBadges: [...data.badBadges, ...data.goodBadges, ...data.foodBadges],
        });

        try {
            await updateRestaurantAction(initialRestaurant.id, restV2);
            toast({
                title: `${data.name} updated successfully!`,
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
        }
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deleteRestaurantAction(initialRestaurant.id);
            toast({
                title: `${initialRestaurant.name} deleted successfully!`,
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
                                This will permanently delete &quot;{initialRestaurant.name}&quot;. This action cannot be undone.
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
            <RestaurantForm
                initialData={initialRestaurant}
                onSubmit={handleUpdate}
                submitLabel="Update Restaurant"
                loadingLabel="Updating..."
                submitIcon={<Pencil className="mr-2 h-4 w-4" />}
            />
        </div>
    );
}
