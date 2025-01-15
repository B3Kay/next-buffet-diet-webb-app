import type { RestaurantBase } from "@/services/types";


// Att lägga till
// WKB Gärdet (Husmanskost, flera olika rätter varje dag)

// HEAT Asplunden (Husmanskost, flera olika rätter och en fantastisk salladsbuffe)

// Beirutfoodbynatt (Libanesisk buffe med underbara och spännande rätter)

// Legumes (Vegetarisk. Fin lasagne och orsakar en lagom matkoma)

// Pong Skrapan (Standard thai/asiatiskt med stort utbud och alltid fresh kvalitet)

// RiCora (Lite "lyxigare" asiatisk buffet med rätter man inte hittar på vanlig asiatiskt buffe)

// Bamboo Garden (Standard thai/asiatiskt men som aldrig upphör att tillfredställa)



export const initialRestaurantDataStockholm: RestaurantBase[] = [
    {
        name: "La Botanica",
        description: "En unik buffé med rätter från hela världen, belägen i Mall of Scandinavia. Buffén erbjuder ett brett utbud av internationella rätter och en omfattande dessertbuffé.",
        address: "Stjärntorget 2, 169 79 Solna",
        type: "BUFFET",
        price: 449,
        lunchPrice: 369,
        eveningPrice: 449,
        weekendPrice: 369,
        rating: 4.5,
        website: "https://www.labotanica.se",
        imageUrl: "https://content.botanica.se/wp-content/uploads/2024/02/65eaec45-869e-40a9-a7f4-38b84bb1e952_2U9A2936-scaled.jpg", // Placeholder for actual image URL
        imageUrls: [
            "https://content.botanica.se/wp-content/uploads/2024/02/65a592c67a5e8b1120d58d27_la-botanica-7017b23a-1--scaled.jpg",
            "https://content.botanica.se/wp-content/uploads/2024/02/2U9A3133-scaled.jpg",
            "https://content.botanica.se/wp-content/uploads/2024/02/2U9A3120-scaled.jpg",
            "https://content.botanica.se/wp-content/uploads/2024/02/2U9A3025-scaled.jpg",
            "https://content.botanica.se/wp-content/uploads/2024/04/DSC3260_LaBotanicaOlearys_FotografAndersES-scaled.jpg",
            "https://content.botanica.se/wp-content/uploads/2024/02/65eaec45-869e-40a9-a7f4-38b84bb1e952_2U9A2936-scaled.jpg"
        ],
        longitude: 18.0166,
        latitude: 59.3326,
        foodBadges: ["INTERNATIONAL", "VEGETARIAN", "BUFFET"]
    },
    {
        name: "Hermans",
        description: "En klassisk vegetariskt bufférestaurang på Södermalm med ekologiska råvaror och fantastisk utsikt över Stockholm.",
        address: "Fjällgatan 23, 116 28 Stockholm",
        type: "BUFFET",
        price: 280,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.7,
        website: "http://hermans.se",
        imageUrl: "https://hermans.se/wp-content/uploads/2021/05/hermans-utsikt.jpg", // Placeholder for actual image URL
        longitude: 18.0931,
        latitude: 59.3203,
        foodBadges: ["VEGETARIAN", "ECOLOGICAL", "BUFFET"]
    },
    {
        name: "Ri Cora",
        description: "Asiatisk buffé med en stor variation av sushi, grillade rätter och desserter i en gammal biograf.",
        address: "Götgatan 93, 116 62 Stockholm",
        type: "BUFFET",
        price: 299,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.2,
        website: "https://ricora.se",
        imageUrl: "https://ricora.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0735,
        latitude: 59.3163,
        foodBadges: ["ASIAN", "SUSHI", "BUFFET"]
    },
    {
        name: "Pong",
        description: "En asiatisk buffé med ett brett utbud av sushi och andra asiatiska rätter, finns på flera platser i Stockholm.",
        address: "Drottninggatan 71C, 111 36 Stockholm",
        type: "BUFFET",
        price: 299,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.3,
        website: "https://www.pong.se",
        imageUrl: "https://www.pong.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0619,
        latitude: 59.3345,
        foodBadges: ["ASIAN", "SUSHI", "BUFFET"]
    },
    {
        name: "Ethiostar",
        description: "En unik etiopisk middagsbuffé där man äter med händerna från stora fat, en upplevelse för alla sinnen.",
        address: "Rörstrandsgatan 6, 113 40 Stockholm",
        type: "BUFFET",
        price: 250,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.6,
        website: "http://ethiostar.se",
        imageUrl: "http://ethiostar.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0344,
        latitude: 59.3399,
        foodBadges: ["ETHIOPIAN", "BUFFET"]
    },
    {
        name: "Hermitage",
        description: "Vegetarisk buffé i Gamla Stan som erbjuder ekologiska råvaror och en mysig atmosfär.",
        address: "Österlånggatan 17, 111 31 Stockholm",
        type: "BUFFET",
        price: 295,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.4,
        website: "http://hermitage.se",
        imageUrl: "http://hermitage.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0677,
        latitude: 59.3255,
        foodBadges: ["VEGETARIAN", "ECOLOGICAL", "BUFFET"]
    },
    {
        name: "Légumes",
        description: "En vegetariskt bufférestaurang på Södermalm som fokuserar på säsongsbetonade råvaror.",
        address: "Folkungagatan 81, 116 22 Stockholm",
        type: "BUFFET",
        price: 250,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.3,
        website: "http://legumes.se",
        imageUrl: "http://legumes.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0708,
        latitude: 59.3201,
        foodBadges: ["VEGETARIAN", "SEASONAL", "BUFFET"]
    },
    {
        name: "Rice Asian Restaurant & Bar",
        description: "Asiatisk crossover med en buffé som inkluderar sushi och andra asiatiska rätter.",
        address: "Rörstrandsgatan 1, 113 40 Stockholm",
        type: "BUFFET",
        price: 299,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.2,
        website: "https://rice.se",
        imageUrl: "https://rice.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0344,
        latitude: 59.3399,
        foodBadges: ["ASIAN", "SUSHI", "BUFFET"]
    },
    {
        name: "Seyhmus Ekovänligt",
        description: "Fokuserar på ekologiska och hållbara rätter med en varierad buffé.",
        address: "Hantverkargatan 63, 112 21 Stockholm",
        type: "BUFFET",
        price: 250,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.1,
        website: "http://seyhmus.se",
        imageUrl: "http://seyhmus.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0217,
        latitude: 59.3306,
        foodBadges: ["ECOLOGICAL", "SUSTAINABLE", "BUFFET"]
    },
    {
        name: "Mongolian Barbeque",
        description: "En interaktiv buffé där gästerna kan välja sina egna ingredienser som sedan grillas av kockar.",
        address: "Västmannagatan 52, 113 25 Stockholm",
        type: "BUFFET",
        price: 299,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.2,
        website: "http://mongolianbarbeque.se",
        imageUrl: "http://mongolianbarbeque.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0452,
        latitude: 59.3349,
        foodBadges: ["ASIAN", "GRILL", "BUFFET"]
    },
    {
        name: "Griffins Steakhouse",
        description: "En matig brunchbuffé med ett brett utbud av kött, hamburgare, och olika äggrätter. Perfekt för köttälskare!",
        address: "Klarabergsviadukten 67, Stockholm",
        type: "BUFFET",
        price: 395,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 395,
        rating: 4.5,
        website: "https://griffinssteakhouse.se",
        imageUrl: "https://griffinssteakhouse.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0632,
        latitude: 59.3326,
        foodBadges: ["AMERICAN", "BUFFET"]
    },
    {
        name: "Bank Hotell",
        description: "Färgsprakande brunchbuffé med fräscha råvaror som tryffelsalami och exotiska frukter.",
        address: "Arsenalsgatan 6, Stockholm",
        type: "BUFFET",
        price: 450,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 450,
        rating: 4.6,
        website: "https://www.bankhotel.se/sv/restaurants/bonnies",
        imageUrl: "https://www.bankhotel.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0731,
        latitude: 59.3328,
        foodBadges: ["INTERNATIONAL", "BUFFET"]
    },
    {
        name: "Mister French",
        description: "Fisk- och skaldjursbrunch med ett stort utbud av sötsaker och brunchcocktails.",
        address: "Lilla Nygatan 5, Stockholm",
        type: "BUFFET",
        price: 495,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 495,
        rating: 4.7,
        website: "https://misterfrench.se",
        imageUrl: "https://misterfrench.se/images/restaurant.jpg", // Placeholder for actual image URL
        longitude: 18.0714,
        latitude: 59.3212,
        foodBadges: ["SEAFOOD", "BRUNCH", "BUFFET"]
    }
];
