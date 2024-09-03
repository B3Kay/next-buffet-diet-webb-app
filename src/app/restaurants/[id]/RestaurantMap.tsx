'use client'
import { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTheme } from 'reablocks';


export default async function RestaurantMap({ }: {}) {
    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
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
                                'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                                'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                                'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                                // 'https://b.basemaps.cartocdn.com/light_all/5/10/15.png',
                                // 'https://c.basemaps.cartocdn.com/light_all/5/10/15.png'
                                // 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',  //* OSM tile server URL
                                // 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
                                // 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
                <Marker longitude={-122.4} latitude={37.8} color="purple" />
                <NavigationControl position="top-right" />
            </Map>

        </div>
    );
}
