
'use client'
import { Button } from "reablocks";
import { signOut } from "./auth";

export const SignOutButton = () => {
    return <Button variant="outline" startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor"></svg>
    } onClick={() => {
        signOut();
    }}>Sign out</Button>
}