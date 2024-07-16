import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode:"light",
    
    // you are defining darkTheme n lighttheme as a function but you implement it on app.jsx
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}