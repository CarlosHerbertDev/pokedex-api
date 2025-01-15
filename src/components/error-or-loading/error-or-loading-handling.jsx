import { Container } from "../../style/listis-styled/list-pokemons"
import { SectionMessage, TextMessage } from "../../style/styled-error-or-loanding/styled-error-or-loading"

export const ErrorOrLoadingHandling = ({children}) => {

    return (
            <Container>
                <SectionMessage>
                    <TextMessage>
                        {children}
                    </TextMessage>
                </SectionMessage>
            </Container>
    )
    
}