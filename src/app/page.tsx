
import ClientHome from './_components/ClientHome';

import { getRestaurants, mapRestaurantsWithAvarageReviews, getTotalRestaurants } from '@/services/restaurantsService';
import { getTotalReviews } from '@/services/reviewsService';



async function fetchStaticData() {
  const [totalRestaurants, totalReviews, restaurants] = await Promise.all([
    getTotalRestaurants(),
    getTotalReviews(),
    getRestaurants({ sortKey: 'rating', sortOrder: 'desc', page: 1, perPage: 20 }),
  ]);

  const restaurantsWithRatings = mapRestaurantsWithAvarageReviews(restaurants);

  // TODO: Total users data retrieval logic needs improvement (as mentioned in the original comment).
  const totalUsers = 51;

  return { totalRestaurants, totalReviews, totalUsers, restaurantsWithRatings };
}


export default async function Home() {
  const { totalRestaurants, totalReviews, totalUsers, restaurantsWithRatings } = await fetchStaticData()


  return <ClientHome restaurants={restaurantsWithRatings} totalRestaurants={totalRestaurants} totalReviews={totalReviews} totalUsers={totalUsers} />;
}
