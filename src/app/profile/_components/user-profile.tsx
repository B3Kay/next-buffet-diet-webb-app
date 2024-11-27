import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type User = {
    id: string
    name: string
    email: string
    created: string
    isAdmin: boolean
}

export function UserProfile({ user }: { user: User }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User's avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-sm text-muted-foreground">Joined: {new Date(user.created).toLocaleDateString()}</p>
                    {user.isAdmin && <p className="text-sm font-medium">Admin</p>}
                    {/* <p className="text-sm font-medium">Reviews: 15</p> */}
                </div>
            </CardContent>
        </Card>
    )
}

