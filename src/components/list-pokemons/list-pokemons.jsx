import { useContext, useEffect, useState } from "react";
import { createListPokemon, getPokemonDetatils } from "../../services/services";
import { ErrorOrLoadingHandling } from "../error-or-loading/error-or-loading-handling";
import { HeaderOfComponents } from "../header/header-of-components";
import { IntroductinPokemons } from "./indroductin-pokemons";
import { VerMais } from "./styles";
import { SectionListPokemons } from "./styles";
import { BodyPokemons } from "../../style/reusablestyles";
import { ThemeContext } from "../../contexts/theme-context";

const ListPokemons = () => {
  const [pokedex, setPokedex] = useState({ pokemons: [] });
  const [novalista, setNovalista] = useState(0);
  const [numberOfPokemons, setNumberOfPokemon] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {tooglerTheme} = useContext(ThemeContext)

  const saveToLocalStorage = (pokedexData) => {
    sessionStorage.setItem("pokedex", JSON.stringify(pokedexData));
    // sessionStorage.setItem("numberList", pokedexData);
  };

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
        const namesPokemons = await createListPokemon(novalista);
        const detailsPokemons = await getPokemonDetatils(namesPokemons.results);
        console.log(detailsPokemons);
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
  }, [novalista]);

  const handleChange = () => {
    setNovalista((prevOffset) => {
      if (pokedex.pokemons.length === 10) {
        return prevOffset + 10;
      } else {
        prevOffset = pokedex.pokemons.length - 10;
        return prevOffset + 10;
      }
      // window.scrollTo(100, 0)
    });
  };

  if (loading) {
    return <ErrorOrLoadingHandling>Carregando...</ErrorOrLoadingHandling>;
  }

  console.log(pokedex.pokemons);

  if (error) {
    return <ErrorOrLoadingHandling>{error}</ErrorOrLoadingHandling>;
  }

  return (
    <BodyPokemons theme = {tooglerTheme}>
      <HeaderOfComponents />
      <SectionListPokemons >
        <IntroductinPokemons list={pokedex.pokemons} />
        <VerMais onClick={handleChange}>
          {novalista > numberOfPokemons ? "Fim da Lista" : "Ver Mais"}
        </VerMais>
      </SectionListPokemons>
      <footer>
        <a href="https://iconscout.com/icons/pokemon" target="_blank">
          Pokémon
        </a>
        <a
          href="https://iconscout.com/pt/contributors/mcgandhi61/:assets"
          target="_blank"
        >
          Mohit Gandhi
        </a>
      </footer>
    </BodyPokemons>
  );
};

export { ListPokemons };
