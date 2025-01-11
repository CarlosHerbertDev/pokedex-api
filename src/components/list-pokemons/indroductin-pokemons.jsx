import { Link } from "react-router-dom";
import { ImagePokemon, LiPokemons, NumberPokemon, UlListPokemons, NewLink } from "../../style/listis-styled/list-pokemons";

export const IntroductinPpokemons = ({ list }) => {

    return (
        <>
        <UlListPokemons>
            {list.map((pokemon, index) => (
                <LiPokemons key={index}>
                    <NewLink to={`/details/${pokemon.name}`}>
                        {pokemon.image ? (
                            <ImagePokemon src={pokemon.image} alt={pokemon.name} />
                        ) : (
                            "Sem imagem"
                        )}
                        <NumberPokemon>{pokemon.name}</NumberPokemon>
                    </NewLink>
                </LiPokemons>
            ))}
        </UlListPokemons>       

        </>    
    );
};
