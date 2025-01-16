import styled from "styled-components";
import { SectionListPokemons} from "../list-pokemons/styles";
import { ButtonStyle, Container } from "../../style/reusablestyles"

export const LayoutContainer = styled(Container) `
    height: 100vh;
`

export const SectionDetails = styled(SectionListPokemons)`
    @media (max-width: 620px) {
        padding: 0px;
    }
`
export const ConatainerDetails = styled.div `
    max-width: 800px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    margin-top: 70px;

`

export const BackOfList = styled(ButtonStyle) `
    margin: 90px 10px 0px;

    &:hover {
        padding: 15px;
        transform: translateY(-4px);
        transition: 0.1s ease-in-out;
`

export const NamePokemonDetails = styled.h2 `
    color: #2C3052;
    font-size: 1.8rem;
    text-transform: capitalize;
`
export const ContainerGrid = styled.div `
    display: grid;
    grid-template-areas:
    "image details"
    "moves moves" ;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`
export const ImagePokemonDetails = styled.img `
    grid-area: image;   
    border: 1px solid black;
`
export const TypeAndAbilities = styled.div `
    border: 1px solid black;
    grid-area: details;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Moves = styled.div `
    grid-area: moves;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    flex-wrap: wrap;
    gap: 10px;
`