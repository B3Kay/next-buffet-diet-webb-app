'use client';

import Link from 'next/link';
import { SignOutButton } from '../../components/SignOutButton';
import { Button } from 'reablocks';

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
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
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
            {!isAuthenticated && <Link href="/login" passHref legacyBehavior>
                <Button>To Login</Button>
            </Link>}

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                {/* Section of links about the buffet diet */}
                <Card title="Get Started" link="" description="Find in-depth information about the Buffet Diet and how to get started" />
                <Card title="Find restaurant" link="/restaurants" description="Use the Buffet Diet app to find highly rated buffets nearby you" />
                <Card title="Blog" link="" description="Dive into the latest news and updates about the Buffet Diet" />
                <Card title="Merch" link="" description="Explore the Buffet Diet merch" />
            </div>
        </main>
    );
}
