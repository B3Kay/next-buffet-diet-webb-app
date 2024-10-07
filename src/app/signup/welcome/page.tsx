import { isUserAuthenticated } from '@/actions/auth';
import WelcomeContent from './WelcomeContent';
import { HandPlatterIcon } from 'lucide-react';

export default async function WelcomePage() {
    const isLoggedIn = await isUserAuthenticated();

    return (
        <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
                            We're going out on our first date
                            But you and me are thrifty, so go all-you-can-eat
                            Fill up your bag, and I fill up a plate&rdquo;
                        </p>
                        <footer className="text-sm">Shape of you, Ed Sheeran</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <WelcomeContent isLoggedIn={isLoggedIn} />
            </div>
        </div>
    );
}