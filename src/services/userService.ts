import db from "@/db/db"


export const getTotalUsers = async () => {
    try {
        const users = await db.client.collection('users').getList(1, 1)

        return users.totalItems
    } catch (error) {
        console.error('Error getting total users', error)
        return 0
    }
}