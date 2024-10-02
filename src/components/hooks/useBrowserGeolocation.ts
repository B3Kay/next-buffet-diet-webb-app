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
            setCoordinates({ latitude, longitude });
        };


        const handleError = (error: GeolocationPositionError) => {
            setError(error.message);
        };


        const geoWatchId = navigator.geolocation.watchPosition(handleSuccess, handleError);

        // Cleanup the watcher when the component unmounts
        return () => {
            navigator.geolocation.clearWatch(geoWatchId);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return { coordinates, error };
};

