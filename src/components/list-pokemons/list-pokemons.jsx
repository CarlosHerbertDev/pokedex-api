import { useEffect, useState } from "react";
import axios from "axios";   
import { Button } from "../button/button";
import { Link } from "react-router-dom";


async function createListPokemon(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar lista dos Pokemons 😕', error);
    }
}

async function getPokemonDetatils(namePokemon) {
    try {
        const listDetails = namePokemon.map(async function (item) {
            const response = await axios.get(item.url);
            return response.data;
        });

        return await Promise.all(listDetails);

    } catch (error) {
        console.error('Erro ao buscar informações dos Pokemons 😕', error);
    }
}

const IntroducinPpokemons = ({ list }) => {
    return (
        <ul>
            {list.map((pokemon, index) => (
                <li key={index}>
                    <Link to={`/details/${pokemon.name}`}>
                        {pokemon.image ? (
                            <img src={pokemon.image} alt={pokemon.name} />
                        ) : (
                            "Sem imagem"
                        )}
                        <p>{pokemon.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

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
                const resumedeDetails = detailsPokemons.map((item) => {
                    return {
                        name: item.name,
                        image: item.sprites.front_default
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
  
    console.log(numberOfPokemons)
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
            <IntroducinPpokemons list={pokedex.pokemons} />
            <Button 
            onClick={handleChange} 
            disabled={pokedex.pokemons.length === numberOfPokemons}> 
                Carregar mais
            </Button>
        </>
    );
};

export { ListPokemons };
