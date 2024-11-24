'use client';

import Link from 'next/link';
import Image from 'next/image'
import { Hero } from './Hero';
import { HeroRestaurantParallax } from '@/components/ui/heroParallax';
import { useViewportDimensions } from '@/hooks/useViewportDimensions';

import { Restaurant } from '@/services/types';
import { HandPlatterIcon, MapPinCheckIcon, PlusIcon, StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { foodStylesBadges, goodBadges } from '@/components/FoodBadges';


export default function ClientHome({ user, isAuthenticated, restaurants }: { user: any, isAuthenticated: boolean, restaurants: Restaurant[] }) {
    const { width } = useViewportDimensions();
    return (
        <main className="flex  flex-col items-center justify-between p-24 overflow-x-hidden overflow-y-hidden ">
            <HeroRestaurantParallax
                className={width <= 1024 ? "pointer-events-none" : ""}
                products={restaurants.map(restaurant => ({ ...restaurant, averageRating: restaurant.rating }))}
            >
                <Hero />
            </HeroRestaurantParallax>


            <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 mt-24">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <Image
                            src="/restaurantsview.png"
                            width={550}
                            height={550}
                            alt="restaurantsview"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first lg:aspect-square"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Find your favorite buffet
                                </h1>
                                <div className='flex flex-wrap gap-2'>
                                    <Badge><StarIcon className='mr-2 h-4 w-4' />Highest Ratings</Badge>
                                    <Badge><MapPinCheckIcon className='mr-2 h-4 w-4' />Your Country</Badge>
                                    <Badge><HandPlatterIcon className='mr-2 h-4 w-4' />The Best Buffets</Badge>
                                </div>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Our comprehensive buffet review site helps you find the perfect all-you-can-eat experience, with
                                    user reviews, location details, and menu information.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="/restaurants"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Find Buffets
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Make sure it fits your Macros
                                </h1>
                                <div className='flex flex-wrap gap-2'>
                                    <Badge>{goodBadges.LEAN_PROTEIN}</Badge>
                                    <Badge>{goodBadges.CARNIVORE_FRIENDLY}</Badge>
                                    <Badge>{goodBadges.KETO_FRIENDLY}</Badge>
                                    <Badge>{goodBadges.VEGAN_FRIENDLY}</Badge>
                                </div>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Every buffet is reviewed by our experts and community to ensure it fits your diet or Macros.
                                    That you get the best food qualities, avoid seed oils or whatever your macronutrial needs are.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="/restaurants"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                        <Image
                            src="/restaurant.png"
                            width={550}
                            height={550}
                            alt="restaurantsview"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        />
                    </div>
                </div>
            </section>
            <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <Image
                            src="/reviewPhone.png"
                            width={550}
                            height={550}
                            alt="restaurantsview"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-first lg:aspect-square"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Contribute to the community
                                </h1>
                                <div className='flex flex-wrap gap-2'>

                                    <Badge>{foodStylesBadges.AMERICAN}</Badge>
                                    <Badge>{foodStylesBadges.MEXICAN}</Badge>
                                    <Badge>{foodStylesBadges.ITALIAN}</Badge>
                                </div>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Create a profile and start reviewing buffets now.
                                    We are together building a vivid community of buffet enthusiasts. And people who want to know the content of a restaurant before they get there.
                                    To find the buffets you want!
                                </p>

                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="/authentication"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    <PlusIcon className='mr-2 h-4 w-4' />Add restaurant
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}
