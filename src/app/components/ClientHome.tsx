'use client';

import Link from 'next/link';
import { Hero } from './Hero';
import { HeroRestaurantParallax } from '@/components/ui/heroParallax';
import { useViewportDimensions } from '@/hooks/useViewportDimensions';

import { Restaurant } from '@/services/types';


export default function ClientHome({ user, isAuthenticated, restaurants }: { user: any, isAuthenticated: boolean, restaurants: Restaurant[] }) {
    const { width } = useViewportDimensions();
    return (
        <main className="flex  flex-col items-center justify-between p-24 overflow-x-hidden overflow-y-hidden ">
            <HeroRestaurantParallax
                className={width <= 1024 ? "pointer-events-none" : ""}
                products={restaurants}
            >
                <Hero />
            </HeroRestaurantParallax>
        </main >
    );
}
