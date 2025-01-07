import { useEffect, useState } from "react"
import { Button } from "./button"

const ButtonNextList = ({children, addNewList, nextListPokemons, getPokemonDetatils }) => {
    
    const [nextList, setNextList] = useState(10) 
    const [pokemons, setPokemons] = useState({
           pokemons: []
    })


      useEffect(() => {
        const fetchData = async () => {

            try {
                const newList = await nextListPokemons(nextList)
                const newListDetails = await getPokemonDetatils(newList)

                setPokemons({
                    pokemons: newListDetails,
                 });            
            }   catch (error) {
                    console.error('Erro em carregar mais', error);
                    
            }
    
        };

            fetchData();

        }, [nextList]);


        function callingNewList() {
            
            setNextList (nextList + 10)           
            addNewList(pokemons.pokemons)
     
        }
 
         return (
            <Button onClick = {() => {callingNewList ()}}  disabled={nextList > 1302}>
                {children}
            </Button>
        )
    
}

export { ButtonNextList }