

export async function getCoordinates(address: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Your App Name'
            }
        });

        const data = await response.json();

        if (data.length > 0) {
            const { lat, lon } = data[0];

            const latitude = parseFloat(lat);
            const longitude = parseFloat(lon);

            return { latitude: latitude, longitude: longitude };
        } else {
            console.log('No results found');
            return {};
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return {};
    }
}
