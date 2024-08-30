'use client'

import Link from "next/link";
import { Button } from "reablocks";

export default function WelcomePage() {

    return <div className="flex flex-row justify-center w-full md:min-w-[960px] min-h-[600px] relative dark:bg-black-pearl p-6">
        <div className="text-center">
            <div className="absolute top-0 left-0 z-0 w-full leading-[600px] text-center bg-clip-text text-[200px] opacity-20    0 bg-gradient-to-r from-waterloo to-charade font-bold">
                WELCOME
            </div>
            <div className="absolute top-0 left-0 w-full h-full dark:bg-[radial-gradient(circle,rgba(36,36,66,0.3)_2%,rgba(2,2,15,1)_80%)] light:bg-[radial-gradient(circle,rgba(224,224,232,0.3)_2%,rgba(247,247,250,1)_80%)]" />
            <div className="flex flex-col gap-3 h-full justify-center">
                <div className="grow" />
                <div className="text-text-primary z-10 relative font-bold !text-5xl">
                    New to Buffet Diet?
                </div>
                <div className="dark:text-waterloo light:text-charade opacity-80 z-10 relative">
                    Go to the login page to see the amazing offering of the buffetdiet!
                </div>

                <div className="grow flex flex-col justify-center">
                    <Link href="/login" passHref legacyBehavior>
                        <Button color="primary" className="z-10 mx-auto relative rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors font-semibold">
                            To Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}