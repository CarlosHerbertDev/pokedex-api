import { Link } from "react-router-dom";
import { ImagePokemon, LiPokemons, NamePokemon, UlListPokemons } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const IntroductinPokemons = ({ list}) => {
    

    const {tooglerTheme} = useContext(ThemeContext)

    return (
        <>
        <UlListPokemons>
            {list.map((pokemon, index) => (
                <LiPokemons key={index} theme={tooglerTheme}>
                    <Link to={`/details/${pokemon.name}`}>
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
