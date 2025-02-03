import { useContext, useEffect, useState } from "react";
import { createListPokemon, getPokemonDetatils } from "../../services/services";
import { ErrorOrLoadingHandling } from "../error-or-loading/error-or-loading-handling";
import { HeaderOfComponents } from "../header/header-of-components";
import { IntroductinPokemons } from "./indroductin-pokemons";
import { VerMais } from "./styles";
import { SectionListPokemons } from "./styles";
import { BodyPokemons } from "../../style/reusablestyles";
import { ThemeContext } from "../../contexts/theme-context";
import { DescriptionProject } from "./description-project";
import { FilterPokemons } from "./filter-pokemons";

const ListPokemons = () => {
  const [pokedex, setPokedex] = useState({ pokemons: [] });
  const [newList, setNewList] = useState(0);
  const [numberOfPokemons, setNumberOfPokemon] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dinamicSelect, setDinamicSelect] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const {tooglerTheme} = useContext(ThemeContext)


  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition && !loading) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    const savedPokedex = sessionStorage.getItem("pokedex");
    const savedFilterPokemons = sessionStorage.getItem("filterPokemons");

    if (savedPokedex) {
      try {
        const parsedPokedex = JSON.parse(savedPokedex);
        setPokedex(parsedPokedex);

      } catch (error) {
        console.error("Erro ao parsear o conteúdo dos pokemons do SessionStorage", error);
      }
    }

    if (savedFilterPokemons) {
      try {
        const parseFilterPokemons = JSON.parse(savedFilterPokemons);
        setFilteredPokemons(parseFilterPokemons)

      } catch (error) {
        console.error("Erro ao parsear o conteúdo dos pokemons filtrados do SessionStorage", error);
      }
    }



  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const namesPokemons = await createListPokemon(newList);
        const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
        const resumedeDetails = detailsPokemons.map((item) => {
          return {
            name: item.name,
            image: item.sprites.other.dream_world.front_default,
            type: item.types,
          };
        });

        setPokedex((prevPokedex) => {
          const allPokemons = [...prevPokedex.pokemons, ...resumedeDetails];          
          const uniquePokemons = allPokemons.filter(
            (value, index) =>
              allPokemons.findIndex(
                (pokemon) => pokemon.name === value.name
              ) === index
            );
            return { pokemons: uniquePokemons };
          });
          
          setNumberOfPokemon(namesPokemons.count);
        } catch (error) {
          setError("Erro ao carregar informações dos Pokemons 😕");
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }, [newList]);
    

    useEffect(() => {
      if (!pokedex.pokemons || pokedex.pokemons.length === 0) return; // 🛑 Evita erro antes de acessar `.map()`
    
      setDinamicSelect((prevdinamicSelect) => {
        const arrayOfTypes = pokedex.pokemons.map((item) => {
          const names = item.type?.map((value) => value.type.name) || []; // Evita erro se `item.type` for undefined
          return names;
        });
    
        const arrayTyoesFlatten = arrayOfTypes.flat();
        const removeDuplicates = arrayTyoesFlatten.filter(
          (value, index) => arrayTyoesFlatten.findIndex((name) => name === value) === index
        );
    
        return [...removeDuplicates];
      });
    }, [pokedex]);
    

    // useEffect(() => {
    //   if (pokedex.pokemons && pokedex.pokemons.length > 0) {
    //     sessionStorage.setItem("pokedex", JSON.stringify(pokedex));
    //   }
  
    //   setDinamicSelect((prevdinamicSelect) => {

    //     const arrayOfTypes = pokedex.pokemons.map((item) => {
    //           const names = item.type.map((value) => value.type.name )
    //           return names
    //     })  
    //     const arrayTyoesFlatten = arrayOfTypes.flat()
    //     const removeDuplicates = arrayTyoesFlatten.filter((value, index) =>
    //       arrayTyoesFlatten.findIndex((name) => name === value) === index
    //     )
  
    //     return prevdinamicSelect = [...removeDuplicates] 
    // }) 
  
    // }, [pokedex]);


    useEffect(() => {
      if (filteredPokemons.length > 0) {
        sessionStorage.setItem("filterPokemons", JSON.stringify(filteredPokemons));
      }
    }, [filteredPokemons])

  const handleChange = () => {
    setNewList((prevOffset) => {
      if (pokedex.pokemons.length === 10) {
        return prevOffset + 10;
      } else {
        prevOffset = pokedex.pokemons.length - 10;
        return prevOffset + 10;
      }
    });
  };

  if (loading) {
    return <ErrorOrLoadingHandling>Carregando...</ErrorOrLoadingHandling>;
  }

  if (error) {
    return <ErrorOrLoadingHandling>{error}</ErrorOrLoadingHandling>;
  }

  const filteringPokemons  = (value) => {

      if (value === 'todos') {
        sessionStorage.removeItem("filterPokemons")
        setFilteredPokemons((prevFilter) => {
          return prevFilter = []
      })
      } else {
    
        const filterPokemons = pokedex.pokemons.filter((item) =>{
        return item.type.find((element) => element.type.name === value)
      })

      setFilteredPokemons((prevFilter) => {
          return prevFilter = [...filterPokemons]
      })
    
      }
  }

  
  return (

    <BodyPokemons theme = {tooglerTheme}>
      <HeaderOfComponents />
      <SectionListPokemons >
      <DescriptionProject 
        dinamicSelect={dinamicSelect}
        filteringPokemons={filteringPokemons}
        />

      {filteredPokemons.length > 0 ? (

        <FilterPokemons filteredPokemons={filteredPokemons} />

      ) : (
 
        <>

        <IntroductinPokemons list={pokedex.pokemons} />
        <VerMais onClick={handleChange}>
          {newList > numberOfPokemons ? "Fim da Lista" : "Ver Mais"}
        </VerMais>

        </>
      )}
      </SectionListPokemons>
    </BodyPokemons>
  );
};

export { ListPokemons };
