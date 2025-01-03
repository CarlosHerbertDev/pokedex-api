import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



async function getDetails(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return response.data

}


const ListDetailsPokemons = () => {
    const [pokeDetails, setPokeDetails] = useState({})
    
    const { id } = useParams()
    console.log(id);
    
    useEffect(() => {
        async function fetchData() {
            const pokeDetails = await getDetails(id)
            console.log(pokeDetails);
            
            setPokeDetails({
                pokeDetails
            })
        }
        
        
        
        fetchData()
        
        
    }, [id]);
    
    console.log(pokeDetails)

    return (
        <section>
           <Link to='/'>Voltar</Link>
            <div>
                {/* <img src={pokeDetails.sprites.front_default} alt={pokeDetails.name} /> */}
                <p>
                    {console.log(pokeDetails.pokeDetails.name)
                    }
                </p>
            </div>

        </section>
    )
    
}
    export { ListDetailsPokemons }