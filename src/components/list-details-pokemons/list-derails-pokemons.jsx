import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



async function getDetails(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return response.data

}


const ListDetailsPokemons = () => {
    const [details, setPokeDetails] = useState({})
    
    const { id } = useParams()
    console.log(id);
    
    useEffect(() => {
        async function fetchData() {
            const pokeDetails = await getDetails(id)

            
            setPokeDetails(pokeDetails)

        


                    
                    
                }
                
                
                
                
                fetchData()
                
                
            }, [id]);
            


    
    

    return (
        <section>
        <Link to='/'>Voltar</Link>




            <div>
                {details.sprites && details.sprites.front_default ? (
                    <img src={details.sprites.front_default} alt={details.name} />

                ) :
                (
                    <p> Carregando imagem...</p>
                )}

                <p>
                    {details.name} 
                </p>

            </div>

        </section>
    )
    
}
    export { ListDetailsPokemons }