'use client'

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as ReablocksThemeProvider, theme } from 'reablocks';

const queryClient = new QueryClient();

export default function Providers({ children, ...props }: ThemeProviderProps) {
    return <QueryClientProvider client={queryClient}><NextThemesProvider {...props}>
        <ReablocksThemeProvider theme={theme}>
            {children}
        </ReablocksThemeProvider>
    </NextThemesProvider></QueryClientProvider >
}
