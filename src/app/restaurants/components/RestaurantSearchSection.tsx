'use client'
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontBoldIcon, PinBottomIcon, PlusIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from "react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Controller, Form, useForm } from "react-hook-form"
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Toggle, toggleVariants } from "@/components/ui/toggle"
import { MapPinCheckIcon, MapPinIcon, PinIcon, StarIcon, Wifi } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn, getGeolocation } from "@/lib/utils"




export const RestaurantSearchSection = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            search: ''
        }
    });
    const [isLocationActive, setLocationActive] = useState(false)
    const [open, setOpen] = useState(false)

    // const [distance, setDistance] = useState(0)
    const router = useRouter()

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


    const onSubmit = async (formValues: { search: string }) => {
        const params = await getSearchParams(formValues, isLocationActive)
        const newUrl = `/restaurants?${params.toString()}`;
        router.push(newUrl);

        setOpen(false);
    }

    return <>

        <header className="flex sm:items-center justify-between flex-col sm:flex-row mb-8 mx-5 gap-3">
            <h1 className="text-2xl font-bold">Restaurant</h1>
            <div className="relative flex flex-1 max-w-md gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                className={cn(toggleVariants({ variant: "outline" }), isLocationActive ? "bg-accent text-accent-foreground" : "bg-transparent")}
                                onClick={() => setLocationActive(!isLocationActive)}
                                aria-label="Toggle wifi"
                            >
                                <MapPinIcon className="h-4 w-4" />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Toggle to show restaurants nearby your location</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>


                <Button className="flex w-full justify-between" onClick={() => setOpen(true)} variant="outline" >Search Buffet...

                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>k
                    </kbd>
                </Button>
            </div>
            {isAuthenticated && <Link href={"/restaurants/new"} passHref ><Button variant="default"><PlusIcon className="mr-2 h-4 w-4" />Add Restaurant</Button></Link>}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogPortal   >
                    <DialogOverlay />
                    <DialogContent >
                        <VisuallyHidden.Root asChild>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </VisuallyHidden.Root >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="search"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        className="w-full h-12"
                                        placeholder="Search a buffet near you..."
                                    />
                                )}
                            />
                            {/* <Button type="submit" className="mt-4">
                                Search
                            </Button> */}
                        </form>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </header >
    </>
}

async function getSearchParams(formValues: { search: string }, isLocationActive: boolean) {
    const params = new URLSearchParams(window.location.search)

    if (formValues.search.length > 0) {
        const encodedSearch = encodeURIComponent(formValues.search)
        params.set('search', encodedSearch)
    } else {
        params.delete('search')
    }
    if (isLocationActive) {
        try {
            const { latitude, longitude } = await getGeolocation()
            params.set('latitude', latitude.toString())
            params.set('longitude', longitude.toString())
        } catch (error) {
            console.error('Failed to get geolocation:', error)
        }
    } else {
        params.delete('latitude')
        params.delete('longitude')
    }
    return params
}
