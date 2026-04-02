'use client'

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const placeholderImageUrl = "https://images.unsplash.com/photo-1524721696987-b9527df9e512?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0fGVufDB8fDB8fHww";

export const Images = ({ imageUrls, imageAlt }: { imageUrls: Array<string>; imageAlt?: string; }) => {
    const emptyImage = <div className="w-full max-h-96 object-cover object-center rounded-3xl overflow-hidden">
        <Image
            unoptimized
            width={500}
            height={500}
            src={placeholderImageUrl}
            alt={`${imageAlt} image`}
            className='w-full max-h-96 object-cover object-center ' />
    </div>;

    // Filter out empty strings
    const validUrls = imageUrls.filter(url => url && url.trim() !== '');

    if (validUrls.length === 0) {
        return emptyImage;
    }

    if (validUrls.length === 1) {
        return <Image unoptimized width={500} height={500} src={validUrls[0]} alt={`${imageAlt} image`} className="w-full max-h-96 object-cover object-center rounded-3xl" />;
    }

    return <ImageSlideshow images={validUrls} imageAlt={imageAlt} />;
};

const ImageSlideshow = ({ images, imageAlt }: { images: string[], imageAlt?: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-h-96 rounded-3xl overflow-hidden">
            <Image
                unoptimized
                width={500}
                height={500}
                src={images[currentIndex]}
                alt={`${imageAlt} image ${currentIndex + 1}`}
                className="w-full max-h-96 object-cover object-center"
            />
            <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={goToPrevious}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={goToNext}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};
