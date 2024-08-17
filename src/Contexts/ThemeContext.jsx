import { createContext, useState } from "react";

export const ThemeCtx = createContext({
    theme: '',
    toggleTheme: () => {}
})

export default function ThemeContext ({children}) {

    const [ theme, setTheme ] = useState('dark')

    function toggleTheme () {
        setTheme(prevValue => prevValue === 'light' ? 'dark': 'light');
    }

    return <ThemeCtx.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeCtx.Provider>
}