import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ togglerTheme, setTogglerTheme ] = useState('')
    

        useEffect(() => {       
            const savedTheme = localStorage.getItem("tooglerTheme");
            if (savedTheme) {
                try {
                
                setTogglerTheme(savedTheme)
                
                } catch (error) {
                        console.error("Erro ao parsear o conteúdo dos select para o  SessionStorage", error);
                }
            } 
        }, []);
    
        useEffect(() => {
            
            localStorage.setItem("tooglerTheme", togglerTheme)
            
        }, [togglerTheme])

    return (
        <ThemeContext.Provider value={{togglerTheme, setTogglerTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}