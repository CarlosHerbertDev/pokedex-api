import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetails, getDetailsAbilities } from "../../services/services";
import { ErrorOrLoadingHandling } from "../error-or-loading/error-or-loading-handling";
import { HeaderOfComponents } from "../header/header-of-components";
import { BackOfList, ConatainerDetails, ContainerGrid, ImagePokemonDetails, Moves, NamePokemonDetails, SectionDetails, TypeAndAbilities, LayoutContainer } from "./styles";


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
        return (
            <ErrorOrLoadingHandling>
                Carregando...
            </ErrorOrLoadingHandling>
        )
    }

    if (error) {
        return (
            <ErrorOrLoadingHandling>
                {error}
            </ErrorOrLoadingHandling>
        )
    }
        
            
    return (
        <LayoutContainer>
            <HeaderOfComponents />  
                <Link to='/'><BackOfList> Voltar </BackOfList></Link>
                    <SectionDetails id="home">
                        <ConatainerDetails>
                            <NamePokemonDetails>
                                {details.name} 
                            </NamePokemonDetails>
                            <ContainerGrid>
                {details.sprites && details.sprites.other.dream_world.front_default ? (
                <ImagePokemonDetails src={details.sprites.other.dream_world.front_default} alt={details.name} />
                // <img src={details.sprites.other.dream_world.front_default} alt={details.name} />

                ) :
                (
                    <p> Carregando imagem...</p>
                )}

                <TypeAndAbilities>

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
                </TypeAndAbilities>


                
                {Array.isArray(details.moves) ? (
                    
                <Moves>
                    {details.moves.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.move.name}
                            </li>
                        )
                    })}

                </Moves>

                ) : (
                    <p> Carregando moves...</p>
                )}
                        

                            
                            </ContainerGrid>       
                        </ConatainerDetails>
                    </SectionDetails>
        </LayoutContainer>
    )
    
}
    export { ListDetailsPokemons };
