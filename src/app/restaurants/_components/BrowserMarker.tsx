'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LatLong } from './RestaurantsMap';
import { Navigation } from 'lucide-react';
import { Marker } from 'react-map-gl/maplibre';

export function BrowserMarker({ latitude, longitude }: LatLong) {


    return <Marker longitude={longitude} latitude={latitude}>
        <div className="absolute inset-0 -z-10 blur-md rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-full"></div>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Navigation className='text-red-500' />
                </TooltipTrigger>
                <TooltipContent>
                    <p>This is you...</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </Marker>
}
