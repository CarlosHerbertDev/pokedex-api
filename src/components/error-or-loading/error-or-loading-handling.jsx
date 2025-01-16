import { Container } from "../../style/reusablestyles"
import { SectionMessage, TextMessage } from "./styles"

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