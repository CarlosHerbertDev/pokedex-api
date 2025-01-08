import { useEffect, useState } from "react"
import axios from "axios";   
import { ButtonNextList } from "../button/button-next-list";
import { Link } from "react-router-dom";
import { Button } from "../button/button";



async function createListPokemon(offset) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
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

    const [novalista, setNovalista] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const saveToLocalStorage = (pokedexData) => {
        localStorage.setItem("pokedex", JSON.stringify(pokedexData));
    };



    useEffect(() => {
        const savedPokedex = localStorage.getItem("pokedex");
        if (savedPokedex) {
            setPokedex(JSON.parse(savedPokedex));
        }
    }, []);


    useEffect(() => {
    const fetchData = async () => {
        
        
        try {
            
            const namesPokemons = await createListPokemon(novalista)  
            const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
            setPokedex({
                pokemons: pokedex.pokemons.concat(detailsPokemons)
            });
            
            

            // localStorage.setItem('pokedex', JSON.stringify(pokedex));

            
            
            
        } catch (error) {
            setError('Erro ao carregar informações dos Pokemons 😕')
        } finally {
            setLoading(false)
        }
    };
    fetchData();
}, [novalista]);

const hadlechange = () => {
    
    setNovalista(novalista + 10)
    
}


    const addNewList = (newlist)=> {

            setPokedex({
                pokemons: [...pokedex.pokemons, ...newlist]
            })
        }

        console.log(pokedex)
        
        if (loading) {
            return <p>Carregando...</p>
        }
    
        if (error) {
            return <p>{error}</p>
        }
        
    return (
            <>  
                <IntroducinPpokemons list = {pokedex.pokemons} />
                <Button onClick={() => hadlechange()}>
                    carregar
                </Button>



                    {/* <ButtonNextList 
                    addNewList = {addNewList} 
                    nextListPokemons = {nextListPokemons}
                    getPokemonDetatils = {getPokemonDetatils}
                    >Carregar mais
                </ButtonNextList> */}
            </>
    )
}


export { ListPokemons }
