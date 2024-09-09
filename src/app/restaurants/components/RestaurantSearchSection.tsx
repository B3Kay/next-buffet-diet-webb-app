'use client'
import { Button, Input } from "reablocks"
import { NavigationButton } from "./NavigationButton"


export const RestaurantSearchSection = ({ isAuthenticated }: { isAuthenticated: boolean }) => {

    return <>

        <header className="flex items-center justify-between mb-8 mx-5">
            <h1 className="text-2xl font-bold">Restaurant</h1>
            <div className="relative flex-1 max-w-md">
                {/* <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                <Input disabled type="search" placeholder="Search restaurants..." className="w-full pl-8" />
            </div>
            {isAuthenticated && <NavigationButton />}
        </header>
    </>
}