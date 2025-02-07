import { useContext } from "react"
import { BodyPokemons } from "../../style/reusablestyles"
import { SectionMessage, TextMessage } from "./styles"
import { ThemeContext } from "../../contexts/theme-context"

export const ErrorOrLoadingHandling = ({children}) => {

    const {togglerTheme} = useContext(ThemeContext)

    return (
            <BodyPokemons theme={togglerTheme}>
                
                <SectionMessage>
                    <TextMessage data-testid ='error-or-loading'>
                        {children}
                    </TextMessage>
                </SectionMessage>
            </BodyPokemons>
    )
    
}