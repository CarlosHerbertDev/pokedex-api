import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ImagePokemon, LiPokemons, NamePokemon, UlListPokemons } from "./styles"
import { Link } from "react-router-dom"


export const FilterPokemons = ({filteredPokemons}) => {

    const {tooglerTheme} = useContext(ThemeContext)

        console.log(filteredPokemons)
        
return (
    <UlListPokemons>
    {filteredPokemons.map((pokemon, index) => (
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
)

}