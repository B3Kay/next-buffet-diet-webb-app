"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { dummyPresetData } from "./dummyPresetData"
import { handleCeateDummyData } from "@/actions/handleCreateDummyData"
import { makeRestaurantBaseV2 } from "@/services/restaurantsService"
import { Restaurant, RestaurantBaseV2 } from "@/services/types"

export function AddDummyData() {
    const [dummyData, setDummyData] = useState<string>(JSON.stringify(dummyPresetData, null, 2))

    const handleAddDummyData = async () => {
        console.log('handleAddDummyData');
        try {
            const parsedData: RestaurantBaseV2[] = JSON.parse(dummyData)

            const restV2 = parsedData.map(rest => makeRestaurantBaseV2(rest as unknown as Restaurant));
            // Here you would typically send this data to your backend
            // For now, we'll just show a success message
            const { created, messages } = await handleCeateDummyData(restV2);

            toast({
                title: "Dummy data added successfully",
                description: `Added ${created} restaurants to the database.`,
            })
            if (messages && messages.length > 0) {
                toast({
                    title: "Some restaurants were not added",
                    description: messages.join('\n\n'),
                })
            }
        } catch (error) {
            toast({
                title: "Error adding dummy data",
                description: "Please ensure the JSON is valid.",
                variant: "destructive",
            })
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add Dummy Data (Admin Only)</CardTitle>
            </CardHeader>
            <CardContent>
                <Textarea
                    value={dummyData}
                    onChange={(e) => setDummyData(e.target.value)}
                    placeholder="Enter JSON array of restaurants"
                    className="min-h-[200px] mb-4"
                />
                <Button onClick={handleAddDummyData}>Add Dummy Data</Button>
            </CardContent>
        </Card>
    )
}
