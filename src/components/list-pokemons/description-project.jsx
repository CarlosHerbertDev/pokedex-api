
import { DescriptionApresentation, TextApresentation } from "./styles"
import { LinkHome } from "../../style/reusablestyles"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"


export const DescriptionProject = ({itens, filter}) => {

    const {tooglerTheme} = useContext(ThemeContext)

    const haddleTeste = (event) => {

        filter(event.target.value);
    }


return(
        <>
            <TextApresentation> 
                <LinkHome>
                    Bem vindo ao Pokédex API!
                </LinkHome>
            </TextApresentation>
            <DescriptionApresentation theme={tooglerTheme}>
                A Pokédex API é uma aplicação que exibe informações detalhadas sobre os pokémons a partir da Poké API. Inicialmente, são apresentados 10 pokémons na lista. Ao clicar em "ver mais", novos pokémons serão carregados em blocos de 10. Cada pokémon possui uma página interna com detalhes adicionais, que podem ser acessados ao clicar no card correspondente.
            </DescriptionApresentation>
            <select id="filmes" defaultValue ='todos' name="filmes" onChange={haddleTeste}>
            <option value = 'todos'>Todos</option>
                    {itens.map((item, index) => {
                        return (
                                <option key={index} value = {item}>{item}</option>
                                )
    
                    })}
        
            </select>
        </>
)
    
}