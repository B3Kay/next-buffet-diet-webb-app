'use client'

import { useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl/maplibre';
import { useTheme } from 'next-themes';
import { formatDate } from '@/lib/utils';
import { DollarSign, Heart, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { isBadBadge, isFoodStyleBadge, isGoodBadge } from '@/components/FoodBadges';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from '@radix-ui/react-icons';
import { Restaurant, RestaurantWithRatings } from '@/services/types';
import Link from 'next/link';


export type LatLong = {
    latitude: number;
    longitude: number;
}


type RestaurantMapProps = {
    restaurantMarkers: RestaurantWithRatings[];
    currentLocationMarker: LatLong;

    zoomLevel: number;
}

export default function RestaurantMap({ restaurantMarkers, currentLocationMarker, zoomLevel = 15 }: RestaurantMapProps) {
    const [popupInfo, setPopupInfo] = useState<RestaurantWithRatings | null>(null);
    const { theme } = useTheme()

    const tileTheme = theme === 'dark' ? 'dark_all' : 'light_all'


    return (

        <Map
            initialViewState={{
                latitude: currentLocationMarker.latitude,
                longitude: currentLocationMarker.longitude,
                zoom: zoomLevel
            }}
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
            {/* TODO: Currently location marker is based on search location, not on user location, this is a bugged introduced when updating to AI smart search */}
            {/* {currentLocationMarker && <BrowserMarker {...currentLocationMarker} />} */}


            {restaurantMarkers.map((restaurantMarker, index) => (
                // TODO: this marker should be a reusable component
                <Marker onClick={(e: any) => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(restaurantMarker)
                }}
                    anchor='bottom'
                    key={index} longitude={restaurantMarker.longitude} latitude={restaurantMarker.latitude} color="blue">

                    <Badge variant={restaurantMarker.id !== popupInfo?.id ? "default" : "outline"} > <DollarSign className={"mr-1 h-3 w-3 "} />{restaurantMarker.price}</Badge>


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
                    <Link href={`/restaurants/${popupInfo.id}`}>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-2xl'>{popupInfo.name}</CardTitle>
                                <CardDescription >
                                    {popupInfo.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className='flex flex-wrap gap-2'>
                                    <Badge variant={"default"} >{popupInfo.type}</Badge>
                                    {popupInfo.foodBadges.filter(isFoodStyleBadge).map(badge => <Badge variant={"default"} key={badge}>{badge}</Badge>)}
                                    {popupInfo.foodBadges.filter(isGoodBadge).map(badge => <Badge variant={"outline"} key={badge}>{badge}</Badge>)}
                                    {popupInfo.foodBadges.filter(isBadBadge).map(badge => <Badge variant={"destructive"} key={badge}>{badge}</Badge>)}
                                </div>

                            </CardContent>
                            <CardContent>
                                <div className="flex space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                        <StarIcon className="mr-1 h-3 w-3 fill-red-500 text-red-500" />
                                        {popupInfo.averageRating}
                                    </div>
                                    <div className="flex items-center">
                                        <Heart className="mr-1 h-3 w-3 text-red-primary" />
                                        {popupInfo.reviews?.length ?? 0}
                                    </div>
                                    <div className="flex items-center">
                                        <DollarSign className="mr-1 h-3 w-3  text-primary" />
                                        {popupInfo.price}
                                    </div>
                                    <div>Updated {formatDate(popupInfo.updated, true)}</div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </Popup>
            )}
            <NavigationControl position="top-right" />
        </Map>
    );
}

