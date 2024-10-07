'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface WelcomeContentProps {
    isLoggedIn: boolean;
}

export default function WelcomeContent({ isLoggedIn }: WelcomeContentProps) {
    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    {isLoggedIn ? "Welcome back!" : "Welcome to Buffet Diet"}
                </h1>
                <p className="text-sm text-muted-foreground">
                    {isLoggedIn
                        ? "Ready to explore some delicious buffets?"
                        : "Please log in or sign up to start your Buffet Diet journey."}
                </p>
            </div>
            {isLoggedIn ? (
                <div className="space-y-4 ">
                    <Link href="/explore" passHref>
                        <Button className="w-full">
                            Explore Buffets
                        </Button>
                    </Link>
                    <Link href="/create" passHref>
                        <Button className="w-full mt-2" variant="outline">
                            Create New Buffet
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="space-y-4 grid gap-1">
                    <Link href="/authentication" passHref>
                        <Button className="w-full">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/signup" passHref>
                        <Button className="w-full mt-2" variant="outline">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            )}
            <p className="px-8 text-center text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                    Privacy Policy
                </Link>
                .
            </p>
        </div>
    );
}