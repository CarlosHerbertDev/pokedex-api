import { ButtonDarkLight, HeaderContainer, Logo, HeaderlistPokemons, ImagePokebola, TitleLogo, LinkHome } from "../../style/listis-styled/list-pokemons"


export const HeaderOfTheList = () => {

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
