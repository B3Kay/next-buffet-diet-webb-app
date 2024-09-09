'use client'

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

import { ThemeProvider as ReablocksThemeProvider, theme } from 'reablocks';



export default function Providers({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>
        <ReablocksThemeProvider theme={theme}>
            {children}
        </ReablocksThemeProvider>
    </NextThemesProvider>
}
