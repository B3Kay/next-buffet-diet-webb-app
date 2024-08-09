'use client'


import { ThemeProvider as ReablocksThemeProvider, theme } from 'reablocks';


export default function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return <ReablocksThemeProvider theme={theme}>{children}</ReablocksThemeProvider>
}