"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggletheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // Update the Theme
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    // Toggle the Theme
    const toggletheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    // Initialize the Theme
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setThemeState(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMounted(true);
    },[]);

    // Prevent Flash of Wrong Theme

    if(!mounted){
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggletheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Use Custom Hook to use the ThemeContext
export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === undefined){
        throw new Error("useTheme must be used within a Theme Provider");
    }

    return context;
}