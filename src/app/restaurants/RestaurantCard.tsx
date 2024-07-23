import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";
import { Restaurant } from "./types";


interface RestaurantRating {
    rating: number;
    roundedRating: number;
    id: string;
}

export const RestaurantRating = ({ rating, roundedRating, id }: RestaurantRating) => {
    return <div className=' flex items-baseline gap-2'>
        <p className='m-0 max-w-[30ch] text-2xl font-black '>
            {rating}
        </p>
        <div className="rating">
            {[...Array(5)].map((_, index) => {
                const isChecked = (index + 1) === roundedRating;
                return (
                    <input
                        key={`${index}_${id}`}
                        type="radio"
                        name={`rating_${index}_${id}`}
                        className="mask mask-star bg-red-400"
                        checked={isChecked}
                        readOnly />
                );
            })}
        </div>
    </div>;
}


export function RestaurantCard(restaurant: Restaurant) {

    const rating = restaurant?.rating ?? 0
    const roundedRating = Math.round(rating);
    return (
        <Link href={`/restaurants/${restaurant.id}`} >

            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <img src={restaurant.image_url} alt={`${restaurant.name} image`} className="w-full h-48 object-cover object-center rounded-lg" />
                <p className="mt-3 max-w-[30ch] text-sm opacity-50">
                    {restaurant.address}
                </p>

                <h2 className="mb-2 text-2xl font-semibold">
                    {restaurant.name}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>


                <p className="m-0 max-w-[30ch] text-sm opacity-50 line-clamp-3">
                    {restaurant.description}
                </p>

                <p className='mt-5 text-sm font-bold opacity-50'>{formatCurrency(restaurant.price!!, 'kronor')}</p>
                <div className='flex justify-between  gap-2'>


                    <RestaurantRating rating={rating} roundedRating={roundedRating} id={restaurant.id!!} />

                </div>

            </div>
        </Link >
    );
}
