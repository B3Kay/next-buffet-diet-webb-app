"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "@tanstack/react-query";


export interface NominatimAddressJSON {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string; // Latitude as a string
    lon: string; // Longitude as a string
    category: string;
    type: string;
    place_rank: number;
    importance: number;
    addresstype: string;
    name: string; // Can be an empty string
    display_name: string;
    address: Address; // Nested address object
    boundingbox: string[]; // Array of strings representing bounding box coordinates
}


export interface Address {
    house_number: string;
    road: string;
    quarter?: string; // Optional, as it might not be present in all responses
    suburb?: string; // Optional, as it might not be present in all responses
    city: string;
    state: string; // Using 'state' for 'Lesser Poland Voivodeship'
    ISO3166_2_lvl4: string; // ISO 3166-2 Level 4 code
    postcode: string;
    country: string;
    country_code: string; // ISO country code (lowercase)
}



export function SelectAddress({
    onSelect,
}: {
    onSelect: (value: NominatimAddressJSON) => void;
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<NominatimAddressJSON | null>(null);
    const [inputValue, setInputValue] = React.useState("");

    const { data: addresses, isLoading: loading } = useQuery<NominatimAddressJSON[]>({
        queryKey: ["addresses", inputValue],
        queryFn: async () => {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    inputValue
                )}&limit=5&addressdetails=1`
            );
            const data = await response.json() as NominatimAddressJSON[];
            console.log(data)
            return data;
        },

        enabled: inputValue.length >= 2,
    });

    console.log(value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between truncate"
                >
                    {value?.display_name || "Select address"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput
                        placeholder="Search for an address..."
                        value={inputValue}
                        onValueChange={setInputValue}
                    />
                    {loading && (
                        <div className="flex items-center justify-center py-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="ml-2">Searching...</span>
                        </div>
                    )}
                    <CommandList>
                        {!loading && Boolean(addresses) && addresses?.length === 0 && (
                            <CommandEmpty>No address found.</CommandEmpty>
                        )}

                        {!loading && (
                            <CommandGroup forceMount>
                                {addresses?.map((address: NominatimAddressJSON) => (
                                    <CommandItem
                                        key={address.place_id}
                                        value={address.display_name}
                                        onSelect={(currentValue) => {
                                            onSelect(address);
                                            setValue(
                                                currentValue === value?.display_name ? null : address
                                            );
                                            setInputValue("");
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value?.display_name === address.display_name
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                        {address.display_name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
