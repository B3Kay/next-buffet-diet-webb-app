'use client';

import Link from "next/link";
import { Button } from "reablocks";



export const NavigationButton = () => {

    return <Link href={"/restaurants/new"} passHref><Button className='rounded-full mt-8' variant="filled">Create Restaurant</Button></Link>;
}
