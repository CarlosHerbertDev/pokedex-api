
import { ContainerFilter, DescriptionApresentation, DropdownButton, DropdownContainer, DropdownItem, DropdownList, TextApresentation, TitleFiltro } from "./styles"
import { LinkHome } from "../../style/reusablestyles"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useState } from "react"


export const DescriptionProject = ({ dinamicSelect, filteringPokemons }) => {

  const { tooglerTheme } = useContext(ThemeContext)
  const [select, setSelect] = useState('')
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (value) => {
    filteringPokemons(value);
    setSelect(value);
    setDropdownOpen(false);
  };

  useEffect(() => {

    const savedSelect = sessionStorage.getItem("selectPokemons");
    if (savedSelect) {
      try {

        setSelect(savedSelect)

      } catch (error) {
        console.error("Erro ao parsear o conteúdo dos select para o SessionStorage", error);
      }
    }

  }, []);

  useEffect(() => {

    sessionStorage.setItem("selectPokemons", select)

  }, [select])

  return (
    <>
      <TextApresentation>
        <LinkHome>
          Bem vindo ao Pokédex API !
        </LinkHome>
      </TextApresentation>
      <DescriptionApresentation theme={tooglerTheme}>
        A Pokédex API é uma aplicação que exibe informações detalhadas sobre os pokémons a partir da Poké API. Inicialmente, são apresentados 10 pokémons na lista. Ao clicar em "ver mais", novos pokémons serão carregados em blocos de 10. Cada pokémon possui uma página interna com detalhes adicionais, que podem ser acessados ao clicar no card correspondente.
      </DescriptionApresentation>
      <ContainerFilter>
        <TitleFiltro>Filtrar</TitleFiltro>

        <DropdownContainer>
          <DropdownButton onClick={() => setDropdownOpen(!isDropdownOpen)} theme={tooglerTheme} data-testid ='test-select'>
            {select || 'todos'}
          </DropdownButton>
          {isDropdownOpen && (

            <DropdownList theme={tooglerTheme}  data-testid ='test-options'>
              <DropdownItem onClick={() => handleChange('todos')} theme={tooglerTheme} >todos</DropdownItem>
              {dinamicSelect.map((item, index) => (
                <DropdownItem key={index} onClick={() => handleChange(item)} theme={tooglerTheme}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </DropdownContainer>
      </ContainerFilter>
    </>
  )

}