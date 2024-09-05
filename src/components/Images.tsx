import { ImageGrid } from "@/app/restaurants/[id]/page";

const placeholderImageUrl = "https://images.unsplash.com/photo-1524721696987-b9527df9e512?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0fGVufDB8fDB8fHww";
const placeholderImageUrls = [
    'https://images.unsplash.com/photo-1605321995625-c77c7204cd70?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1533142146849-4620b8191531?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524932326868-56e1f1ede465?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1687254351560-b8fb47e2bdff?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
export const Images = ({ imageUrls, imageAlt }: { imageUrls: Array<string>; imageAlt?: string; }) => {
    const emptyImage = <div className="w-full max-h-96 object-cover object-center rounded-3xl overflow-hidden">
        <img
            src={placeholderImageUrl}
            alt={`${imageAlt} image`}
            className='w-full max-h-96 object-cover object-center ' />
    </div>;
    // Check if the array is empty
    if (imageUrls.length === 0) {
        return emptyImage;
    }

    // Check if the first element is an empty stringF
    if (imageUrls.length === 1 && imageUrls[0] === '') {
        return emptyImage;
    }

    // Check if there is only one image URL
    if (imageUrls.length === 1) {
        const singleImage = <img src={imageUrls[0]} alt={`${imageAlt} image`} className="w-full max-h-96 object-cover object-center rounded-3xl" />;
        return singleImage;
    }
    const imageGrid = <ImageGrid images={imageUrls} />;

    // If there are multiple image URLs
    return imageGrid;
};
