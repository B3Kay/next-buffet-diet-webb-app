import { SignUpForm } from "./_components/sign-up-form";
import Link from "next/link";
import { HandPlatterIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"



export default function SignupPage() {


    return (

        <div className="container relative min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 px-4  lg:px-0">
            <Link
                href="/authentication"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute right-4 top-4 md:right-8 md:top-8 hidden sm:block"
                )}
            >
                Login
            </Link>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <HandPlatterIcon className="mr-2 h-5 w-5" />
                    The Buffet Diet
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;One week in we let the story begin
                            We&apos;re going out on our first date (mm-mm)
                            But you and me are thrifty, so go all-you-can-eat
                            Fill up your bag, and I fill up a plate (mm-mm)&rdquo;
                        </p>
                        <footer className="text-sm">Shape of you, Ed Sheeran</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account to Sign up
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Welcome to the Buffet Finder! All you can eat and so much more.
                        </p>
                    </div>
                    <SignUpForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By Signing up, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}