'use client'

import { useEffect, useRef, useState } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTheme } from 'next-themes';
import { GeolocationCoords } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Circle, DollarSign, Heart, MapPin, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { badOptions, foodLabelOption, foodOptions, goodOptions } from '@/components/FoodBadges';
import { Badge } from '@/components/ui/badge';
import { CircleIcon, StarIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';

type LatLong = {
    latitude: number;
    longitude: number;
}

type Mark = LatLong & {
    restaurantid: string;
    restaurantName: string;
}

type RestaurantMarkers = Array<Mark>

type RestaurantMapProps = {
    restaurantMarkers: RestaurantMarkers;
    currentMarker: LatLong;
    // userMarker?: Mark;
    zoomLevel: number;
}

// type PopupInfo = {
//     latitude: string;
//     longitude: string;
//     city: string;
//     state: string;
//     image: string;
// }
export default function RestaurantMap({ restaurantMarkers, currentMarker, zoomLevel = 15 }: RestaurantMapProps) {
    const [viewport, setViewport] = useState({
        latitude: currentMarker.latitude,
        longitude: currentMarker.longitude,
        zoom: zoomLevel
    });
    const [popupInfo, setPopupInfo] = useState<Mark | null>(null);
    const { theme } = useTheme()

    const tileTheme = theme === 'dark' ? 'dark_all' : 'light_all'


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
            {currentMarker && <Marker longitude={currentMarker.longitude} latitude={currentMarker.latitude} color="red" ><Navigation className='fill-destructive' /></Marker>}

            {/* {userLocation && <Marker longitude={userLocation.longitude} latitude={userLocation.latitude} color="blue" />} */}
            {restaurantMarkers.map((restaurantMarker, index) => (

                <Marker onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(restaurantMarker)
                }}
                    anchor='bottom'
                    key={index} longitude={restaurantMarker.longitude} latitude={restaurantMarker.latitude} color="blue">
                    {/* This could be price or rating marker */}
                    <MapPin className='cursor-pointer fill-secondary' />

                </Marker>
            ))}

            {popupInfo && (
                <Popup
                    closeButton={false}
                    anchor="top"
                    maxWidth='350px'
                    longitude={Number(popupInfo.longitude)}
                    latitude={Number(popupInfo.latitude)}
                    onClose={() => setPopupInfo(null)}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-2xl'>Alicjas Buffeteria</CardTitle>
                            <CardDescription >
                                Beautifully designed Restaurant where you can eat all you want.
                                Keto, Carnivore or body builder diet.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <div className='flex flex-wrap gap-2'>
                                {[foodOptions.options[0], goodOptions.options[1], badOptions.options[2]].map(option => <Badge variant={"outline"} key={option.value}>{option.label}</Badge>)}

                            </div>

                        </CardContent>
                        <CardContent>
                            {/* Dummy food badges */}
                            <div className="flex space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <StarIcon className="mr-1 h-3 w-3 fill-red-500 text-red-500" />
                                    4.1
                                </div>
                                <div className="flex items-center">
                                    <Heart className="mr-1 h-3 w-3 text-red-primary" />
                                    20k
                                </div>
                                <div className="flex items-center">
                                    <DollarSign className="mr-1 h-3 w-3  text-primary" />
                                    12.00
                                </div>
                                <div>Updated April 2023</div>
                            </div>
                        </CardContent>
                    </Card>
                </Popup>
            )}
            <NavigationControl position="top-right" />
        </Map>
    );
}
