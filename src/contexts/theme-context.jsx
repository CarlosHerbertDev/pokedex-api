import { createContext, useState } from "react";


export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ tooglerTheme, setTogglerTheme ] = useState('light')

    return (
        <ThemeContext.Provider value={{tooglerTheme, setTogglerTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}