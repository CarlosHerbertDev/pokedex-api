import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderOfTheList } from "./header-of-the-list";
import { UlListPokemons } from "../../style/listis-styled/list-pokemons";

export const IntroductinPpokemons = ({ list }) => {
 
    return (
        <>
        
        
        
        
        <HeaderOfTheList />
      

        <UlListPokemons>

            {list.map((pokemon, index) => (
                <li key={index}>
                    <Link to={`/details/${pokemon.name}`}>
                        {pokemon.image ? (
                            <img src={pokemon.image} alt={pokemon.name} />
                        ) : (
                            "Sem imagem"
                        )}
                        <h2>{pokemon.name}</h2>
                    </Link>
                </li>
            ))}
        </UlListPokemons>       
        </>    
    );
};
