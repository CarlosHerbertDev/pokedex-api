import { useEffect, useState } from "react";
import { createListPokemon, getPokemonDetatils } from "../../services/services";
import { ErrorOrLoadingHandling } from "../error-or-loading/error-or-loading-handling";
import { HeaderOfComponents } from "../header/header-of-components";
import { IntroductinPokemons } from "./indroductin-pokemons";
import { VerMais } from "./styles";
import { SectionListPokemons } from "../../style/reusablestyles"

const ListPokemons = () => {
    const [pokedex, setPokedex] = useState({ pokemons: [] });
    const [novalista, setNovalista] = useState(0);
    const [numberOfPokemons, setNumberOfPokemon] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const saveToLocalStorage = (pokedexData) => {
        sessionStorage.setItem("pokedex", JSON.stringify(pokedexData));
    };


    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
            
        }

        const handleScroll = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY);
          };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpeza do evento ao desmontar o componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        
        const savedPokedex = sessionStorage.getItem("pokedex");
        if (savedPokedex) {
            try {
                const parsedPokedex = JSON.parse(savedPokedex);
                setPokedex(parsedPokedex);
            } catch (error) {
                console.error("Erro ao parsear o conteúdo do localStorage", error);
            }
        }


       

       
        
    }, []); 


    useEffect(() => {

        if (pokedex.pokemons.length > 0) {
            saveToLocalStorage(pokedex); 
        }
    }, [pokedex]);

    useEffect(() => {
    
        const fetchData = async () => {
            try {
                const namesPokemons = await createListPokemon(novalista)
                const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
                console.log(detailsPokemons)
                const resumedeDetails = detailsPokemons.map((item) => {
                    return {
                        name: item.name,
                        image: item.sprites.other.dream_world.front_default
                    };
                });
                
                setPokedex((prevPokedex) => {
                    
                    const allPokemons = [...prevPokedex.pokemons, ...resumedeDetails];
                    
                    const uniquePokemons = allPokemons.filter((value, index) =>            
                        allPokemons.findIndex(pokemon => pokemon.name === value.name) === index
                );
                return { pokemons: uniquePokemons };
            });

            setNumberOfPokemon(namesPokemons.count)


            

            } catch (error) {
                setError('Erro ao carregar informações dos Pokemons 😕');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [novalista]); 

    const handleChange = () => {

        setNovalista((prevOffset) => {
            if (pokedex.pokemons.length === 10) {
                    return prevOffset + 10
            } else {
                prevOffset = pokedex.pokemons.length
                return prevOffset + 10
            }
            
        }); 
        // window.scrollTo(100, 0)
    };


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
        <>
            <HeaderOfComponents />
                <SectionListPokemons id="home"> 
                    <IntroductinPokemons list={pokedex.pokemons} />
                        <VerMais 
                        onClick={handleChange} 
                        disabled={pokedex.pokemons.length === numberOfPokemons}> 
                            Ver Mais
                        </VerMais>
                    </SectionListPokemons>
                    <footer>icone <a href="https://iconscout.com/icons/pokemon" target="_blank">Pokémon</a> feito por <a href="https://iconscout.com/pt/contributors/mcgandhi61/:assets"target="_blank">Mohit Gandhi</a></footer>
        </>
    );
};

export { ListPokemons };

