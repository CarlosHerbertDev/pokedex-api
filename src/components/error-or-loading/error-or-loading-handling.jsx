import { Container } from "../../style/listis-styled/list-pokemons"
import { MainMessage, TextMessage } from "../../style/styled-error-or-loanding/styled-error-or-loading"

export const ErrorOrLoadingHandling = ({children}) => {

    return (
            <Container>
                <MainMessage>
                    <TextMessage>
                        {children}
                    </TextMessage>
                </MainMessage>
            </Container>
    )
    
}