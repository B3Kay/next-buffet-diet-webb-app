import { getUser, isUserAuthenticated } from "@/actions/auth";
import { AddDummyData } from "./_components/add-dummy-data";
import { EditProfileForm } from "./_components/edit-profile-form";
import { RecentReviews } from "./_components/recent-reviews";
import { User, UserProfile } from "./_components/user-profile";
import { redirect } from "next/navigation";
import { getReviewsByUser } from "@/services/reviewsService";

export default async function DashboardPage() {

    const isLoggedIn = await isUserAuthenticated()
    const user: User = await getUser() as User

    if (!isLoggedIn || !user) {
        redirect('/authentication')
        return
    }

    const userReviews = await getReviewsByUser(user.id)

    return (
        <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold">User Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                    <UserProfile user={user as User} />
                    <RecentReviews reviews={userReviews} />
                    {user.isAdmin && <AddDummyData />}
                </div>

                <div>
                    <EditProfileForm user={{ name: user.name, email: user.email }} />
                </div>
            </div>
        </div>
    )
}
