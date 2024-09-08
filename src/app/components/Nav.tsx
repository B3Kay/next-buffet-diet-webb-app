'use client';
import { signOut } from "@/actions/auth";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthModel } from "pocketbase";
import { Avatar, Button, Card, List, ListItem, Menu } from "reablocks";
import { FC, useRef, useState } from "react";

// import { cn } from "@/utils/cn";

const navLinks = [
    {
        label: "Restaurants",
        href: "/restaurants",
        target: "_self",
    },
    {
        label: "About",
        href: "/about",
    },
];
const AnimatedButton = motion(Button)

export const Nav = ({ user }: { user: AuthModel | false }) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const pathName = usePathname();

    const isActive = (path: string) => pathName.startsWith(path);


    const [openProfile, setProfileOpen] = useState(false);
    const buttonRef = useRef(null);



    return (
        <nav className="flex justify-center sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.1] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div
                className={`max-w-5xl relative flex h-fit w-full items-center justify-between p-5 transition-[box-shadow]  ${isNavOpen && "shadow-xl"}`

                }
                aria-label="Global"
            >


                <div className="">
                    <Link href="/">
                        <span className="sr-only">reablocks</span>
                        Buffet Diet
                    </Link>
                </div>

                <div className="absolute right-4 top-3 flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-content-secondary"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isNavOpen ? (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4 16L16 4"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M4 4L16 16"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="hidden md:flex md:gap-x-2 lg:gap-x-4 items-center">
                    {/* <ButtonGroup > */}



                    {navLinks.map(({ label, href, target }, index) => (
                        <Link
                            href={href}
                            className={`text-base font-semibold leading-6 text-content-secondary transition-colors hover:text-content-primary `}
                            target={target}
                            key={`nav-link-${label}-${index}`}
                            legacyBehavior
                            passHref
                        >
                            <AnimatedButton
                                variant="text"

                                className={`text-sm/6 font-semibold text-white/50 ${isActive(href) ? 'text-content-primary' : ''}`}

                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
                            >
                                {label}
                            </AnimatedButton>
                        </Link>
                    ))}
                    {/* <div className="text-base font-semibold leading-6 text-content-secondary transition-colors hover:text-content-primary">Profile</div> */}

                    {user ? <div ref={buttonRef} onClick={() => setProfileOpen(!openProfile)}>
                        <Avatar name={user.name} />
                    </div> :
                        <AnimatedButton
                            variant="outline"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * 3 } }}>
                            <Link href="/login" passHref legacyBehavior>
                                {/* <Button variant="outline" color="secondary" size="medium">Login</Button> */}
                                login
                            </Link>
                        </AnimatedButton>
                    }

                    <Menu open={openProfile} onClose={() => setProfileOpen(false)} reference={buttonRef}>
                        <Card disablePadding>
                            <List>
                                <ListItem onClick={() => signOut()}>Sign out</ListItem>

                            </List>
                        </Card>
                    </Menu>

                </div>
                {
                    isNavOpen && (
                        <div className="flex w-full flex-col gap-2 pt-6">
                            {navLinks.map(({ label, href, target }, index) => (
                                <motion.div
                                    key={`nav-link-mobile-${label}-${index}`}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0, transition: { delay: 0.1 * index } }}
                                >
                                    <Link
                                        className="text-content-secondary transition-colors hover:text-content-primary lg:inline-block"
                                        href={href}
                                        target={target}
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <span>{label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )
                }

            </div >
        </nav>
    );
};