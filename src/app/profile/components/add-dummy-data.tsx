"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export function AddDummyData() {
    const [dummyData, setDummyData] = useState<string>(`[
  {
    "name": "Golden Buffet",
    "cuisine": "Chinese",
    "rating": 4.5
  },
  {
    "name": "Sushi Paradise",
    "cuisine": "Japanese",
    "rating": 4.8
  },
  {
    "name": "BBQ Heaven",
    "cuisine": "American",
    "rating": 4.2
  }
]`)

    const handleAddDummyData = () => {
        try {
            const parsedData = JSON.parse(dummyData)
            // Here you would typically send this data to your backend
            // For now, we'll just show a success message
            toast({
                title: "Dummy data added successfully",
                description: `Added ${parsedData.length} restaurants to the database.`,
            })
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

