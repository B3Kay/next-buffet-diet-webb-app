'use client';

import Link from "next/link";
import { Button } from "reablocks";



export const NavigationButton = ({ className }: { className?: string }) => {

    return <Link href={"/restaurants/new"} passHref><Button className={className} variant="filled">Create Restaurant</Button></Link>;
}
