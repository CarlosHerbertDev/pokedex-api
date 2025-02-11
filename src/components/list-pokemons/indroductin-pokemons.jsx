import { Link } from "react-router-dom";
import { ImagePokemon, LiPokemons, NamePokemon, UlListPokemons } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const IntroductinPokemons = ({ list }) => {
    

    const {togglerTheme} = useContext(ThemeContext)

    return (
        <>
        <UlListPokemons>
            {list.map((pokemon, index) => (
                <LiPokemons key={index} theme={togglerTheme}>
                    <Link to={`/${pokemon.name}`}>
                        {pokemon.image ? (
                            <ImagePokemon src={pokemon.image} alt={pokemon.name} />
                        ) : (
                            "Sem imagem"
                        )}
                        <NamePokemon theme={togglerTheme}>
                            {pokemon.name}
                        </NamePokemon>
                    </Link>
                </LiPokemons>
            ))}
        </UlListPokemons>       

        </>    
    );
};
