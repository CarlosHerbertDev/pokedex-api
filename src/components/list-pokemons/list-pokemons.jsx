import { useEffect, useState } from "react";
import axios from "axios";   
import { Button } from "../button/button";
import { Link } from "react-router-dom";

// Função para buscar a lista de Pokemons
async function createListPokemon(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar lista dos Pokemons 😕', error);
        throw error;
    }
}

// Função para buscar detalhes dos Pokemons
async function getPokemonDetatils(namePokemon) {
    try {
        const listDetails = namePokemon.map(async function (item) {
            const response = await axios.get(item.url);
            return response.data;
        });

        return await Promise.all(listDetails);  // Retorna todos os detalhes dos Pokemons
    } catch (error) {
        console.error('Erro ao buscar informações dos Pokemons 😕', error);
        throw error;
    }
}

// Componente para exibir os Pokemons na lista
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
    const [novalista, setNovalista] = useState(0);  // Controle de offset
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Função para salvar no localStorage
    const saveToLocalStorage = (pokedexData) => {
        localStorage.setItem("pokedex", JSON.stringify(pokedexData));
    };

    useEffect(() => {
        console.log(1);
        
        const savedPokedex = localStorage.getItem("pokedex");
        if (savedPokedex) {
            try {
                const parsedPokedex = JSON.parse(savedPokedex);
                setPokedex(parsedPokedex);
            } catch (e) {
                console.error("Erro ao parsear o conteúdo do localStorage", e);
            }
        }
    }, []); 

 
    useEffect(() => {
        console.log(2);
        if (pokedex.pokemons.length > 0) {
            saveToLocalStorage(pokedex); 
        }
    }, [pokedex]);

    useEffect(() => {
        console.log(3);
        const fetchData = async () => {
            try {
                setLoading(true);
                const namesPokemons = await createListPokemon(novalista);
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

            


            } catch (error) {
                setError(`Erro ao carregar informações dos Pokemons 😕, ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [novalista]); 


    // useEffect(() => {
    //      const pokenovo = pokedex.pokemons.filter((item, index, array) => array.indexOf(item) === index)
    //      console.log(pokenovo);
    //      setPokedex({
    //         pokemons: pokenovo
    //      })
         
    // }, [])

    // Função para carregar a próxima lista de Pokemons
    const handleChange = () => {

        setNovalista((prevOffset) => {
            if (pokedex.pokemons.length === 10) {
                 return prevOffset + 10
            } else {
                prevOffset = pokedex.pokemons.length
                return prevOffset + 10
            }
        
        });  // Incrementa o offset
    };

    // if (loading) {
    //     return <p>Carregando...</p>;
    // }
    
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <IntroducinPpokemons list={pokedex.pokemons} />
            <Button onClick={handleChange}> {loading ? 'carregando' : 'carregar mais'}</Button>
        </>
    );
};

export { ListPokemons };
