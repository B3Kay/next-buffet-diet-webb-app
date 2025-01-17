"use client";
// biome-ignore lint/style/useImportType: <explanation>
import {
    RestaurantCard,
    RestaurantCardProps,
} from "@/app/restaurants/_components/RestaurantCard";
import { useViewportDimensions } from "@/hooks/useViewportDimensions";
// biome-ignore lint/style/useImportType: <explanation>
import {
    MotionValue,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import React, { useMemo, useState } from "react";

export const ProductRestaurantCard = ({
    product,
    translate,
}: {
    product: RestaurantCardProps;
    translate: MotionValue<number>;
}) => {
    const [isImageLoaded, setImageIsLoaded] = useState<boolean>(false);

    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.id}
            className="group/product relative  w-[300px] flex-shrink-0 opacity-70 hover:opacity-100 "
        >
            <RestaurantCard {...product} />
        </motion.div>
    );
};

export type HeroRestaurantParallaxProps = {
    products: RestaurantCardProps[];
    children: React.ReactNode;
    className?: string;
};

export const HeroRestaurantParallax = ({
    products,
    children,
    className,
}: HeroRestaurantParallaxProps) => {
    const { width, height } = useViewportDimensions();

    const firstRow = products.slice(0, 10);
    const secondRow = products.slice(10, 20);
    const thirdRow = products.slice(20, 30);
    const ref = React.useRef(null);

    const isMobile = useMemo(() => width < 1024, [width]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [isMobile ? "-5% start" : "-10% start", "end start"],
    });

    const springConfig = {
        bounce: 0.1,
        damping: 100,
        stiffness: 1000,
        duration: 0.1,
    };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [500, 1500]),
        springConfig,
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [-500, -1500]),
        springConfig,
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.5], [15, 0]),
        springConfig,
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.7], [0.2, 1]),
        springConfig,
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.3], [20, 0]),
        springConfig,
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.4], [-height, 250]),
        springConfig,
    );

    return (
        <div ref={ref}>
            {children}
            <div
                className={`flex h-[1200px] max-w-[100vw] flex-col self-auto pt-40 antialiased [perspective:1000px] [transform-style:preserve-3d] md:max-w-[1440px] ${className}`}
            >
                <motion.div
                    style={{
                        rotateX,
                        rotateZ,
                        translateY,
                        opacity,
                    }}
                    initial={{ opacity: 0, rotateX: 0, rotateZ: 0, translateY: 0 }}
                >
                    <motion.div className="mb-3 flex flex-row-reverse space-x-3 space-x-reverse ">
                        {firstRow.map((product) => (
                            <ProductRestaurantCard
                                product={product}
                                translate={translateX}
                                key={product.id}
                            />
                        ))}
                    </motion.div>
                    <motion.div className="mb-3 flex flex-row space-x-3  ">
                        {secondRow.map((product) => (
                            <ProductRestaurantCard
                                product={product}
                                translate={translateXReverse}
                                key={product.id}
                            />
                        ))}
                    </motion.div>
                    <motion.div className="flex flex-row-reverse space-x-3 space-x-reverse">
                        {thirdRow.map((product) => (
                            <ProductRestaurantCard
                                product={product}
                                translate={translateX}
                                key={product.id}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
