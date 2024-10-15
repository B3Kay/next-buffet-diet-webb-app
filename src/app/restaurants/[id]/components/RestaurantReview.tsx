"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { SheetClose, SheetFooter } from "@/components/ui/sheet"
import { MultiSelect } from "@/components/Multi-Select"
import { badOptions, foodOptions, goodOptions } from "@/components/FoodBadges"

export default function RestaurantReview() {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const [image, setImage] = useState<File | null>(null)

    const [selectedGoodBadges, setSelectedGoodBadges] = useState<string[]>([]);
    const [selectedBadBadges, setSelectedBadBadges] = useState<string[]>([]);
    const [selectedFoodOptions, setSelectedFoodOptions] = useState<string[]>([]);

    const [date, setDate] = useState<Date | undefined>(new Date())

    const handleSubmit = (e: React.FormEvent) => {

        // Here you would typically send the data to your backend
        console.log({ comment, rating, priceRange, image, selectedFoodOptions, date })
    }

    const handleNewGoodBadgeChange = (goodBadges: string[]) => {
        setSelectedGoodBadges(goodBadges);
    };
    const handleNewBadBadgeChange = (badBadges: string[]) => {
        setSelectedBadBadges(badBadges);
    };
    const handleNewFoodBadgeChange = (foodBadges: string[]) => {
        setSelectedFoodOptions(foodBadges);
    };



    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="date">Date of Visit</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="comment">Your Review</Label>
                    <Textarea
                        id="comment"
                        placeholder="Write your review here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Rating</Label>
                    <RadioGroup value={rating} onValueChange={setRating} className="flex space-x-4">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex items-center space-x-2">
                                <RadioGroupItem value={value.toString()} id={`rating-${value}`} />
                                <Label htmlFor={`rating-${value}`}>{value}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="price-range">Price Range</Label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                        <SelectTrigger id="price-range">
                            <SelectValue placeholder="Select price range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="$">$ (Inexpensive)</SelectItem>
                            <SelectItem value="$$">$$ (Moderate)</SelectItem>
                            <SelectItem value="$$$">$$$ (Expensive)</SelectItem>
                            <SelectItem value="$$$$">$$$$ (Very Expensive)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="image">Upload Image</Label>
                    <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>

                <div className="space-y-2">

                    <label className="block text-sm font-medium mb-1" htmlFor="goodBadges">Good Badges</label>
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
                <div className="space-y-2">
                    <label className="block text-sm font-medium mb-1" htmlFor="badBadges">Bad Badges</label>
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
                <div className="space-y-2">
                    <label className="block text-sm font-medium mb-1" htmlFor="foodBadges">Food Types</label>
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


                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" onClick={handleSubmit}>Submit Review</Button>

                    </SheetClose>
                </SheetFooter>
            </form>
        </>
    )
}