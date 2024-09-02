import ClientHome from './ClientHome';
import { getUser, isUserAuthenticated } from './actions/auth';

export default async function Home() {
  const user = await getUser();
  const isAuthenticated = await isUserAuthenticated();


  return <ClientHome user={user} isAuthenticated={isAuthenticated} />;
}
