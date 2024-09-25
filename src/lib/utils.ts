import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Haversine formula to calculate the distance between two coordinates
export function getDistanceBetweenTwoCoordinates(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const EarthRadiusInKm = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EarthRadiusInKm * c; // Distance in km
}

export function getBoundingBox(latitude: number, longitude: number, distanceKm: number) {
  const latDegreeDistance = distanceKm / 111; // 1 degree latitude is approx 111km

  // Longitude degrees per kilometer (this depends on latitude)
  const lngDegreeDistance = distanceKm / (111 * Math.cos(latitude * Math.PI / 180));

  return {
    minLat: latitude - latDegreeDistance,
    maxLat: latitude + latDegreeDistance,
    minLng: longitude - lngDegreeDistance,
    maxLng: longitude + lngDegreeDistance
  };
}

export interface GeolocationCoords {
  latitude: number;
  longitude: number;
}

export function getGeolocation(): Promise<GeolocationCoords> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error('Failed to get geolocation:', error);
          reject(new Error('Failed to get geolocation'));
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}
