import { Link } from "react-router-dom";
import { ImagePokemon, LiPokemons, NumberPokemon, TextApresentation, UlListPokemons } from "../../style/listis-styled/list-pokemons";

export const IntroductinPpokemons = ({ list }) => {

    return (
        <>
        <TextApresentation>Bem vindo ao Pokédex API!</TextApresentation>
        <UlListPokemons>
            {list.map((pokemon, index) => (
                <LiPokemons key={index}>
                    <Link to={`/details/${pokemon.name}`}>
                        {pokemon.image ? (
                            <ImagePokemon src={pokemon.image} alt={pokemon.name} />
                        ) : (
                            "Sem imagem"
                        )}
                        <NumberPokemon>{pokemon.name}</NumberPokemon>
                    </Link>
                </LiPokemons>
            ))}
        </UlListPokemons>       

        </>    
    );
};
