'use client'
import { Input } from "@/components/ui/input"
import { NavigationButton } from "./NavigationButton"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon, PlusIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from "react"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Slider } from "@/components/ui/slider"
import { goodBadges, goodOptions } from "@/components/FoodBadges"
import { Badge, badgeVariants } from "@/components/ui/badge"
import { CommandSeparator } from "cmdk"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"



var a = 0
export const RestaurantSearchSection = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [distance, setDistance] = useState(0)
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    console.log(search + a++)
    return <>

        <header className="flex sm:items-center justify-between flex-col sm:flex-row mb-8 mx-5 gap-3">
            <h1 className="text-2xl font-bold">Restaurant</h1>
            <div className="relative flex-1 max-w-md">

                <Button onClick={() => setOpen(true)} variant="outline" className="">Search Buffet...

                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>J
                    </kbd>
                </Button>
            </div>
            {isAuthenticated && <Link href={"/restaurants/new"} passHref ><Button variant="default"><PlusIcon className="mr-2 h-4 w-4" />Add Restaurant</Button></Link>}
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput value={search} onValueChange={setSearch} placeholder="Search a buffet near you..." />
                <CommandList>

                    <CommandGroup heading="Suggestions">
                        <div className="flex flex-wrap gap-1 mx-3">
                            {goodOptions.options.map((option) => (
                                <button className={badgeVariants()} key={option.value}>{option.label}</button>
                            ))}
                        </div>
                    </CommandGroup>
                    <Separator className="my-2" />
                    <CommandGroup >
                        <Button variant={'ghost'}><ChevronDownIcon className="mr-2 h-4 w-4" />Show more</Button>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </header>
    </>
}