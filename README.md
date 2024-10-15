# The Buffet Diet - Website

The buffet diet is a website that allows you to find buffets and all you can eat places in your area.

[![The Buffet Diet - showcase](./public/showcase.png)](https://buffetdiet.com)

## Technologies Used

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![Node.JS](https://img.shields.io/badge/Node.JS-339933?style=flat&logo=node.js&logoColor=white)
![Next.JS](https://img.shields.io/badge/Next.JS-000000?style=flat&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Chadcn UI](https://img.shields.io/badge/shadcnui-000000?style=flat&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-000000?style=flat&logo=radix-ui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![pocketbase](https://img.shields.io/badge/pocketbase-B8DBE4?style=flat&logo=pocketbase&logoColor=white)

## 🔑Key Features

- 🔎 **Find Buffets**: Find All you can eat places nearby you.
- ⭐ **Community curated buffet reviews**: The buffets are reviewed and tested by the community.
- 🍔 **Opinionated Restaurant Details**: No matter what diet you follow or dietary restrictions, here you can find a all you can eat for you. View restaurant details, including reviews, ratings, and macronutrient content.

## Getting development Started

Install dependencies

```bash
npm install
```

### First, run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### To run pocketbase database locally

```bash
# To start the pocketbase server locally

./pocketbase serve 

# You might have to run if you use Ubuntu: sudo ./pocketbase serve 

#├─ REST API: http://127.0.0.1:8090/api/
#└─ Admin UI: http://127.0.0.1:8090/_/
```

### To setup pocketbase database on your machine

1. Navigate to [https://pocketbase.io/docs](Pocketbase Docs) and follow the instructions to install pocketbase on your machine.
2. Download the executable
3. Place executable in project root:
![Pocketbase executable root image example](./public/pocketBaseExecutable.png)
4. Run the executable `./pocketbase serve` in the root folder.
