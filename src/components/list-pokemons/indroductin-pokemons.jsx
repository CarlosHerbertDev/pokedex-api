import { Link } from "react-router-dom";
import { DescriptionApresentation, ImagePokemon, LinkHome, LiPokemons, NamePokemon, TextApresentation, UlListPokemons } from "../../style/listis-styled/introduction-styled";

export const IntroductinPpokemons = ({ list }) => {

    return (
        <>
        <TextApresentation> 
            <LinkHome>
                Bem vindo ao Pokédex API!
            </LinkHome>
        </TextApresentation>
        <DescriptionApresentation>
            A Pokédex API é uma aplicação que exibe informações detalhadas sobre os pokémons a partir da Poké API. Inicialmente, são apresentados 10 pokémons na lista. Ao clicar em "ver mais", novos pokémons serão carregados em blocos de 10. Cada pokémon possui uma página interna com detalhes adicionais, que podem ser acessados ao clicar no card correspondente.
        </DescriptionApresentation>
        <UlListPokemons>
            {list.map((pokemon, index) => (
                <LiPokemons key={index}>
                    <Link to={`/details/${pokemon.name}`}>
                        {pokemon.image ? (
                            <ImagePokemon src={pokemon.image} alt={pokemon.name} />
                        ) : (
                            "Sem imagem"
                        )}
                        <NamePokemon>{pokemon.name}</NamePokemon>
                    </Link>
                </LiPokemons>
            ))}
        </UlListPokemons>       

        </>    
    );
};
