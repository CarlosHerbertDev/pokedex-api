import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



async function getDetails(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return response.data

}


async function getDetailsAbilities(link) {

    const dataAbilities = link.map(async function (abilities) {

        const response = await axios.get(`${abilities.ability.url}`);
        return response.data
    })

    const data = await Promise.all(dataAbilities)
    return data
    
    
}



const ListDetailsPokemons = () => {
    const [details, setPokeDetails] = useState({})
    
    const { id } = useParams()
    console.log(id);
    
    useEffect(() => {
        async function fetchData() {
            const pokeDetails = await getDetails(id)

            const detailsAbilities = await getDetailsAbilities(pokeDetails.abilities)
           console.log(detailsAbilities);




            
            setPokeDetails(pokeDetails)
    
        }
                    
        fetchData()
                
                
    }, [id]);

    console.log(details);
    
            
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
                <p> Nome: </p>
                <p>
                    {details.name} 
                </p>

                <p> Tipo: </p>
                {Array.isArray(details.types) ? (
                <ul>
                    {details.types.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.type.name}
                            </li>
                        )
                    })}

                </ul>

                ) : (
                    <p> Carregando imagem...</p>
                )}

                <p> Moves: </p>
                {Array.isArray(details.moves) ? (
                    
                <ul>
                    {details.moves.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.move.name}
                            </li>
                        )
                    })}

                </ul>

                ) : (
                    <p> Carregando imagem...</p>
                )}
            




            </div>

        </section>
    )
    
}
    export { ListDetailsPokemons }