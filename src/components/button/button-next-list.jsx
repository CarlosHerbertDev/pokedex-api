import { useEffect, useState } from "react"
import { Button } from "./button"

export const ButtonNextList = ({children, addNewList, nextListPokemons, getPokemonDetatils }) => {
    
    const [nextList, setNextList] = useState(10) 
    const [pokemons, setPokemons] = useState({
           pokemons: []
    })


      useEffect(() => {
        const fetchData = async () => {

            const newList = await nextListPokemons(nextList)
            const newListDetails = await getPokemonDetatils(newList)

            setPokemons({
                pokemons: newListDetails,
            });
    
            };

            fetchData();

        }, [nextList]);


        function callingNewList() {
            
            setNextList (nextList + 10)            
            addNewList(pokemons.pokemons)
            
        }
 

         return (
            <Button onClick = {() => {callingNewList ()}}>
                {children}
            </Button>
        )
    
}