'use client';

import Link from 'next/link';
import Image from 'next/image'
import { Hero } from './Hero';
import { HeroRestaurantParallax } from '@/components/ui/heroParallax';
import { useViewportDimensions } from '@/hooks/useViewportDimensions';

import type { Restaurant } from '@/services/types';
import { HandPlatterIcon, MapPinCheckIcon, PlusIcon, Quote, Star, StarIcon, Users, Utensils } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { foodStylesBadges, goodBadges } from '@/components/FoodBadges';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
    {
        quote: "Jag brukar hetsa mina barn att äta mer å så mycket ni kan så att de inte behöver äta sedan! Buffé dieten är som klippt och skuren för mig",
        name: "Jenny Boberg",
        detail: "Buffet Diet enthusiast",
    },
    {
        quote: "70 pounds of vegetables a month! I got down to 3% body fat with the Buffet Diet.",
        name: "Omar, DIF",
        detail: "Athlete",
    },
    {
        quote: "Everything in a single window dropped my fat percentage. Oboy!",
        name: "Bransen Johnsson",
        detail: "Community member",
    },
];


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

            <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 text-center">
                        What our community says
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto md:text-lg">
                        Real stories from real buffet enthusiasts who transformed their eating habits.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <Card key={t.name} className="relative">
                                <CardContent className="pt-8 pb-6">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <blockquote className="text-base italic leading-relaxed mb-6">
                                        &ldquo;{t.quote}&rdquo;
                                    </blockquote>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                                            {t.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{t.name}</p>
                                            <p className="text-xs text-muted-foreground">{t.detail}</p>
                                        </div>
                                    </div>
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Find your favorite buffet
                                </h2>
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
                                <Link href="/restaurants" prefetch={true}>
                                    <Button>Find Buffets</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Make sure it fits your Macros
                                </h2>
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
                                <Link href="/restaurants" prefetch={true}>
                                    <Button>Explore</Button>
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Contribute to the community
                                </h2>
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
                                <Link href="/authentication" prefetch={true}>
                                    <Button>
                                        <PlusIcon className='mr-2 h-4 w-4' />Add restaurant
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Ready to find your next buffet?
                    </h2>
                    <p className="text-muted-foreground md:text-lg mb-8">
                        Join our growing community across 4 countries and discover buffets that fit your diet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/restaurants" prefetch={true}>
                            <Button size="lg">Explore Buffets</Button>
                        </Link>
                        <Link href="/authentication" prefetch={true}>
                            <Button variant="outline" size="lg">Create Account</Button>
                        </Link>
                    </div>
                </div>
            </section>

        </main >
    );
}
