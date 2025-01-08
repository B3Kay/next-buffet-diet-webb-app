'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";



export const NavigationButton = ({ className }: { className?: string }) => {

    return <Link href={"/restaurants/new"} passHref><Button className={className}>Create Restaurant</Button></Link>;
}
