import React from 'react'
import {useTheme, useThemeUpdate } from './context/ThemeContext'

function ThemeContextToggle() {

    const theme = useTheme();
    const toogleTheme = useThemeUpdate();

    //styles 
    const darkTheme = {
        backgroundColor: theme ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 50%)',
        color: theme ? 'hsl(0, 0%, 50%)' : 'hsl(0, 0%, 0%)',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toogleTheme}>Change Theme</button>
            <div style={darkTheme}>Function Data</div>
        </>
    )
}

export default ThemeContextToggle;