import { ButtonDarkLight, HeaderContainer, Logo, HeaderlistPokemons, ImagePokebola, TitleLogo } from "../../style/header-styled/header-styled"

import { LinkHome } from "../../style/listis-styled/list-pokemons"



export const HeaderOfComponents = () => {

    return (
                <HeaderlistPokemons>
                    <HeaderContainer>
                        <Logo>
                            <TitleLogo>
                                <LinkHome href="#home">
                                    Pokédex API
                                </LinkHome>
                            </TitleLogo>
                            <ImagePokebola />
                        </Logo>
                        <ButtonDarkLight />
                    </HeaderContainer>
                </HeaderlistPokemons>
    )
}
