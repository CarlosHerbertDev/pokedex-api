import { useEffect, useState } from "react"
import axios from "axios";   
import { Button } from "../button/button";



async function createListPokemon() {

    const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    return response.data

}

async function nextListPokemons(nextList) {
    const response = await axios.get(`${nextList}`);
    return response.data.results
}





async function getPokemonDetatils(namePokemon) {

    const novo = namePokemon.map(async function (item) {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${item.name}/`
    );
        const details = response.data
        return details

})
    const deta = await Promise.all(novo)
    return deta

}


export const ListPokemons = () => {
    const [pokedex, setPokedex] = useState({
        pokemons: [],
})


    useEffect(() => {
    const fetchData = async () => {
        const namesPokemons = await createListPokemon()
        const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
        setPokedex({
            pokemons: detailsPokemons,
        });

        // const newFetchData = async () => {
    
        //     const namesPokemons = await createListPokemon()
        //     const newList = await nextListPokemons(namesPokemons.next)
        //     const newListDetails = await getPokemonDetatils(newList)
        //     return newListDetails
            
            
        // }
        
        // newFetchData()
    
    
        };
        fetchData();
    }, []);
    
    
    const ob = {
        name: 'testando'
    }


    const newFetchData = async () => {
    
        const namesPokemons = await createListPokemon()
        const newList = await nextListPokemons(namesPokemons.next)
        const newListDetails = await getPokemonDetatils(newList)
        console.log(newList);
        
        return newListDetails

        
    }



    const addNewList = (newlist)=> {
        setPokedex({
            pokemons: [...pokedex.pokemons, newlist],
        })
        console.log(pokedex)
        
    }


    return (





        <>  

        {pokedex.pokemons.map((pokemon) => {

            return (

                <p>{pokemon.name}</p>
                
            );
            
        })}

        <Button newList={addNewList} onClick = {() => 

        addNewList()

    // setPokedex({
    //     pokemons: [...pokedex.pokemons, ob],
    // })


        
        
        
        // setPokedex({
            //         pokemons: [...newListDetails],
        // })
        
        
        
    }>Carregar mais</Button>
    {console.log(pokedex)}
        </>
    )
}

// export default ListPokemons;
