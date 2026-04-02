import { getRestaurant } from '@/services/restaurantsService';
import { getUser, isUserAuthenticated } from '@/actions/auth';
import { notFound, redirect } from 'next/navigation';
import EditRestaurant from './EditRestaurant';

export default async function EditRestaurantPage({ params }: { params: { id: string } }) {
    const isLoggedIn = await isUserAuthenticated();
    if (!isLoggedIn) {
        redirect('/authentication');
    }

    const restaurant = await getRestaurant(params.id);
    if (!restaurant) {
        return notFound();
    }

    return <EditRestaurant restaurant={restaurant} />;
}
