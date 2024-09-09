'use client'
import { Input } from "@/components/ui/input"
import { NavigationButton } from "./NavigationButton"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusIcon } from '@radix-ui/react-icons'


export const RestaurantSearchSection = ({ isAuthenticated }: { isAuthenticated: boolean }) => {

    return <>

        <header className="flex sm:items-center justify-between flex-col sm:flex-row mb-8 mx-5 gap-3">
            <h1 className="text-2xl font-bold">Restaurant</h1>
            <div className="relative flex-1 max-w-md">
                {/* <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                <Input disabled type="search" placeholder="Search restaurants..." className="w-full pl-8" />
            </div>
            {isAuthenticated && <Link href={"/restaurants/new"} passHref ><Button variant="default"><PlusIcon className="mr-2 h-4 w-4" />Add Restaurant</Button></Link>}
        </header>
    </>
}