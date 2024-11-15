export const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function formatTimeAgo(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString)
    const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
        return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
    } else if (monthsAgo > 0) {
        return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
    } else if (daysAgo > 0) {
        return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else if (hoursAgo > 0) {
        return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
    } else if (minutesAgo > 0) {
        return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    } else {
        return `just now`;
    }
}
