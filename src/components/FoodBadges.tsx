// Define constants for restaurant types
export const restaurantTypes = {
    BUFFET: '🤩All you can eat (Buffet)',
    COUNTER: '⚖️Weigh in the counter (Buffet)',
    TAKE_AWAY_BUFFET: '📦Take away (Buffet)',
    NO_BUFFET_MUCH_FOOD: '🗻No Buffet, much food',
    NO_BUFFET_LITTLE_FOOD: '🫷No Buffet, little food',
} as const;

// Define constants for food style badges
export const foodStylesBadges = {
    ASIAN: '🍜 Asian',
    SUSHI: '🍣 Sushi',
    THAI: '🍜 Thai',
    MONGOLIAN: '🍔 Mongolian',
    SEAFOOD: '🍤 Seafood',
    FRENCH: '🍔 French',
    PIZZA: '🍕 Pizza',
    HAMBURGER: '🍔 Hamburger',
    ITALIAN: '🍝 Italian',
    MEXICAN: '🌮 Mexican',
    AMERICAN: '🍽️ American/BBQ',
    SWEDISH: '🥔 Husmanskost',
    PAKISTANI: '🍛 Pakistani',
    MIDDLEEAST: '🧆 Middle eastern',
    BRAZILIAN: '🥩 Brazilian',
    ETIOPEAN: '🥚 Etiopean',
    ARABIC: '🥙 Arabic',
    INDIAN: '🍛 Indian',
    VEGETARIAN: '🌱 Vegetarian',
    BREAKFAST: '🥓 Breakfast',
    BRUNCH: '🍔 Brunch',
    GOURMET: '🥘 Gourmet',
    MEDITERRANEAN: '🍕 Mediterranean'
} as const;
// Define constants for good badges
export const goodBadges = {
    LEAN_PROTEIN: '💪 Lean protein',
    MEAT_VARIATION: '🍖 Meat variation',
    HIGH_MEAT_QUALITY: '🥩 High meat quality',
    CARNIVORE_FRIENDLY: '🍗 Carnivore friendly',
    VEGAN_FRIENDLY: '🌱 Vegan friendly',
    KETO_FRIENDLY: '🥑 Keto friendly',
    GLUTEN_FREE: '🌾 Gluten free',
    LOW_FAT_OPTIONS: '🏃 Low fat options',
    ANIMAL_BASED_FATS: '🐄 Animal based fats',
    EKOLOGIC: '🌿 Ekologic',
} as const;
// Define constants for bad badges
export const badBadges = {
    MEATS_HIDDEN: '🙈 Meats are hidden',
    VEGAN_ONLY: '🥦 Vegan only',
    COOKS_IN_SEED_OILS: '🌻 Cooked in seed oils',
    MOSTLY_GRAIN_BASED: '🌾 Mostly grain based',
} as const;


export type FoodStylesBadges = (typeof foodStylesBadges)[keyof typeof foodStylesBadges];
export type GoodBadges = (typeof goodBadges)[keyof typeof goodBadges];
export type RestaurantTypes = (typeof restaurantTypes)[keyof typeof restaurantTypes];
export type BadBadges = (typeof badBadges)[keyof typeof badBadges];
// Interfaces
interface BadgeOption<T> {
    value: T;
    label: T;
}
interface FoodStyleOptions<T> {
    label: string;
    options: Array<BadgeOption<T>>;
}
// Food options
export const foodOptions: FoodStyleOptions<FoodStylesBadges> = {
    label: '🍽️ Food styles',
    options: Object.values(foodStylesBadges).map(badge => ({
        label: badge,
        value: badge,
    })),
};
// Good options
export const goodOptions: FoodStyleOptions<GoodBadges> = {
    label: '💚 Good',
    options: Object.values(goodBadges).map(badge => ({
        label: badge,
        value: badge,
    })),
};
// Bad options
export const badOptions: FoodStyleOptions<BadBadges> = {
    label: '🛑 Bad',
    options: Object.values(badBadges).map(badge => ({
        label: badge,
        value: badge,
    })),
};
export const foodLabelOption = [
    foodOptions,
    goodOptions,
    badOptions
];
// Type guard functions
export function isFoodStyleBadge(value: any): value is FoodStylesBadges {
    return Object.values(foodStylesBadges).includes(value);
}
export function isGoodBadge(value: any): value is GoodBadges {
    return Object.values(goodBadges).includes(value);
}
export function isBadBadge(value: any): value is BadBadges {
    return Object.values(badBadges).includes(value);
}
// Usage example
const getBadgeStyle = (value: string, foodStyleStyles: string, goodBadges: string, badBadges: string): string => {
    if (isFoodStyleBadge(value)) {
        return foodStyleStyles;
    } if (isGoodBadge(value)) {
        return goodBadges;
    } if (isBadBadge(value)) {
        return badBadges;
    }
    return '';
};
