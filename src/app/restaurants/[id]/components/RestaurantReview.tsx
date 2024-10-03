"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
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

export default function RestaurantReview() {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const [image, setImage] = useState<File | null>(null)
    const [foodBadges, setFoodBadges] = useState<string[]>([])
    const [newBadge, setNewBadge] = useState("")
    const [date, setDate] = useState<Date | undefined>(new Date())

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the data to your backend
        console.log({ comment, rating, priceRange, image, foodBadges, date })
    }

    const addBadge = () => {
        if (newBadge && !foodBadges.includes(newBadge)) {
            setFoodBadges([...foodBadges, newBadge])
            setNewBadge("")
        }
    }

    const removeBadge = (badge: string) => {
        setFoodBadges(foodBadges.filter((b) => b !== badge))
    }

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
                    <Label htmlFor="food-badge">Food Badges</Label>
                    <div className="flex space-x-2">
                        <Input
                            id="food-badge"
                            placeholder="Add a food badge"
                            value={newBadge}
                            onChange={(e) => setNewBadge(e.target.value)}
                        />
                        <Button type="button" onClick={addBadge}>
                            Add
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {foodBadges.map((badge) => (
                            <Badge key={badge} variant="secondary" className="flex items-center gap-1">
                                {badge}
                                <X className="h-3 w-3 cursor-pointer" onClick={() => removeBadge(badge)} />
                            </Badge>
                        ))}
                    </div>
                </div>


                {/* </CardFooter> */}
            </form>
            <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit" onClick={handleSubmit}>Submit Review</Button>
                </SheetClose>
            </SheetFooter>{/* <CardFooter> */}
        </>
    )
}