'use client'

import { useEffect, useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTheme } from 'next-themes';
import { GeolocationCoords } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

type Mark = {
    latitude: number;
    longitude: number;
    restaurantid: string;
}

type RestaurantMarkers = Array<Mark>

type RestaurantMapProps = {
    restaurantMarkers: RestaurantMarkers;
    currentMarker: Mark;
    // userMarker?: Mark;
    zoomLevel: number;
}

export default function RestaurantMap({ restaurantMarkers, currentMarker, zoomLevel = 15 }: RestaurantMapProps) {
    const [viewport, setViewport] = useState({
        latitude: currentMarker.latitude,
        longitude: currentMarker.longitude,
        zoom: zoomLevel
    });

    const { theme } = useTheme()


    // const [userLocation, setUserLocation] = useState<GeolocationCoords>({ latitude: 0, longitude: 0 });
    // const [locationError, setLocationError] = useState<string | null>(null);

    // useEffect(() => {
    //     const getLocation = () => {
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(
    //                 (position) => {
    //                     const { latitude, longitude } = position.coords;
    //                     setUserLocation({ latitude, longitude });
    //                     setViewport({
    //                         latitude: latitude,
    //                         longitude: longitude,
    //                         zoom: zoomLevel
    //                     });
    //                     console.log('update user location', latitude, longitude, zoomLevel);
    //                 },
    //                 (err) => {
    //                     setLocationError(err.message);
    //                 }
    //             );
    //         } else {
    //             setLocationError("Geolocation is not supported by this browser.");
    //         }
    //     };

    //     getLocation();
    // }, []); // Empty dependency array ensures this runs once on mount.




    const tileTheme = theme === 'dark' ? 'dark_all' : 'light_all'
    // if (userLocation.latitude === 0 && userLocation.longitude === 0) {
    //     console.log('no user location')
    //     return <Skeleton className="h-full w-full rounded-xl" />
    // }
    // if (locationError) {
    //     console.log('location error', locationError)
    //     return <div>Error loading user location: {locationError}</div>
    // }

    return (

        <Map
            initialViewState={viewport}
            // viewState={viewport}
            // {...viewport}
            style={{ width: '100%', height: '100%' }}
            mapStyle={{
                version: 8,
                sources: {
                    'osm-tiles': {
                        type: 'raster',
                        tiles: [
                            `https://a.basemaps.cartocdn.com/${tileTheme}/{z}/{x}/{y}.png`,
                            `https://b.basemaps.cartocdn.com//${tileTheme}/{z}/{x}/{y}.png`,
                            `https://c.basemaps.cartocdn.com//${tileTheme}/{z}/{x}/{y}.png`,

                        ],
                        tileSize: 256,
                    },
                },
                layers: [
                    {
                        id: 'osm-tiles-layer',
                        type: 'raster',
                        source: 'osm-tiles',
                        minzoom: 0,
                        maxzoom: 19,
                    },
                ],
            }}
        >
            {/* {!(latitude === 0 && longitude === 0) ? <Marker longitude={longitude} latitude={latitude} color="purple" /> : null} */}
            {currentMarker && <Marker longitude={currentMarker.longitude} latitude={currentMarker.latitude} color="red" />}
            {/* {userLocation && <Marker longitude={userLocation.longitude} latitude={userLocation.latitude} color="blue" />} */}
            {restaurantMarkers.map((restaurantMarker, index) => (
                <Marker key={index} longitude={restaurantMarker.longitude} latitude={restaurantMarker.latitude} color="purple" />
            ))}
            <NavigationControl position="top-right" />
        </Map>
    );
}
