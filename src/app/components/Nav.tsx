'use client';
import { signOut } from "@/actions/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import getInitals from "name-initials";
import { AuthModel } from "pocketbase";
import { List, ListItem, Menu } from "reablocks";
import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { HandPlatterIcon, LogIn, LogInIcon, LogOut, MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";
import { HamburgerMenuIcon, PlusIcon } from "@radix-ui/react-icons";
import { NavElements } from "./NavElements";


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
    const { theme, setTheme } = useTheme()


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
                        <span className="sr-only">The Buffet Diet</span>
                        <div className="relative z-20 flex items-center text-lg font-medium">
                            <HandPlatterIcon className="mr-2 h-5 w-5" />
                            The Buffet Diet
                        </div>
                    </Link>
                </div>

                <div className="absolute right-4 top-4 flex md:hidden">
                    <Sheet>
                        <SheetTrigger><HamburgerMenuIcon /></SheetTrigger>
                        <SheetContent className="p-0">
                            <div className="p-5">

                                <SheetHeader className="text-left">
                                    <SheetTitle>The Buffet diet</SheetTitle>
                                    <SheetDescription>
                                        Welcome to The Buffet Diet, navigate around the website and enjoy your buffet experience.
                                    </SheetDescription>
                                </SheetHeader>
                            </div>

                            <NavElements isCollapsed={false} links={[
                                {
                                    title: "Restaurants",
                                    href: "/restaurants",
                                    variant: isActive('/restaurants') ? 'default' : 'ghost',
                                },

                                {
                                    title: "About",
                                    href: "/about",
                                    label: "",
                                    // icon: Send,
                                    variant: isActive('/about') ? 'default' : 'ghost',
                                },

                            ]}></NavElements>
                            <Separator />
                            <NavElements isCollapsed={false} links={[
                                {
                                    title: "Toggle Theme",
                                    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
                                    icon: theme === 'dark' ? MoonIcon : SunIcon,
                                    variant: 'ghost',
                                },
                                user ?
                                    {
                                        title: "Log out",
                                        href: "/",
                                        onClick: () => signOut(),
                                        icon: LogOut,
                                        variant: 'ghost',
                                    } :
                                    {
                                        title: "Log in",
                                        href: "/authentication",
                                        onClick: () => signOut(),
                                        icon: LogIn,
                                        variant: 'ghost',
                                    },
                            ]}></NavElements>
                        </SheetContent>
                    </Sheet>

                </div>
                <div className="hidden md:flex md:gap-x-2 lg:gap-x-4 items-center">

                    {navLinks.map(({ label, href, target }, index) => (
                        <Link
                            href={href}
                            className={`text-base font-semibold leading-6 text-content-secondary transition-colors hover:text-content-primary ${isActive(href) && ''}`}
                            target={target}
                            key={`nav-link-${label}-${index}`}
                            legacyBehavior
                            passHref
                        >
                            <AnimatedButton
                                variant={isActive(href) ? 'secondary' : 'ghost'}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
                            >
                                {label}
                            </AnimatedButton>
                        </Link>
                    ))}


                    {user ? <div ref={buttonRef}
                    >
                        <motion.div initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * 3 } }}>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar className="h-8 w-8  text-xs">
                                        <AvatarImage src="" alt="@shadcn" />
                                        <AvatarFallback>{getInitals(user.name)}</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem disabled>Profile</DropdownMenuItem>
                                    <Link href="/restaurants/new" >
                                        <DropdownMenuItem >
                                            <PlusIcon className="mr-2 h-4 w-4"></PlusIcon>Add restaurant
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signOut()}><LogInIcon className="mr-2 h-4 w-4" /> Sign out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </motion.div>
                    </div> :
                        <Link href="/authentication" passHref legacyBehavior>
                            <AnimatedButton
                                variant="outline"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * 3 } }}>
                                Login
                            </AnimatedButton>
                        </Link>
                    }

                    <Menu open={openProfile} onClose={() => setProfileOpen(false)} reference={buttonRef}>
                        <Card>
                            <List>
                                <ListItem onClick={() => signOut()}>Sign out</ListItem>

                            </List>
                        </Card>
                    </Menu>
                    <motion.div initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * 4 } }}>
                        <ThemeToggle />
                    </motion.div>

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
                            <div
                                className="text-content-secondary transition-colors hover:text-content-primary lg:inline-block"

                                onClick={() => { setIsNavOpen(false); signOut(); }}
                            >
                                <span>Signout</span>
                            </div>
                            <ThemeToggle />
                        </div>
                    )
                }

            </div >
        </nav >
    );
};



