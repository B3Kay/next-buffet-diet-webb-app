'use client'
import { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTheme } from 'reablocks';


export default async function RestaurantMap({ latitude, longitude }: { latitude: number, longitude: number }) {
    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longitude,
        zoom: (latitude === 0 && longitude === 0) ? 0 : 15
    });
    const theme = useTheme();

    return (

        <div>

            <Map
                initialViewState={viewport}
                style={{ width: '100%', height: '500px' }}
                mapStyle={{
                    version: 8,
                    sources: {
                        'osm-tiles': {
                            type: 'raster',
                            tiles: [
                                'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                                'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                                'https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',

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
            // mapLib={maplibregl}
            // onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
                {!(latitude === 0 && longitude === 0) ? <Marker longitude={longitude} latitude={latitude} color="purple" /> : null}
                <NavigationControl position="top-right" />
            </Map>

        </div>
    );
}
