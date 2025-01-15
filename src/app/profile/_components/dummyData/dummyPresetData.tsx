"use client";
import { RestaurantBase } from "@/services/types";

export const dummyPresetData: RestaurantBase[] = [
    {
        name: "The Gourmet Kitchen",
        description: "A fine dining experience with a focus on seasonal ingredients.",
        address: "101 Market St, San Francisco, CA 94105, USA",
        type: "BUFFET",  // Type changed here
        price: 50,
        lunchPrice: 40,
        eveningPrice: 60,
        rating: 4.8,
        website: "https://gourmetkitchen.com",
        imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍝 Italian", "🌱 Vegan"],
        longitude: -122.4194,
        latitude: 37.7749
    },
    {
        name: "Burger Haven",
        description: "Home of the best burgers in town.",
        address: "123 Broadway St, New York, NY 10001, USA",
        type: "COUNTER",  // Type changed here
        price: 15,
        rating: 4.5,
        website: "https://burgerhaven.com",
        imageUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍔 American", "🍟 Fast Food"],
        longitude: -74.0060,
        latitude: 40.7128
    },
    {
        name: "Sushi World",
        description: "Authentic sushi and Japanese cuisine.",
        address: "2-5-1 Nihonbashi, Chūō City, Tokyo 103-0027, Japan",
        type: "TAKE_AWAY_BUFFET",  // Type changed here
        price: 30,
        rating: 4.7,
        website: "https://sushiworld.com",
        imageUrl: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=3390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍣 Japanese", "🐟 Seafood"],
        longitude: 139.6917,
        latitude: 35.6895
    },
    {
        name: "Pasta Paradise",
        description: "Delicious homemade pasta dishes.",
        address: "Piazza della Rotonda, 00186 Roma RM, Italy",
        type: "NO_BUFFET_MUCH_FOOD",  // Type changed here
        price: 25,
        rating: 4.6,
        website: "https://pastaparadise.com",
        imageUrl: "https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍝 Italian", "🥗 Vegetarian"],
        longitude: 12.4964,
        latitude: 41.9028
    },
    {
        name: "Taco Fiesta",
        description: "A vibrant place for tacos and Mexican cuisine.",
        address: "Plaza de la Constitución 1, 06000 Ciudad de México, Mexico",
        type: "NO_BUFFET_LITTLE_FOOD",  // Type changed here
        price: 20,
        rating: 4.4,
        website: "https://tacofiesta.com",
        imageUrl: "https://images.unsplash.com/photo-1524412529635-a258ed66c010?q=80&w=3795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🌮 Mexican", "🌶️ Spicy"],
        longitude: -99.1332,
        latitude: 19.4326
    },
    {
        name: "Vegan Delights",
        description: "Plant-based dishes that everyone will love.",
        address: "16-18 Smithfield Market, London EC1A 9PS, United Kingdom",
        type: "BUFFET",  // Type changed here
        price: 18,
        rating: 4.9,
        website: "https://vegandelights.com",
        imageUrl: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?q=80&w=3630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🌱 Vegan", "🥗 Healthy"],
        longitude: -0.1276,
        latitude: 51.5074
    },
    {
        name: "BBQ Central",
        description: "Smoky BBQ dishes and grilled favorites.",
        address: "700 W 5th St, Los Angeles, CA 90071, USA",
        type: "NO_BUFFET_MUCH_FOOD",  // Type changed here
        price: 22,
        rating: 4.3,
        website: "https://bbqcentral.com",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661310177352-f586bf23a403?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍖 BBQ", "🇺🇸 American"],
        longitude: -118.2437,
        latitude: 34.0522
    },
    {
        name: "Dessert Oasis",
        description: "Sweet treats and desserts for every occasion.",
        address: "8 Rue de la Paix, 75002 Paris, France",
        type: "TAKE_AWAY_BUFFET",  // Type changed here
        price: 10,
        rating: 4.8,
        website: "https://dessertoasis.com",
        imageUrl: "https://images.unsplash.com/photo-1458130713137-8b7237fb3648?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🍰 Desserts", "☕ Café"],
        longitude: 2.3522,
        latitude: 48.8566
    },
    {
        name: "Coffee Corner",
        description: "Your local spot for coffee and pastries.",
        address: "102-104 Bleeker St, New York, NY 10012, USA",
        type: "NO_BUFFET_LITTLE_FOOD",  // Type changed here
        price: 5,
        rating: 4.5,
        website: "https://coffeecorner.com",
        imageUrl: "https://images.unsplash.com/photo-1500898335608-a4b6696f81a5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["☕ Café", "🍳 Breakfast"],
        longitude: -73.9352,
        latitude: 40.7306
    },
    {
        name: "Seafood Shack",
        description: "Fresh seafood dishes with a view.",
        address: "1200 Alaskan Way, Seattle, WA 98101, USA",
        type: "BUFFET",  // Type changed here
        price: 35,
        rating: 4.6,
        website: "https://seafoodshack.com",
        imageUrl: "https://images.unsplash.com/photo-1694685367640-05d6624e57f1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        foodBadges: ["🐟 Seafood", "🌊 Ocean"],
        longitude: -122.3365,  // Seattle, USA
        latitude: 47.6097
    },
    {
        name: "Crêpe Corner",
        description: "Delicious sweet and savory crêpes made to order.",
        address: "15 Rue Lepic, 75018 Paris, France",
        type: "NO_BUFFET_LITTLE_FOOD",
        price: 12,
        rating: 4.7,
        website: "https://crepecorner.com",
        imageUrl: "https://images.unsplash.com/photo-1556912999-335a64ab28d6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🥞 French", "☕ Café"],
        longitude: 2.3348,
        latitude: 48.8842
    },
    {
        name: "Dragon's Wok",
        description: "Authentic Chinese cuisine served in a cozy atmosphere.",
        address: "4514 Shattuck Ave, Oakland, CA 94609, USA",
        type: "TAKE_AWAY_BUFFET",
        price: 25,
        rating: 4.4,
        website: "https://dragonswok.com",
        imageUrl: "https://images.unsplash.com/photo-1582105448368-3d5d7eecf7d0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🥡 Chinese", "🌶️ Spicy"],
        longitude: -122.2656,
        latitude: 37.8313
    },
    {
        name: "The Curry Leaf",
        description: "Traditional Indian curries and tandoori dishes.",
        address: "12 Commercial St, Birmingham B1 1RH, United Kingdom",
        type: "NO_BUFFET_MUCH_FOOD",
        price: 22,
        rating: 4.8,
        website: "https://thecurryleaf.com",
        imageUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🍛 Indian", "🌶️ Spicy"],
        longitude: -1.9016,
        latitude: 52.4775
    },
    {
        name: "Mediterranean Delights",
        description: "A mix of Greek, Turkish, and Lebanese dishes.",
        address: "23 Main St, Mykonos 84600, Greece",
        type: "BUFFET",
        price: 30,
        rating: 4.5,
        website: "https://meddelights.com",
        imageUrl: "https://images.unsplash.com/photo-1593805523174-094b5842d869?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🍢 Mediterranean", "🥗 Healthy"],
        longitude: 25.3289,
        latitude: 37.4467
    },
    {
        name: "Urban Pizza",
        description: "Hand-tossed pizzas with gourmet toppings.",
        address: "140 5th Ave, New York, NY 10011, USA",
        type: "COUNTER",
        price: 18,
        rating: 4.3,
        website: "https://urbanpizza.com",
        imageUrl: "https://images.unsplash.com/photo-1564758876813-76b1c2f91c56?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🍕 Italian", "🍅 Fresh Ingredients"],
        longitude: -73.9942,
        latitude: 40.7374
    },
    {
        name: "Bavarian Brews",
        description: "A taste of Germany with pretzels, sausages, and beer.",
        address: "47 Bayerstraße, 80335 Munich, Germany",
        type: "NO_BUFFET_MUCH_FOOD",
        price: 35,
        rating: 4.6,
        website: "https://bavarianbrews.com",
        imageUrl: "https://images.unsplash.com/photo-1603565814682-08b30d1a028d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🍺 German", "🥨 Pretzels"],
        longitude: 11.5581,
        latitude: 48.1351
    },
    {
        name: "Island Grill",
        description: "Caribbean flavors and tropical drinks.",
        address: "789 Palm Beach Rd, Nassau, Bahamas",
        type: "BUFFET",
        price: 28,
        rating: 4.5,
        website: "https://islandgrill.com",
        imageUrl: "https://images.unsplash.com/photo-1601919173011-72864afadb6b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🌴 Caribbean", "🍹 Cocktails"],
        longitude: -77.3963,
        latitude: 25.0343
    },
    {
        name: "Alpine Eats",
        description: "Swiss-style fondue and hearty alpine dishes.",
        address: "12 Alpenstrasse, 3800 Interlaken, Switzerland",
        type: "NO_BUFFET_LITTLE_FOOD",
        price: 45,
        rating: 4.7,
        website: "https://alpineeats.com",
        imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🧀 Swiss", "🏔️ Hearty Meals"],
        longitude: 7.8535,
        latitude: 46.6866
    },
    {
        name: "The Pho Spot",
        description: "Vietnamese street food and steaming bowls of pho.",
        address: "5217 Wilshire Blvd, Los Angeles, CA 90036, USA",
        type: "COUNTER",
        price: 12,
        rating: 4.4,
        website: "https://thephospot.com",
        imageUrl: "https://images.unsplash.com/photo-1522928240471-0487e21765a1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🍜 Vietnamese", "🥢 Noodles"],
        longitude: -118.3445,
        latitude: 34.0628
    },
    {
        name: "Savory Tandoor",
        description: "Wood-fired tandoori meats and bread.",
        address: "89 High St, Auckland 1010, New Zealand",
        type: "TAKE_AWAY_BUFFET",
        price: 24,
        rating: 4.8,
        website: "https://savorytandoor.com",
        imageUrl: "https://images.unsplash.com/photo-1506368083636-6defb67639f0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
        foodBadges: ["🔥 Tandoori", "🌍 Indian Fusion"],
        longitude: 174.7633,
        latitude: -36.8485
    }

];


