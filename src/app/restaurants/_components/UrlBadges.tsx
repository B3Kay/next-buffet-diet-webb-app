import { Badge } from "@/components/ui/badge"
import { badBadges as bad, foodStylesBadges as style, goodBadges as good, isFoodStyleBadge, isBadBadge, isGoodBadge, restaurantTypes } from "@/components/FoodBadges";

export function UrlBadges({ location, userLocation, restaurantType, foodStyleBadges, goodBadges, badBadges }: { location: string, userLocation: string[], restaurantType: string, foodStyleBadges: string[], goodBadges: string[], badBadges: string[] }) {

    return (
        <section className='flex flex-wrap gap-3 mx-5 mb-5'>
            {location.length > 0 && <Badge variant='outline'>{location}</Badge>}
            {restaurantType && <Badge variant="default">{restaurantTypes[restaurantType as keyof typeof restaurantTypes]}</Badge>}
            {foodStyleBadges.map((badge, index) => (
                style[badge as keyof typeof style] &&
                <Badge key={`foodStyleBadge-${index}`} variant="secondary">
                    {style[badge as keyof typeof style] || badge}
                </Badge>
            ))}
            {goodBadges.map((badge, index) => (
                good[badge as keyof typeof good] &&
                <Badge key={`goodBadge-${index}`} variant="default">
                    {good[badge as keyof typeof good]}
                </Badge>
            ))}
            {badBadges.map((badge, index) => (
                bad[badge as keyof typeof bad] &&
                <Badge key={`badBadge-${index}`} variant="destructive">
                    {bad[badge as keyof typeof bad]}
                </Badge>
            ))}
        </section>
    );
}