'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { restaurantTypes } from "@/components/FoodBadges"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Search, X } from "lucide-react"

export function RestaurantFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [nameFilter, setNameFilter] = useState(searchParams.get('name') || '')
    const currentType = searchParams.get('type') || ''
    const currentSort = searchParams.get('sort') || 'created'

    const applyFilters = (overrides: Record<string, string> = {}) => {
        const params = new URLSearchParams(searchParams.toString())

        if (nameFilter || overrides.name !== undefined) {
            const val = overrides.name ?? nameFilter
            if (val) params.set('name', val)
            else params.delete('name')
        }

        for (const [key, value] of Object.entries(overrides)) {
            if (key === 'name') continue
            if (value) params.set(key, value)
            else params.delete(key)
        }

        router.push(`/restaurants?${params.toString()}`)
    }

    const clearFilters = () => {
        setNameFilter('')
        // Keep only search-related params
        const params = new URLSearchParams()
        const search = searchParams.get('search')
        const location = searchParams.get('location')
        if (search) params.set('search', search)
        if (location) params.set('location', location)
        router.push(`/restaurants?${params.toString()}`)
    }

    const hasFilters = nameFilter || currentType || currentSort !== 'created'

    return (
        <div className="flex flex-wrap gap-3 mx-5 mb-4 items-end">
            <div className="flex gap-2 flex-1 min-w-[200px]">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Filter by name..."
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') applyFilters()
                        }}
                        className="pl-8"
                    />
                </div>
                <Button size="sm" onClick={() => applyFilters()}>Filter</Button>
            </div>

            <Select
                value={currentType}
                onValueChange={(value) => applyFilters({ type: value === 'all' ? '' : value })}
            >
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    {Object.values(restaurantTypes).map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select
                value={currentSort}
                onValueChange={(value) => applyFilters({ sort: value })}
            >
                <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="created">Newest</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price">Price (Low)</SelectItem>
                    <SelectItem value="-price">Price (High)</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
            </Select>

            {hasFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="mr-1 h-4 w-4" />
                    Clear
                </Button>
            )}
        </div>
    )
}
