'use client'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Count } from "@/components/utils/Count/Count";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = ({ className, totalRestaurants, totalReviews, totalUsers }: { className?: string, totalRestaurants: number, totalReviews: number, totalUsers: number }) => (
    <div className={`h-[calc(100vh-300px)] ${className}`}>
        <section className={"container mt-32 h-full flex-1 px-4 md:px-24"}>
            <div className="relative z-10 flex flex-col gap-4 py-12">
                <div className="relative flex flex-1 flex-col gap-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[40px] font-bold leading-[120%] text-content-primary md:text-[90px]"
                    >
                        Discover the Best Buffets<br /> in Town.
                    </motion.h1>
                </div>
                <motion.div
                    className="flex flex-1 flex-col gap-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
                >
                    <p className="text-base text-content-secondary md:text-lg">
                        Our comprehensive buffet review site helps you find the perfect all-you-can-eat experience, with user reviews, location details, and menu information.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/restaurants">
                            <Button>
                                Explore buffets →
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section >
        <Separator className="absolute left-0 z-10 hidden md:block" />
        <section className="relative z-10 flex w-full justify-center px-0 md:px-24 md:py-10">
            <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1">
                <div className="flex flex-1 flex-col items-center gap-4 border-r border-[#9091A0] border-opacity-[16%] px-12">
                    <Count
                        className="min-h-9 text-3xl font-bold"
                        from={0}
                        to={totalRestaurants}
                        suffix={"+"}
                    />
                    <motion.h2
                        className="text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Buffets
                    </motion.h2>
                </div>
                <div className="flex flex-1 flex-col items-center gap-4 border-r border-[#9091A0] border-opacity-[16%] px-12">
                    <Count
                        className="min-h-9 text-3xl font-bold"
                        from={0}
                        to={totalReviews}
                        suffix={"+"}
                    />
                    <motion.h2
                        className="text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Total Reviews
                    </motion.h2>
                </div>

                <div className="flex flex-1 flex-col items-center gap-4 px-12">
                    <Count
                        className="min-h-9 text-3xl font-bold"
                        from={0}
                        to={totalUsers}
                        suffix={"+"}
                    />
                    <motion.h2
                        className="text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Users
                    </motion.h2>
                </div>

                <div className="flex flex-1 flex-col items-center gap-4 border-r border-[#9091A0] border-opacity-[16%] px-12">
                    <Count className="min-h-9 text-3xl font-bold" from={0} to={4} />
                    <motion.h2
                        className="text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Countries
                    </motion.h2>
                </div>
            </div>
        </section>
        <Separator className="absolute left-0 z-10 hidden md:block" />
    </div >
);