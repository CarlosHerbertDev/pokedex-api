import { useEffect, useState } from "react"


async function createListPokemon() {
  
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const pokemons = await response.json();

const p =  pokemons.results.map((item) => {
      const poke = item.name
      return poke
  })
  
  
  
  

    
}

createListPokemon()

async function getPokemonDetatils(namePokemon) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
  );

  const details = await response.json();
// console.log(details);

  return details

}


function App() {
  const [pokedex, setPokedex] = useState({
      pokemons: [],
  })


  useEffect(() => {
    const fetchData = async () => {
      // const namesPokemons = await createListPokemon()
      // console.log(namesPokemons);
      
      


      
      // const detailsPokemons = await getPokemonDetatils(namesPokemons);
      // console.log(detailsPokemons);
      // setPokedex({
      //     pokemons: detailsPokemons,
      // });

      // console.log(pokedex);
      
  };
  fetchData();
  }, []);



  return (





    <>
        <p>{}</p>
        <p>{}</p>
    </>
  )
}

export default App
