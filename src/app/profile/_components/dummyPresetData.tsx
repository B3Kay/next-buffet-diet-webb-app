"use client";
import { RestaurantBase } from "@/services/types";

export const dummyPresetData: RestaurantBase[] = [
    {
        name: "The Gourmet Kitchen",
        description: "A fine dining experience with a focus on seasonal ingredients.",
        address: "101 Market St, San Francisco, CA 94105, USA",
        type: "Restaurant",
        price: 50,
        rating: 4.8,
        website: "https://gourmetkitchen.com",
        imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍝 Italian", "🌱 Vegan"],
        longitude: -122.4194, // San Francisco
        latitude: 37.7749
    },
    {
        name: "Burger Haven",
        description: "Home of the best burgers in town.",
        address: "123 Broadway St, New York, NY 10001, USA",
        type: "Fast Food",
        price: 15,
        rating: 4.5,
        website: "https://burgerhaven.com",
        imageUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍔 American", "🍟 Fast Food"],
        longitude: -74.0060, // New York City
        latitude: 40.7128
    },
    {
        name: "Sushi World",
        description: "Authentic sushi and Japanese cuisine.",
        address: "2-5-1 Nihonbashi, Chūō City, Tokyo 103-0027, Japan",
        type: "Restaurant",
        price: 30,
        rating: 4.7,
        website: "https://sushiworld.com",
        imageUrl: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=3390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍣 Japanese", "🐟 Seafood"],
        longitude: 139.6917, // Tokyo, Japan
        latitude: 35.6895
    },
    {
        name: "Pasta Paradise",
        description: "Delicious homemade pasta dishes.",
        address: "Piazza della Rotonda, 00186 Roma RM, Italy",
        type: "Restaurant",
        price: 25,
        rating: 4.6,
        website: "https://pastaparadise.com",
        imageUrl: "https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍝 Italian", "🥗 Vegetarian"],
        longitude: 12.4964, // Rome, Italy
        latitude: 41.9028
    },
    {
        name: "Taco Fiesta",
        description: "A vibrant place for tacos and Mexican cuisine.",
        address: "Plaza de la Constitución 1, 06000 Ciudad de México, Mexico",
        type: "Restaurant",
        price: 20,
        rating: 4.4,
        website: "https://tacofiesta.com",
        imageUrl: "https://images.unsplash.com/photo-1524412529635-a258ed66c010?q=80&w=3795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🌮 Mexican", "🌶️ Spicy"],
        longitude: -99.1332, // Mexico City
        latitude: 19.4326
    },
    {
        name: "Vegan Delights",
        description: "Plant-based dishes that everyone will love.",
        address: "16-18 Smithfield Market, London EC1A 9PS, United Kingdom",
        type: "Restaurant",
        price: 18,
        rating: 4.9,
        website: "https://vegandelights.com",
        imageUrl: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?q=80&w=3630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🌱 Vegan", "🥗 Healthy"],
        longitude: -0.1276, // London, UK
        latitude: 51.5074
    },
    {
        name: "BBQ Central",
        description: "Smoky BBQ dishes and grilled favorites.",
        address: "700 W 5th St, Los Angeles, CA 90071, USA",
        type: "Restaurant",
        price: 22,
        rating: 4.3,
        website: "https://bbqcentral.com",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661310177352-f586bf23a403?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍖 BBQ", "🇺🇸 American"],
        longitude: -118.2437, // Los Angeles, USA
        latitude: 34.0522
    },
    {
        name: "Dessert Oasis",
        description: "Sweet treats and desserts for every occasion.",
        address: "8 Rue de la Paix, 75002 Paris, France",
        type: "Café",
        price: 10,
        rating: 4.8,
        website: "https://dessertoasis.com",
        imageUrl: "https://images.unsplash.com/photo-1458130713137-8b7237fb3648?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍰 Desserts", "☕ Café"],
        longitude: 2.3522, // Paris, France
        latitude: 48.8566
    },
    {
        name: "Coffee Corner",
        description: "Your local spot for coffee and pastries.",
        address: "102-104 Bleeker St, New York, NY 10012, USA",
        type: "Café",
        price: 5,
        rating: 4.5,
        website: "https://coffeecorner.com",
        imageUrl: "https://images.unsplash.com/photo-1500898335608-a4b6696f81a5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["☕ Café", "🍳 Breakfast"],
        longitude: -73.9352, // New York City (different area)
        latitude: 40.7306
    },
    {
        name: "Seafood Shack",
        description: "Fresh seafood dishes with a view.",
        address: "1200 Alaskan Way, Seattle, WA 98101, USA",
        type: "Restaurant",
        price: 35,
        rating: 4.6,
        website: "https://seafoodshack.com",
        imageUrl: "https://images.unsplash.com/photo-1694685367640-05d6624e57f1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🐟 Seafood", "🌊 Ocean"],
        longitude: -122.3365, // Seattle, USA
        latitude: 47.6097
    }
];

