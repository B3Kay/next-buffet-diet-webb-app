"use client";
import { RestaurantBase } from "@/services/types";

export const dummyPresetData: RestaurantBase[] = [
    {
        name: "The Gourmet Kitchen",
        description: "A fine dining experience with a focus on seasonal ingredients.",
        address: "123 Culinary St, Food City, FC 12345",
        type: "Restaurant",
        price: 50,
        rating: 4.8,
        website: "https://gourmetkitchen.com",
        imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍝 Italian", "🌱 Vegan"],
        longitude: -123.456,
        latitude: 45.678
    },
    {
        name: "Burger Haven",
        description: "Home of the best burgers in town.",
        address: "456 Burger Blvd, Meat Town, MT 67890",
        type: "Fast Food",
        price: 15,
        rating: 4.5,
        website: "https://burgerhaven.com",
        imageUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍔 American", "🍟 Fast Food"],
        longitude: -123.457,
        latitude: 45.679
    },
    {
        name: "Sushi World",
        description: "Authentic sushi and Japanese cuisine.",
        address: "789 Sushi St, Fish City, FC 23456",
        type: "Restaurant",
        price: 30,
        rating: 4.7,
        website: "https://sushiworld.com",
        imageUrl: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=3390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍣 Japanese", "🐟 Seafood"],
        longitude: -123.458,
        latitude: 45.680
    },
    {
        name: "Pasta Paradise",
        description: "Delicious homemade pasta dishes.",
        address: "321 Pasta Ave, Noodle Town, NT 34567",
        type: "Restaurant",
        price: 25,
        rating: 4.6,
        website: "https://pastaparadise.com",
        imageUrl: "https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍝 Italian", "🥗 Vegetarian"],
        longitude: -123.459,
        latitude: 45.681
    },
    {
        name: "Taco Fiesta",
        description: "A vibrant place for tacos and Mexican cuisine.",
        address: "654 Taco Rd, Spice City, SC 45678",
        type: "Restaurant",
        price: 20,
        rating: 4.4,
        website: "https://tacofiesta.com",
        imageUrl: "https://images.unsplash.com/photo-1524412529635-a258ed66c010?q=80&w=3795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🌮 Mexican", "🌶️ Spicy"],
        longitude: -123.460,
        latitude: 45.682
    },
    {
        name: "Vegan Delights",
        description: "Plant-based dishes that everyone will love.",
        address: "987 Vegan Way, Green City, GC 56789",
        type: "Restaurant",
        price: 18,
        rating: 4.9,
        website: "https://vegandelights.com",
        imageUrl: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?q=80&w=3630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🌱 Vegan", "🥗 Healthy"],
        longitude: -123.461,
        latitude: 45.683
    },
    {
        name: "BBQ Central",
        description: "Smoky BBQ dishes and grilled favorites.",
        address: "159 BBQ Blvd, Grill Town, GT 67891",
        type: "Restaurant",
        price: 22,
        rating: 4.3,
        website: "https://bbqcentral.com",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661310177352-f586bf23a403?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍖 BBQ", "🇺🇸 American"],
        longitude: -123.462,
        latitude: 45.684
    },
    {
        name: "Dessert Oasis",
        description: "Sweet treats and desserts for every occasion.",
        address: "753 Sweet St, Dessert City, DC 78901",
        type: "Café",
        price: 10,
        rating: 4.8,
        website: "https://dessertoasis.com",
        imageUrl: "https://images.unsplash.com/photo-1458130713137-8b7237fb3648?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍰 Desserts", "☕ Café"],
        longitude: -123.463,
        latitude: 45.685
    },
    {
        name: "Coffee Corner",
        description: "Your local spot for coffee and pastries.",
        address: "852 Brew St, Coffee Town, CT 89012",
        type: "Café",
        price: 5,
        rating: 4.5,
        website: "https://coffeecorner.com",
        imageUrl: "https://images.unsplash.com/photo-1500898335608-a4b6696f81a5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["☕ Café", "🍳 Breakfast"],
        longitude: -123.464,
        latitude: 45.686
    },
    {
        name: "Seafood Shack",
        description: "Fresh seafood dishes with a view.",
        address: "246 Ocean Dr, Beach City, BC 90123",
        type: "Restaurant",
        price: 35,
        rating: 4.6,
        website: "https://seafoodshack.com",
        imageUrl: "https://images.unsplash.com/photo-1694685367640-05d6624e57f1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🐟 Seafood", "🌊 Ocean"],
        longitude: -123.465,
        latitude: 45.687
    }
];
