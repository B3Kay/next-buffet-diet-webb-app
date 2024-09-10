
import ClientHome from './components/ClientHome';

import { getUser, isUserAuthenticated } from '../actions/auth';

import { getRestaurants } from '@/services/restaurantsService';

export default async function Home() {
  const user = await getUser();
  const isAuthenticated = await isUserAuthenticated();
  // Todo: this should be static
  const restaurants = await getRestaurants();

  return <ClientHome user={user} isAuthenticated={isAuthenticated} restaurants={restaurants} />;
}
