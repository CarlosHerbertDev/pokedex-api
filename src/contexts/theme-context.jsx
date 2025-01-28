import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ tooglerTheme, setTogglerTheme ] = useState('')


        useEffect(() => {       
            const savedTheme = sessionStorage.getItem("tooglerTheme");
            if (savedTheme) {
                try {
                
                setTogglerTheme(savedTheme)
                
                } catch (error) {
                        console.error("Erro ao parsear o conteúdo dos select para o  SessionStorage", error);
                }
            } 
        }, []);
    
        useEffect(() => {
            
            sessionStorage.setItem("tooglerTheme", tooglerTheme)
            
        }, [tooglerTheme])










    return (
        <ThemeContext.Provider value={{tooglerTheme, setTogglerTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}