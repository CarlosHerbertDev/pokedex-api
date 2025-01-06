import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

// Função para pegar os detalhes do Pokémon
async function getDetails(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return response.data
}

const ListDetailsPokemons = () => {
    // Inicializando o estado vazio
    const [details, setPokeDetails] = useState({})

    // Pegando o ID do Pokémon da URL
    const { id } = useParams()
    console.log(id)
    
    useEffect(() => {
        // Função para buscar os dados do Pokémon
        async function fetchData() {
            const pokeDetails = await getDetails(id)

            // Atualizando o estado com os dados do Pokémon diretamente
            setPokeDetails(pokeDetails)
            
            console.log(pokeDetails)  // Exibe os detalhes no console para verificar
        }

        fetchData()
    }, [id])  // O useEffect será acionado sempre que o 'id' mudar

    return (
        <section>
            <Link to='/'>Voltar</Link>

            <div>
                {/* Verificando se os dados estão disponíveis antes de renderizar a imagem */}
                {details.sprites && details.sprites.front_default && (
                    <img 
                        src={details.sprites.front_default} 
                        alt={details.name} 
                    />
                )}
                
                <p>
                    {details.name} 
                </p>
            </div>
        </section>
    )
}

export { ListDetailsPokemons }
