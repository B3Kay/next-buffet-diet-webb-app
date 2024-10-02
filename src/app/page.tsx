
import ClientHome from './components/ClientHome';

import { getUser, isUserAuthenticated } from '../actions/auth';

import { getRestaurants } from '@/services/restaurantsService';

export default async function Home() {
  const user = await getUser();
  const isAuthenticated = await isUserAuthenticated();
  const restaurants = await getRestaurants({ sortKey: 'rating', sortOrder: 'desc', page: 1, perPage: 20 });

  return <ClientHome user={user} isAuthenticated={isAuthenticated} restaurants={restaurants} />;
}
