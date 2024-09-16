'use client'
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from "react"

import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "@/components/ui/dialog"



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
                    <DialogContent>
                        <form
                            onSubmit={(event) => {
                                setOpen(false);
                                event.preventDefault();

                            }}
                        >
                            {/* Add search icon to input */}
                            <Input className="w-full h-12" placeholder="Search a buffet near you..." />
                            {/* <button type="submit">Submit</button> */}
                        </form>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </header >
    </>
}