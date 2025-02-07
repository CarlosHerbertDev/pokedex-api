import { ButtonDarkLight, HeaderContainer, HeaderlistPokemons, ImagePokebola, Logo, TitleLogo } from "./styles"
import { LinkHome } from "../../style/reusablestyles"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const HeaderOfComponents = () => {
    const {togglerTheme, setTogglerTheme} = useContext(ThemeContext)

    return (
                <HeaderlistPokemons>
                    <HeaderContainer>
                        <Logo data-testid="scroll-top" onClick={() => {window.scrollTo(100, 0)}}>
                            <TitleLogo>
                                <LinkHome>
                                    Pokédex API
                                </LinkHome>
                            </TitleLogo>
                            <ImagePokebola />
                        </Logo>
                        <ButtonDarkLight 
                        data-testid ='change-theme'
                        onClick={() => {setTogglerTheme(togglerTheme === 'dark' ? 'light' : 'dark' )}}
                        theme={togglerTheme}
                        />
                    </HeaderContainer>
                </HeaderlistPokemons>
    )
}
