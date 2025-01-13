import { useEffect, useState } from "react";
import { Button } from "../button/button";
import { IntroductinPpokemons } from "./indroductin-pokemons";
import { createListPokemon, getPokemonDetatils } from "./services"
import { MainListPokemons, VerMais } from "../../style/listis-styled/list-pokemons";
import { HeaderOfTheList } from "./header-of-the-list";

const ListPokemons = () => {
    const [pokedex, setPokedex] = useState({ pokemons: [] });
    const [novalista, setNovalista] = useState(0);
    const [numberOfPokemons, setNumberOfPokemon] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const saveToLocalStorage = (pokedexData) => {
        localStorage.setItem("pokedex", JSON.stringify(pokedexData));
    };

    useEffect(() => {
        
        const savedPokedex = localStorage.getItem("pokedex");
        if (savedPokedex) {
            try {
                const parsedPokedex = JSON.parse(savedPokedex);
                setPokedex(parsedPokedex);
            } catch (error) {
                console.error("Erro ao parsear o conteúdo do localStorage", error);
            }
        }
    }, []); 

 
    useEffect(() => {

        if (pokedex.pokemons.length > 0) {
            saveToLocalStorage(pokedex); 
        }
    }, [pokedex]);

    useEffect(() => {
    
        const fetchData = async () => {
            try {
                const namesPokemons = await createListPokemon(novalista)
                const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
                console.log(detailsPokemons)
                const resumedeDetails = detailsPokemons.map((item) => {
                    return {
                        name: item.name,
                        image: item.sprites.other.dream_world.front_default
                    };
                });
                
                setPokedex((prevPokedex) => {
                    
                    const allPokemons = [...prevPokedex.pokemons, ...resumedeDetails];
                    
                    const uniquePokemons = allPokemons.filter((value, index) =>            
                        allPokemons.findIndex(pokemon => pokemon.name === value.name) === index
                );
                return { pokemons: uniquePokemons };
            });
                      
            setNumberOfPokemon(namesPokemons.count)
                   
            } catch (error) {
                setError('Erro ao carregar informações dos Pokemons 😕');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [novalista]); 

    window.onbeforeunload = () => {
        localStorage.removeItem("pokedex");  
        return '';
    };
 
    const handleChange = () => {

        setNovalista((prevOffset) => {
            if (pokedex.pokemons.length === 10) {
                 return prevOffset + 10
            } else {
                prevOffset = pokedex.pokemons.length
                return prevOffset + 10
            }
        
        }); 
    };

    if (loading) {
        return <p>Carregando...</p>;
    }
    
    if (error) {
        return <p>{error}</p>;
    }   

    return (
        <>
            <HeaderOfTheList />
            <MainListPokemons id="home"> 
            <IntroductinPpokemons list={pokedex.pokemons} />
            <VerMais 
            onClick={handleChange} 
            disabled={pokedex.pokemons.length === numberOfPokemons}> 
                Ver Mais
            </VerMais>
            </MainListPokemons>
            <footer>icone <a href="https://iconscout.com/icons/pokemon" target="_blank">Pokémon</a> feito por <a href="https://iconscout.com/pt/contributors/mcgandhi61/:assets"target="_blank">Mohit Gandhi</a></footer>
        </>
    );
};

export { ListPokemons };
