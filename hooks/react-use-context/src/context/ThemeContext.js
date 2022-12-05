import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();
const ThemeUpdateContext = createContext()

// custom hooks
export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }){
    const [theme, changeTheme] = useState(false);

    function toogleTheme(){
        changeTheme(oldTheme => !oldTheme)
    }

    const [ThemeMemorized, ] = useState(() => toogleTheme)

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={ThemeMemorized}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}