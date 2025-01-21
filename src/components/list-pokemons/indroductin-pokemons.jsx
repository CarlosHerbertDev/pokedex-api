import { Link } from "react-router-dom";
import { DescriptionApresentation, ImagePokemon, LiPokemons, NamePokemon, TextApresentation, UlListPokemons } from "./styles";
import { LinkHome } from "../../style/reusablestyles"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const IntroductinPokemons = ({ list, onClick }) => {

    const {tooglerTheme} = useContext(ThemeContext)

    return (
        <>
        <TextApresentation> 
            <LinkHome>
                Bem vindo ao Pokédex API!
            </LinkHome>
        </TextApresentation>
        <DescriptionApresentation theme={tooglerTheme}>
            A Pokédex API é uma aplicação que exibe informações detalhadas sobre os pokémons a partir da Poké API. Inicialmente, são apresentados 10 pokémons na lista. Ao clicar em "ver mais", novos pokémons serão carregados em blocos de 10. Cada pokémon possui uma página interna com detalhes adicionais, que podem ser acessados ao clicar no card correspondente.
        </DescriptionApresentation>
        <UlListPokemons>
            {list.map((pokemon, index) => (
                <LiPokemons key={index} theme={tooglerTheme}>
                    <Link to={`/details/${pokemon.name}`} onClick={onClick}>
                        {pokemon.image ? (
                            <ImagePokemon src={pokemon.image} alt={pokemon.name} />
                        ) : (
                            "Sem imagem"
                        )}
                        <NamePokemon theme={tooglerTheme}>
                            {pokemon.name}
                        </NamePokemon>
                    </Link>
                </LiPokemons>
            ))}
        </UlListPokemons>       

        </>    
    );
};
