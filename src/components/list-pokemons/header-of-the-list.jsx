import { ButtonDarkLight, Div, DivLogo, HeaderlistPokemons, TitleLogo } from "../../style/listis-styled/list-pokemons"


export const HeaderOfTheList = () => {

    return (
            <>
                <HeaderlistPokemons>
                    <Div>
                    <DivLogo>
                        <TitleLogo>
                            Pokedex API
                        </TitleLogo>
                        <img src="../../../public/vite.svg" alt="" />
                    </DivLogo>
                    <ButtonDarkLight />
                    </Div>
                </HeaderlistPokemons>
            </>
    )
}
