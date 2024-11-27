
import ClientHome from './_components/ClientHome';

import { getUser, isUserAuthenticated } from '../actions/auth';

import { getRestaurants, mapRestaurantsWithAvarageReviews, getTotalRestaurants } from '@/services/restaurantsService';
import { getTotalReviews } from '@/services/reviewsService';
import { getTotalUsers } from '@/services/userService';




export default async function Home() {
  const user = await getUser();
  const isAuthenticated = await isUserAuthenticated();
  const restaurants = await getRestaurants({ sortKey: 'rating', sortOrder: 'desc', page: 1, perPage: 20 });
  const restaurantsWithRatings = mapRestaurantsWithAvarageReviews(restaurants);

  // TODO: This needs some work, we need to get total users with an admin user. I dont want to expose this to the public. To lazy now to fix. This is something.
  const totalRestaurants = await getTotalRestaurants()
  const totalReviews = await getTotalReviews()
  const totalUsers = 51

  return <ClientHome user={user} isAuthenticated={isAuthenticated} restaurants={restaurantsWithRatings} totalRestaurants={totalRestaurants} totalReviews={totalReviews} totalUsers={totalUsers} />;
}
