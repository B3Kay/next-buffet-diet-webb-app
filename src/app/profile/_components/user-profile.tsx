import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UserProfile() {
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
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    <p className="text-sm text-muted-foreground">Joined: January 2023</p>
                    <p className="text-sm font-medium">Reviews: 15</p>
                </div>
            </CardContent>
        </Card>
    )
}

