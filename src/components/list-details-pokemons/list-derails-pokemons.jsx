import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getDetailsAbilities, getPokemonDetatils } from "../../services/services";
import { ErrorOrLoadingHandling } from "../error-or-loading/error-or-loading-handling";
import { HeaderOfComponents } from "../header/header-of-components";
import {
  BackOfList,
  ConatainerDetails,
  ContainerGrid,
  ImagePokemonDetails,
  Moves,
  NamePokemonDetails,
  TypeAndAbilities,
  Types,
  ContainerImagePokemon,
  ContinerAbilities,
  TitleDetails,
  AbilitiesDetails,
  TitleAbilities,
  TextBlock,
  LayoutMoves,
  TitleMoves,
  ContainerMoves,
  TeextBlockMoves,
  CardBack,
  ContainerCards,
  FlipEffect,
  CardFront,
  ContainerTypesAbilities,
  TextBlockType,
  TextLoading,
  TextLoadingAbilities,
  MiniContainerCard,
  MiniFlip,
  ContainerTitleAbilites,
  MiniCardFront,
  MiniCardBack,
  ContainerButtonBack
} from "./styles";
import { BodyPokemons, DisplayFlex, SectionPokemons } from "../../style/reusablestyles";
import { ThemeContext } from "../../contexts/theme-context";

const ListDetailsPokemons = () => {
  const { id } = useParams();
  const [details, setPokeDetails] = useState({});
  const [abilities, setAbilities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { togglerTheme } = useContext(ThemeContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const pokeDetails = await getPokemonDetatils(id);
        const detailsAbilities = await getDetailsAbilities(
          pokeDetails.abilities
        );

        const descriptionAbilities = detailsAbilities.map((item) => {
          const texts = item.flavor_text_entries.find((entry) => {
            return entry.language.name === "en";
          });

          return {
            name: item.name,
            description: texts ? texts.flavor_text : "Sem descrição",
          };
        });
        setAbilities(descriptionAbilities);
        
        
        setPokeDetails(pokeDetails);
      } catch (error) {
        setError("Erro ao carregar detalhes do Pokemon 😕");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <ErrorOrLoadingHandling>Carregando...</ErrorOrLoadingHandling>;
  }

  if (error) {
    return <ErrorOrLoadingHandling>{error}</ErrorOrLoadingHandling>;
  }

  return (
    <BodyPokemons theme={togglerTheme}>
      <HeaderOfComponents />
      <ContainerButtonBack to="/">
        <BackOfList> Voltar </BackOfList>
      </ContainerButtonBack>
      <SectionPokemons>
        <ConatainerDetails>
          <NamePokemonDetails>{details.name}</NamePokemonDetails>
          <ContainerGrid>
            <ContainerImagePokemon>
              {details.sprites &&
                details.sprites.other.dream_world.front_default ? (
                <ImagePokemonDetails
                  src={details.sprites.other.dream_world.front_default}
                  alt={details.name}
                />
              ) : (
                <DisplayFlex>
                  <TextLoading>
                   Nenhuma imagem disponível 
                  </TextLoading>
                </DisplayFlex>
              )}
            </ContainerImagePokemon>

            <TypeAndAbilities>
              <ContainerTypesAbilities>
                <TitleDetails>Type</TitleDetails>
                {Array.isArray(details.types) ? (
                  <Types>
                    {details.types.map((item, index) => {
                      return (
                        <li key={index}>
                          <TextBlockType type={item.type.name}>
                            {item.type.name}
                          </TextBlockType>
                        </li>
                      );
                    })}
                  </Types>
                ) : (
                  <DisplayFlex>
                    <TextLoading>
                    Nenhum Type disponível 
                    </TextLoading>
                  </DisplayFlex>
                )}

                {abilities.length > 0 ? (
                  <ContinerAbilities>
                    <ContainerTitleAbilites>
                      <TitleDetails>Abilities</TitleDetails>
                      <MiniContainerCard>
                        <MiniFlip>
                          <MiniCardFront />
                          <MiniCardBack />
                        </MiniFlip>
                      </MiniContainerCard>
                    </ContainerTitleAbilites>

                    <AbilitiesDetails>
                      {abilities.map((item, index) => {
                        return (
                          <ContainerCards key={index}>
                            <FlipEffect>
                              <CardFront>
                                <TitleAbilities>{item.name}</TitleAbilities>
                              </CardFront>

                              <CardBack>
                                <TextBlock>{item.description} </TextBlock>
                              </CardBack>
                            </FlipEffect>
                          </ContainerCards>
                        );
                      })}
                    </AbilitiesDetails>
                  </ContinerAbilities>
                ) : (
                  <DisplayFlex>
                    <TextLoadingAbilities>
                    Nenhuma Abilitie disponível 
                    </TextLoadingAbilities>
                  </DisplayFlex>
                )}
              </ContainerTypesAbilities>
            </TypeAndAbilities>

            {Array.isArray(details.moves) ? (
              <LayoutMoves>
                <ContainerMoves>
                  <TitleMoves>Moves</TitleMoves>
                  <Moves>
                    {details.moves.map((item, index) => {
                      return (
                        <li key={index}>
                          <TeextBlockMoves>{item.move.name}</TeextBlockMoves>
                        </li>
                      );
                    })}
                  </Moves>
                </ContainerMoves>
              </LayoutMoves>
            ) : (
              <LayoutMoves>
                <DisplayFlex>
                  <TextLoading>
                  Nenhum Move disponível 
                  </TextLoading>
                </DisplayFlex>
              </LayoutMoves>
            )}
          </ContainerGrid>
        </ConatainerDetails>
      </SectionPokemons>
    </BodyPokemons>
  );
};
export { ListDetailsPokemons };
