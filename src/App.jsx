import { useEffect, useState } from "react"
import axios from "axios";   



async function createListPokemon() {
  
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );




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


function App() {
  const [pokedex, setPokedex] = useState({
      pokemons: [],
  })


  useEffect(() => {
    const fetchData = async () => {
      const namesPokemons = await createListPokemon()
      const detailsPokemons = await getPokemonDetatils(namesPokemons);
      const teste = [1,2,3]
      detailsPokemons.push(teste)

      


      
      const namesPokemon = await createListPokemon()
      
      
      setPokedex({
          pokemons: detailsPokemons,
      });
  };
  fetchData();
  }, []);

  // console.log(pokedex.pokemons);
  

  return (





    <>  
      
        {pokedex.pokemons.map((pokemon) => {

           return (

              <p>{pokemon.name}</p>

           );



      })}







    </>
  )
}

export default App
