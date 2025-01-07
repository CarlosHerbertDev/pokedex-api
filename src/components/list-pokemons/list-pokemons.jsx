import { useEffect, useState } from "react"
import axios from "axios";   
import { ButtonNextList } from "../button/button-next-list";
import { Link } from "react-router-dom";



async function createListPokemon() {

    try {
        const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        return response.data
    } catch (error) {
        console.error('Erro ao buscar lista dos Pokemon 😕', error);
    }

    
}

async function getPokemonDetatils(namePokemon) {

    try {
        const listDetails = namePokemon.map(async function (item) {
            const response = await axios.get(item.url);
            return response.data
        })
    
            return await Promise.all(listDetails)

    } catch (error) {
        console.error('Erro ao buscar informações dos Pokemon 😕', error);
        
    }

}

async function nextListPokemons(numberList) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${numberList}&limit=10`);
        return response.data.results    
    } catch (error) {
        console.error('Erro ao carregar mais Pokemons 😕', error);   
    }
}

const IntroducinPpokemons = ({ list }) => {
    return (
        <ul>
            {list.map((list, index) => {
                return (
                    <li key={index}>
                    
                        <Link to={`/details/${list.name}`}>                
                            {list.sprites.front_default != null ? (

                            <img src={list.sprites.front_default} alt={list.name} />

                                ) : (
                                    "sem imagem"
                                )
                            }
                                <p>
                                {list.name}
                                </p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};


const ListPokemons = () => {
    const [pokedex, setPokedex] = useState({
        pokemons: [],
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
    const fetchData = async () => {


        try {
            
            const namesPokemons = await createListPokemon()  
            const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
            setPokedex({
                pokemons: detailsPokemons,
            });

        } catch (error) {
            setError('Erro ao carregar informações dos Pokemons 😕')
        } finally {
            setLoading(false)
        }
    };
        fetchData();
    }, []);
    

    const addNewList = (newlist)=> {

            setPokedex({
                pokemons: [...pokedex.pokemons, ...newlist]
            })
        }
     
        if (loading) {
            return <p>Carregando...</p>
        }
    
        if (error) {
            return <p>{error}</p>
        }
        
    return (
            <>  
                <IntroducinPpokemons list = {pokedex.pokemons} />
                    <ButtonNextList 
                    addNewList = {addNewList} 
                    nextListPokemons = {nextListPokemons}
                    getPokemonDetatils = {getPokemonDetatils}
                    >Carregar mais
                </ButtonNextList>
            </>
    )
}


export { ListPokemons }
