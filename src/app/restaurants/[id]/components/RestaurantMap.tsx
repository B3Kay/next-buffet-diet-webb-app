'use client'

import { useEffect, useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTheme } from 'next-themes';
import { useBrowserGeolocation } from '@/components/hooks/useBrowserGeolocation';
import { toast } from '@/hooks/use-toast';


// TODO: Add user location to map
export default function RestaurantMap({ latitude, longitude }: { latitude: number, longitude: number }) {
    const { theme } = useTheme()
    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longitude,
        zoom: (latitude === 0 && longitude === 0) ? 0 : 15
    });
    const { coordinates, error } = useBrowserGeolocation()

    if (error) {
        toast({
            variant: "destructive",
            title: "User geolocation not available",
            description: error,

        })
    }

    const tileTheme = theme === 'dark' ? 'dark_all' : 'light_all'
    return (
        <Map
            initialViewState={viewport}
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
            {coordinates.latitude && coordinates.longitude ? <Marker longitude={coordinates.longitude} latitude={coordinates.latitude} color="purple" /> : null}
            {!(latitude === 0 && longitude === 0) ? <Marker longitude={longitude} latitude={latitude} color="purple" /> : null}
            <NavigationControl position="top-right" />
        </Map>
    );
}