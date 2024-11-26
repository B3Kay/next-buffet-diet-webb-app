import { AddDummyData } from "./components/add-dummy-data";
import { EditProfileForm } from "./components/edit-profile-form";
import { RecentReviews } from "./components/recent-reviews";
import { UserProfile } from "./components/user-profile";

export default function DashboardPage() {
    return (
        <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold">User Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                    <UserProfile />
                    <RecentReviews />
                    <AddDummyData />
                </div>
                <div>
                    <EditProfileForm />
                </div>
            </div>
        </div>
    )
}

