'use client';

import Link from 'next/link';
import Image from 'next/image'
import { Hero } from './Hero';
import { HeroRestaurantParallax } from '@/components/ui/heroParallax';
import { useViewportDimensions } from '@/hooks/useViewportDimensions';

import type { Restaurant } from '@/services/types';
import { HandPlatterIcon, MapPinCheckIcon, PlusIcon, Star, StarIcon, Users, Utensils } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { foodStylesBadges, goodBadges } from '@/components/FoodBadges';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export default function ClientHome({ restaurants, totalRestaurants, totalReviews, totalUsers }: { restaurants: Restaurant[], totalRestaurants: number, totalReviews: number, totalUsers: number }) {
    const { width } = useViewportDimensions();
    return (
        <main className="flex  flex-col items-center justify-between overflow-x-hidden overflow-y-hidden ">
            <HeroRestaurantParallax
                className={width <= 1024 ? "pointer-events-none" : ""}
                products={restaurants.map(restaurant => ({ ...restaurant, averageRating: restaurant.rating }))}
            >
                <Hero totalRestaurants={totalRestaurants} totalReviews={totalReviews} totalUsers={totalUsers} />
            </HeroRestaurantParallax>

            <section className="pb-12 pt-16 md:py-24 lg:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8 text-center">Our focus</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Star, title: 'Food Quality', description: 'We believe in highlighting truly exceptional buffet experiences.' },
                            { icon: Utensils, title: 'Dietary Needs', description: 'We celebrate the rich diversity diets out there' },
                            { icon: Users, title: 'Community Driven', description: 'Our strength lies in our diverse community of food enthusiasts.' }
                        ].map((value) => (
                            <Card key={value.title}>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <value.icon className="w-6 h-6 mr-2" />
                                        {value.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <Image
                            src="/macbook.jpg"
                            width={1100}
                            height={1100}
                            alt="restaurantsview"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first lg:aspect-square"
                            quality={80}
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
                                    prefetch={true}
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
                        <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Make sure it fits your Macros
                                </h1>
                                <div className="flex flex-wrap gap-2">
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
                                    prefetch={true}
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                        <Image
                            src="/ihpne_mock_1.jpg"
                            width={1100}
                            height={1100}
                            quality={80}
                            alt="restaurantsview"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full order-1 md:order-last lg:aspect-square"
                        />
                    </div>

                </div>
            </section>
            <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <Image
                            src="/ihpne_mock_2.jpg"
                            width={1100}
                            height={1100}
                            quality={80}
                            alt="restaurantsview"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first lg:aspect-square"
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
                                    prefetch={true}
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
