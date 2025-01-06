import { useEffect, useState } from "react"
import axios from "axios";   
import { ButtonNextList } from "../button/button-next-list";
import { Link } from "react-router-dom";



async function createListPokemon() {

    const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    return response.data
}

async function nextListPokemons(numberList) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${numberList}&limit=10`);
    return response.data.results
}

async function getPokemonDetatils(namePokemon) {

    const listDetails = namePokemon.map(async function (item) {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${item.name}/`
    );
        const details = response.data
        return details

})
    const deta = await Promise.all(listDetails)
    return deta

}

// console.log(nextList)


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
                                    "sem image"
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


    useEffect(() => {
    const fetchData = async () => {
        const namesPokemons = await createListPokemon()  
        console.log(namesPokemons);
              
        const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
        setPokedex({
            pokemons: detailsPokemons,
        });

        };
        fetchData();
    }, []);
    

    const addNewList = (newlist)=> {

            setPokedex({
                pokemons: pokedex.pokemons.concat(newlist)
            })
        }

        console.log(pokedex)
        

    return (
        <>  
{/* 
        {pokedex.pokemons.map((pokemon) => {

            return (

                <p>{pokemon.name} {pokemon.id}</p>
                
            );
            
        })} */}


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
