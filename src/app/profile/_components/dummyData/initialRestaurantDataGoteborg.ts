import type { RestaurantBase } from "@/services/types";

// Att lägga till
// https://www.sisirestaurang.se/buffe/
// https://www.falkenberg.se/en/mat-dryck/restauranger/sisi-restaurang/

// Pong gruppen:
// https://pong.se/pong-buffe

export const InitialRestaurantGöteborgData: RestaurantBase[] = [
    {
        name: "Ching Palace",
        description:
            "En populär asiatisk bufférestaurang i centrala Göteborg som erbjuder sushi, mongolisk buffé och andra asiatiska rätter.",
        address: "Södra Hamngatan 2, 411 06 Göteborg",
        type: "BUFFET",
        price: 169,
        lunchPrice: 169,
        eveningPrice: 220,
        weekendPrice: 229,
        rating: 4.0,
        website: "https://www.chingpalace.se",
        imageUrl:
            "https://www.chingpalace.se/uploads/EgJHdoX5/697x697_640x640/Mongolisk_1.jpg", // Placeholder for actual image URL
        imageUrls: [
            "https://www.chingpalace.se/uploads/EgJHdoX5/697x697_640x640/Mongolisk_1.jpg",
            "https://www.chingpalace.se/uploads/zz1m4SVz/697x697_640x640/Asiatisk_buffe.jpg",
        ],
        longitude: 11.9707537,
        latitude: 57.7069444,
        foodBadges: ["ASIAN", "SUSHI"],
    },

    {
        name: "Roberts Coffee",
        description:
            "En populär Internationell bufférestaurang i centrala Göteborg som  gelato glass, kaffe och medelhavs buffét.",
        address: "Östra Hamngatan 18, 411 05 Göteborg, Sverige",
        type: "BUFFET",
        price: 169,
        lunchPrice: 169,
        eveningPrice: 220,
        weekendPrice: 229,
        rating: 4.3,
        website: "https://i.ibb.co/vd9DR2C/robertscaffe.png",
        imageUrl: "https://i.ibb.co/vd9DR2C/robertscaffe.png", // Placeholder for actual image URL
        longitude: 11.9672931,
        latitude: 57.7089644,
        foodBadges: ["MEDITERRANEAN"],
    },
    // Kan inte hitta buffé priser
    // {
    //     name: "Norda Brunch",
    //     description: "En prisbelönt brunch med en spännande meny som inkluderar olika salta, krispiga och vegetariska rätter.",
    //     address: "Drottningtorget 10, Centrum, Göteborg",
    //     type: "BUFFET",
    //     price: 395,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 395,
    //     rating: 4.5,
    //     website: "https://www.norda.se",
    //     imageUrl: "https://www.norda.se/images/brunch.jpg", // Placeholder for actual image URL
    //     longitude: 11.9747,
    //     latitude: 57.7055,
    //     foodBadges: ["BRUNCH"]
    // },
    {
        name: "Atrium Bar & Restaurant",
        description:
            "En stilfull bistro som erbjuder en stor brunchbuffé med allt från våfflor till miniburgare.",
        address: "Södra Hamngatan 59, Centrum, Göteborg",
        type: "BUFFET",
        price: 295,
        breakfastPrice: 225,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 365,
        rating: 4.4,
        website: "https://atriumbarrestaurant.se/en/brunch",
        imageUrl:
            "https://thatsup.website/storage/71/9873/responsive-images/_DSF8046___media_library_original_1498_998.jpg", // Placeholder for actual image URL
        longitude: 11.9755,
        latitude: 57.7062,
        foodBadges: ["BRUNCH", "BREAKFAST"],
    },
    {
        name: "Fröken Olssons Kafé",
        description: `Känt för sin maffiga frukostbuffé med nybakat surdegsbröd, färsk frukt och hembakade kakor.
        Måndag-Fredag: 10:00-18:00
Lördag-Söndag: 9:00-18:00

Frukostbuffé
Lördag-Söndag: 9:00-12:00

Soppbuffé
Måndag-Fredag: 11:00-15:00
Lördag-Söndag: 12:00-16:00

Afternoon Tea (Tillfälligt uppehåll till September)
Torsdag: 16:00-19:00
        `,
        address: "Östra Larmgatan 14, Centrum, Göteborg",
        type: "BUFFET",
        price: 199,
        lunchPrice: 0,
        eveningPrice: 169,
        weekendPrice: 169,
        rating: 4.6,
        website: "https://www.frokenolsson.se",
        imageUrl:
            "https://frokenolsson.se/wp-content/uploads/2024/02/634DDD3D-422B-4707-85D3-4D3727E31020_1_105_c.jpeg", // Placeholder for actual image URL
        longitude: 11.97188408545927,
        latitude: 57.70612263530578,
        foodBadges: ["BREAKFAST", "CAFE", "SOUP", "CHEESE"],
    },
    {
        name: "Glöd Kök & Bar",
        description:
            "Serverar välsmakande bufféer i internationell stil i en härlig miljö.",
        address: "Scandinavium, Mölndalsvägen 23, Göteborg",
        type: "BUFFET",
        price: 355,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 350,
        rating: 4.2,
        website: "https://gotevent.se/mat-dryck/glod-kok-bar/",
        imageUrl: "https://res.cloudinary.com/foodfriends/image/upload/w_2000,c_lfill,q_auto,f_auto/restaurant/7fd0172408f912fa546b7c97108de8cb.jpg",
        longitude: 11.9863,
        latitude: 57.6947,
        foodBadges: ["SWEDISH"],
    },
    {
        name: "Boulebar Brunch & Boule",
        description:
            "En färgglad och fräsch brunch med boule i en avslappnad miljö.",
        address: "Rosenlundsgatan 8, 411 20 Göteborg, Sverige",
        type: "BUFFET/Buffé",
        price: 250,
        lunchPrice: 0,
        eveningPrice: 0,
        weekendPrice: 395,
        rating: 4.1,
        website: "https://boulebar.se/",
        imageUrl: "https://images.prismic.io/boulebar-se/ZzxehK8jQArT1BIE_Boulebar-brunch-084copy.webp?auto=format%2Ccompress&rect=47%2C0%2C4953%2C6602&w=700&h=933&dpr=1", // Placeholder for actual image URL
        longitude: 11.9582899,
        latitude: 57.7011964,
        foodBadges: ["BRUNCH"],
    },
    {
        name: "Me & the Goat",
        description:
            "Me and the Goat’s painted and summery facade, colourful décor, and freshly baked pastries all combine to give the café a picturesque and cosy vibe. The fact that Me and the Goat is also adjacent to the green oasis Växtverket, is something that further increases the cosy factor and contributes to the homely and inviting atmosphere that the café radiates.",
        address: "Karl Johansgatan 95, Majorna, Göteborg",
        type: "BUFFET",
        price: 199,
        breakfastPrice: 139,
        lunchPrice: 139,
        eveningPrice: 0,
        weekendPrice: 199,
        rating: 4.3,
        website: "http://meandthegoat.se/",
        imageUrl: "https://instagram.fktw4-1.fna.fbcdn.net/v/t39.30808-6/469421592_18041160518225971_4690794451100221345_n.jpg?stp=dst-jpg_e35_p480x480_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fktw4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=dB29v4ocb1sQ7kNvgFn6yfw&_nc_gid=c211a09ea39e4b4f86cbd09edcc75a74&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzM3MjgyMzg3NDQ0OTk0MzQwNA%3D%3D.3-ccb7-5&oh=00_AYDC4AFqXl3TWGIfU3wmCjy8YMgqkMjTX_WkSVD_rlSDjQ&oe=678C59B5&_nc_sid=22de04", // Placeholder for actual image URL
        longitude: 11.9423,
        latitude: 57.6865,
        foodBadges: ["VEGETARIAN", "CAFFE", "SOUP", "BREAKFAST"],
    },
    // Endast salladsbuffé
    // {
    //     name: "Kalle Glader",
    //     description:
    //         "Klassisk brunch i bistromiljö med amerikanska pannkakor och mackor.",
    //     address: "Friggagatan 14b, Centrum, Göteborg",
    //     type: "BUFFET/Buffé",
    //     price: 250,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 250,
    //     rating: 4.2,
    //     website: "http://kalleglader.se/",
    //     imageUrl: "http://kalleglader.se/images/buffe.jpg", // Placeholder for actual image URL
    //     longitude: 11.9738,
    //     latitude: 57.7048,
    //     foodBadges: ["BRUNCH", "SALLAD"],
    // },
    //  Också alla carte
    // {
    //     name: "Skeppet Gbg",
    //     description:
    //         "Mellanöstern-inspirerad buffé med bröd, sallader och dagens varmrätt.",
    //     address: "Amerikagatan 2, Göteborg",
    //     type: "BUFFET",
    //     price: 299,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 299,
    //     rating: 4.5,
    //     website: "http://skeppetgbg.se/",
    //     imageUrl: "http://skeppetgbg.se/images/buffe.jpg", // Placeholder for actual image URL
    //     longitude: 11.9673,
    //     latitude: 57.7061,
    //     foodBadges: ["MIDDLEEAST"],
    // },
    // {
    //     name: "Sjöbaren",
    //     description:
    //         "En klassisk restaurang i Göteborg som erbjuder en fantastisk skaldjursbuffé och en trevlig uteservering.",
    //     address: "Södra Hamngatan 8, 411 14 Göteborg",
    //     type: "BUFFET",
    //     price: 395,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 395,
    //     rating: 4.6,
    //     website: "https://www.sjobaren.se",
    //     imageUrl: "https://www.sjobaren.se/images/restaurant.jpg", // Placeholder for actual image URL
    //     longitude: 11.9747,
    //     latitude: 57.7055,
    //     foodBadges: ["SEAFOOD", "SWEDISH"],
    // },
    // {
    //     name: "Pivo",
    //     description:
    //         "En populär restaurang känd för sina goda rätter och stora ölutbud. Erbjuder en välsmakande buffé.",
    //     address: "Vasagatan 24, 411 37 Göteborg",
    //     type: "BUFFET",
    //     price: 299,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 299,
    //     rating: 4.4,
    //     website: "https://www.pivo.se",
    //     imageUrl: "https://www.pivo.se/images/restaurant.jpg", // Placeholder for actual image URL
    //     longitude: 11.9732,
    //     latitude: 57.7111,
    //     foodBadges: ["SWEDISH"],
    // },
    // {
    //     name: "Manfreds",
    //     description:
    //         "En klassisk restaurang med en traditionell buffé och kända wienerschnitzlar.",
    //     address: "Haga Nygata 1, 413 01 Göteborg",
    //     type: "BUFFET",
    //     price: 250,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 250,
    //     rating: 4.5,
    //     website: "http://manfreds.se",
    //     imageUrl: "http://manfreds.se/images/restaurant.jpg", // Placeholder for actual image URL
    //     longitude: 11.9799,
    //     latitude: 57.6989,
    //     foodBadges: ["SWEDISH"],
    // },
    // {
    //     name: "Familjen",
    //     description:
    //         "Känd för sin hemlagade mat och en välsmakande buffé med lokala råvaror.",
    //     address: "Vegagatan 5, 413 01 Göteborg",
    //     type: "BUFFET",
    //     price: 299,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 299,
    //     rating: 4.6,
    //     website: "http://familjen.se/",
    //     imageUrl: "http://familjen.se/images/restaurant.jpg", // Placeholder for actual image URL
    //     longitude: 11.9792,
    //     latitude: 57.6986,
    //     foodBadges: ["SWEDISH"],
    // },
    // {
    //     name: "Bord27",
    //     description:
    //         "Erbjuder en säsongsbetonad buffé med fokus på kvalitetsråvaror och kreativ matlagning.",
    //     address: "Vallgatan 27, 411 16 Göteborg",
    //     type: "BUFFET",
    //     price: 350,
    //     lunchPrice: 0,
    //     eveningPrice: 0,
    //     weekendPrice: 350,
    //     rating: 4.8,
    //     website: "http://bord27.se/",
    //     imageUrl: "http://bord27.se/images/restaurant.jpg", // Placeholder for actual image URL
    //     longitude: 11.9743,
    //     latitude: 57.7065,
    //     foodBadges: ["SWEDISH"],
    // },

    {
        name: "Café Hängmattan",
        description:
            "En populär vegetariskt lunchbuffé som alltid levererar god mat.",
        address: "Karl Johansgatan 16, Majorna, Göteborg",
        type: "BUFFET",
        price: 135,
        lunchPrice: 135,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.5,
        website: "https://www.hangmattan.se",
        imageUrl: "https://i.ibb.co/890cK67/hangmattan.png",
        longitude: 11.9305722,
        latitude: 57.6978025,
        foodBadges: ["VEGETARIAN", "MIDDLEEAST"],
    },


    {
        // DONE
        name: "Hildas Restaurang",
        description: "En prisvärd lunchbuffé med bra variation av rätter.",
        address: "Johan På Gårdas gata 5A, 412 50 Göteborg, Sverige",
        type: "BUFFET",
        price: 135,
        lunchPrice: 135,
        eveningPrice: 0,
        weekendPrice: 0,
        rating: 4.3,
        website: "http://hildas.se",
        imageUrl: "https://api.hildasrestaurang.se/wp-content/uploads/2019/04/Ga%CC%8Arda_Konferens_D4A8596_210918-1-1200x1463.jpg", // Placeholder for actual image URL
        longitude: 11.9938334,
        latitude: 57.704658,
        foodBadges: ["SWEDISH"],
    },

    {
        name: "Johanssons Krog",
        description:
            "KEn krog med en buffé som erbjuder rätter från både Asien och Sverige.",
        address: "Nya Tingstadsgatan 1, 422 44 Hisings Backa, Sverige",
        type: "BUFFET",
        price: 135,
        lunchPrice: 135,
        eveningPrice: 269,
        weekendPrice: 199,
        rating: 4.1,
        website: "http://mrjohanssons.se/",
        imageUrl: "https://i.ibb.co/Bs514HP/Sk-rmbild-2025-01-14-171515.png",
        longitude: 11.9811082,
        latitude: 57.7315975,
        foodBadges: ["SWEDISH", "ASIAN"],
    },
    {
        name: "Foodie",
        description: "Asiatisk buffé med mongolisk BBQ och sushi.",
        address: "Östra Hamngatan 5, Göteborg, Sverige",
        type: "BUFFET",
        price: 169,
        lunchPrice: 169,
        eveningPrice: 239,
        weekendPrice: 189,
        rating: 4.0,
        website: "http://foodie.se/",
        imageUrl: "https://foodieneoasian.weebly.com/uploads/1/4/3/2/143215705/background-images/1835162676.jpeg",
        longitude: 11.9664218,
        latitude: 57.7092142,
        foodBadges: ["ASIAN", "MONGOLIAN"],
    },
    {
        name: "Andrum",
        description:
            "Vegetarisk buffé med ett brett urval av rätter och goda röror.",
        address: "Östra Hamngatan 19, Centrum, Göteborg",
        type: "BUFFET",
        price: 129,
        lunchPrice: 129,
        eveningPrice: 145,
        weekendPrice: 159,
        rating: 4.3,
        website: "https://www.andrumgoteborg.se/",
        imageUrl: "https://i.ibb.co/fGwzM1P/Sk-rmbild-2025-01-14-171038.png",
        longitude: 11.9670556,
        latitude: 57.7080532,
        foodBadges: ["VEGETARIAN", "MIDDLEEAST", "SOUP"],
    },
];
