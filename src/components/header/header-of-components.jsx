import { ButtonDarkLight, HeaderContainer, HeaderlistPokemons, ImagePokebola, Logo, TitleLogo } from "./styles"
import { LinkHome } from "../../style/reusablestyles"
import { useContext, useEffect } from "react"
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
                        <ButtonDarkLight 
                        onClick={() => {setTogglerTheme(tooglerTheme === 'dark' ? 'light' : 'dark' )}}
                        theme={tooglerTheme}
                        />
                    </HeaderContainer>
                </HeaderlistPokemons>
    )
}
