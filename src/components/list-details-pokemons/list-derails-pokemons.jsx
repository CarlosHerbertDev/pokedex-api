import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



async function getDetails(id) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        return response.data    
    } catch (error) {
        console.error('Houve um erro ao buscar as informações detalhadas do Pokemon 😕', error);
    }
}


async function getDetailsAbilities(link) {

    try {
        const dataAbilities = link.map(async function (abilities) {
            const response = await axios.get(abilities.ability.url);
            return response.data
        })
            return await Promise.all(dataAbilities)

    } catch (error) {
        console.error('Houve um erro ao buscar as habilidades do Pokemon 😕', error);
    }
       
}



const ListDetailsPokemons = () => {
    const { id } = useParams()
    const [details, setPokeDetails] = useState({})
    const [abilities, setAbilities] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, seError] = useState(null)

    
    useEffect(() => {

        
        async function fetchData() {
            try {
            
            const pokeDetails = await getDetails(id)
                const detailsAbilities = await getDetailsAbilities(pokeDetails.abilities)
            
            const descriptionAbilities = detailsAbilities.map((item) => {
                const texts = item.flavor_text_entries.find((entry) => {
                    return entry.language.name === 'en'
                })
                
                return {
                    name: item.name,
                    description:  texts ? texts.flavor_text : 'Sem descrição'
                }
            })
                setAbilities(descriptionAbilities)
                setPokeDetails(pokeDetails)

            } catch(error) {
                seError('Erro ao carregar as informaçãoes do Pokemon 😕')
                console.error(error)
                    
            } finally {
                setLoading(false)
            };
        }
        
        fetchData()
        
        
    }, [id]);
    
    if (loading) {
        return <p>Carregando...</p>
    }

    if (error) {
        return <p>{error}</p>
    }
        
            
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
                    <p> Carregando tipo...</p>
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
                    <p> Carregando moves...</p>
                )}

                {abilities.length > 0 ? (
                    <div>

                    {abilities.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1> {item.name}</h1>
                                <p>
                                {item.description}
                                </p>
                            </div>
                        )
                    })}

                </div>

                ) : (
                    <p> Carregando habilidades...</p>
                )}
            </div>
        </section>
    )
    
}
    export { ListDetailsPokemons }