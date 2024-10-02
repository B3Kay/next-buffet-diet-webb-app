import { useState, useEffect } from 'react';

export const useBrowserGeolocation = () => {
    const [coordinates, setCoordinates] = useState<{ latitude: number | null, longitude: number | null }>({ latitude: null, longitude: null });
    const [error, setError] = useState<string | null>(null);  // Type is set to allow both string and null

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            return;
        }


        const handleSuccess = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            if (latitude >= 0 && longitude >= 0) {
                setCoordinates({ latitude, longitude });
            } else {
                setError('Geolocation is not available.')
            }
        };


        const handleError = (error: GeolocationPositionError) => {
            if (error.code === error.TIMEOUT) {
                setError('Geolocation timed out.')
            } else if (error.code === error.PERMISSION_DENIED) {
                setError('Geolocation permission denied.')
            }
            else {
                setError('Geolocation error.')
            }

        };


        const geoWatchId = navigator.geolocation.watchPosition(handleSuccess, handleError);

        // Cleanup the watcher when the component unmounts
        return () => {
            navigator.geolocation.clearWatch(geoWatchId);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return { coordinates, error };
};

