import { SectionMessage, TextMessage } from "./styles"

export const ErrorOrLoadingHandling = ({children}) => {

    return (
           
                <SectionMessage>
                    <TextMessage>
                        {children}
                    </TextMessage>
                </SectionMessage>
    )
    
}