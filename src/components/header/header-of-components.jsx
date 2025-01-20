import { ButtonDarkLight, HeaderContainer, HeaderlistPokemons, ImagePokebola, Logo, TitleLogo } from "./styles"
import { LinkHome } from "../../style/reusablestyles"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"




export const HeaderOfComponents = () => {
    const {tooglerTheme, setTogglerTheme} = useContext(ThemeContext)

    return (
                <HeaderlistPokemons>
                    <HeaderContainer>
                        <Logo onClick={() => {window.scrollTo(100, 0)}}>
                            <TitleLogo>
                                <LinkHome>
                                    Pokédex API
                                </LinkHome>
                            </TitleLogo>
                            <ImagePokebola />
                        </Logo>
                        <ButtonDarkLight onClick={() => {setTogglerTheme(tooglerTheme === 'light' ? 'dark' : 'light' )}}/>
                    </HeaderContainer>
                </HeaderlistPokemons>
    )
}
