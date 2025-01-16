import { ButtonDarkLight, HeaderContainer, HeaderlistPokemons, ImagePokebola, Logo, TitleLogo } from "./styles"

import { LinkHome } from "../list-pokemons/styles"



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
