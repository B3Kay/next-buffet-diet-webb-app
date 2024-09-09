'use client';

import Link from 'next/link';
import { SignOutButton } from '../../components/SignOutButton';
import { Hero } from './Hero';
import { HeroParallax } from '@/components/ui/heroParallax';
import { useViewportDimensions } from '@/hooks/useViewportDimensions';
import { Divider } from 'reablocks';


const Card = ({ title, link, description }: any) => {
    return (
        <Link
            href={link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <h2 className="mb-3 text-2xl font-semibold">
                {title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {description}
            </p>
        </Link>
    );
}

export default function ClientHome({ user, isAuthenticated }: { user: any, isAuthenticated: boolean }) {
    const { width } = useViewportDimensions();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HeroParallax
                className={width <= 1024 ? "pointer-events-none" : ""}
                products={[
                    {
                        title: "Buttons",
                        link: "/docs/components/elements/button",
                        thumbnail: "https://picsum.photos/id/237/200/300",
                    },
                    {
                        title: "Avatars",
                        link: "/docs/components/elements/avatar",
                        thumbnail: "https://picsum.photos/id/153/200/300",
                    },
                    {
                        title: "Notification",
                        link: "/docs/components/layers/notification",
                        thumbnail: "https://picsum.photos/id/13/200/300",
                    },
                    {
                        title: "Fields",
                        link: "/docs/components/form/input",
                        thumbnail: "https://picsum.photos/id/17/200/300",
                    },
                    {
                        title: "Tabs",
                        link: "/docs/components/layout/tabs",
                        thumbnail: "https://picsum.photos/id/27/200/300",
                    },
                    {
                        title: "Checkboxes",
                        link: "/docs/components/form/checkbox",
                        thumbnail: "https://picsum.photos/id/85/200/300",
                    },
                    {
                        title: "Buttonsss",
                        link: "/docs/components/elements/button",
                        thumbnail: "https://picsum.photos/id/74/200/300",
                    },


                    {
                        title: "Fieldsss",
                        link: "/docs/components/form/input",
                        thumbnail: "https://picsum.photos/id/155/200/300",
                    },
                    {
                        title: "Tags",
                        link: "/docs/components/elements/chip",
                        thumbnail: "https://picsum.photos/id/111/200/300",
                    },
                    {
                        title: "Toggle",
                        link: "/docs/components/form/toggle",
                        thumbnail: "https://picsum.photos/id/125/200/300",
                    },
                    {
                        title: "Range",
                        link: "/docs/components/elements/range",
                        thumbnail: "https://picsum.photos/id/222/200/300",
                    },
                    {
                        title: "Radio buttonsss",
                        link: "/docs/components/form/radio",
                        thumbnail: "https://picsum.photos/id/211/200/300",
                    },
                    {
                        title: "Menu",
                        link: "/docs/components/layers/menu",
                        thumbnail: "https://picsum.photos/id/166/200/300",
                    },
                    {
                        title: "Badges",
                        link: "/docs/components/elements/chip",
                        thumbnail: "https://picsum.photos/id/2/200/300",
                    },
                    {
                        title: "Tags",
                        link: "/docs/components/elements/chip",
                        thumbnail: "https://picsum.photos/id/66/200/300",
                    },
                    {
                        title: "Toggle",
                        link: "/docs/components/form/toggle",
                        thumbnail: "https://picsum.photos/id/77/200/300",
                    },
                    {
                        title: "Ranges",
                        link: "/docs/components/elements/range",
                        thumbnail: "https://picsum.photos/id/88/200/300",
                    },
                    {
                        title: "Radio buttons",
                        link: "/docs/components/form/radio",
                        thumbnail: "https://picsum.photos/id/99/200/300",
                    },
                ]}
            >
                <Hero />
            </HeroParallax>

            <section>
                <Divider />


                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Get fit by eating more&nbsp;
                        <code className="font-mono font-bold">and save time</code>
                    </p>
                    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="https://github.com/B3Kay"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{" "}Benjamin Karlsson
                        </a>
                        {isAuthenticated && <SignOutButton />}
                    </div>
                </div>

                <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-5xl font-bold">
                    Buffet Diet + {user ? user.name : 'Finder'}
                </h1>

                {/* Show the login button if not authenticated */}


                <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                    {/* Section of links about the buffet diet */}
                    <Card title="Get Started" link="" description="Find in-depth information about the Buffet Diet and how to get started" />
                    <Card title="Find restaurant" link="/restaurants" description="Use the Buffet Diet app to find highly rated buffets nearby you" />
                    <Card title="Blog" link="" description="Dive into the latest news and updates about the Buffet Diet" />
                    <Card title="Merch" link="" description="Explore the Buffet Diet merch" />
                </div>

            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Use Our Buffet Review Site?</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our site offers a comprehensive guide to the best buffet restaurants in your area, with user reviews,
                                location details, and menu information to help you find the perfect all-you-can-eat experience.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="grid gap-1">
                            {/* <StarIcon className="h-8 w-8 text-primary" /> */}
                            <h3 className="text-xl font-bold">User Reviewed</h3>
                            <p className="text-muted-foreground">
                                Browse detailed reviews from other diners to find the best buffets.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            {/* <LocateIcon className="h-8 w-8 text-primary" /> */}
                            <h3 className="text-xl font-bold">Location Details</h3>
                            <p className="text-muted-foreground">
                                Get the address, hours, and directions for each buffet restaurant.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            {/* <MenuIcon className="h-8 w-8 text-primary" /> */}
                            <h3 className="text-xl font-bold">Dietary Information</h3>
                            <p className="text-muted-foreground">View the menu and offerings for each buffet location.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}
