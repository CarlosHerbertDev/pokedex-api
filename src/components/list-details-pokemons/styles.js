import styled from "styled-components";
import { SectionListPokemons} from "../list-pokemons/styles";
import { ButtonStyle, DisplayFlex, FlexUL } from "../../style/reusablestyles"


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
    border: 1px solid #2C3052;
    border-radius: 10px;
    background-color: #2C3052;
    color: rgb(238 242 255);
    margin: 40px 0px 40px;  
`

export const BackOfList = styled(ButtonStyle) `
    margin: 90px 10px 0px;

    &:hover {
        padding: 15px;
        transform: translateY(-4px);
        transition: 0.1s ease-in-out;
`

export const NamePokemonDetails = styled.h2 `
    font-size: 1.8rem;
    text-transform: capitalize;
    margin: 10px 0px 20px;
`
export const ContainerGrid = styled.div `
    display: grid;
    grid-template-areas:
    "image details"
    "moves moves" ;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`

export const ContainerImagePokemon = styled(DisplayFlex) `
    grid-area: image;  

`
export const ImagePokemonDetails = styled.img `
    max-width: 300px;
    max-height: 300px 
`
export const TypeAndAbilities = styled(DisplayFlex) `
    position: relative;
    height: 330px;
    width: 400px;
    border: 1px solid rgb(238 242 255);
    grid-area: details;
    flex-direction: column;
    padding: 20px;
    gap: 0px;
    border-radius: 10px;
    background-color: rgb(238 242 255); 
    color: #2C3052;
    overflow: auto;

     &::-webkit-scrollbar {
        border-radius: 10px;
        width: 10px;
        background-color: rgb(238 242 255);
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2C3052;
        border-radius: 10px;
    }
`

export const ContainerTypesAbilities = styled(DisplayFlex) ` 
    flex-direction: column;
    position: absolute;
    top:0;
    max-width: 800px;
` 
export const Types = styled(FlexUL) `
    gap:20px;
    margin-top: 10px;
`

export const ContinerAbilities = styled(DisplayFlex) `
    flex-direction: column;
     text-align: center;
     margin-top: 40px;
     gap: 10px;
    
`

export const AbilitiesDetails = styled(DisplayFlex) `
    gap: 20px;  
    flex-direction: row;
    flex-wrap: wrap;
`

export const TitleAbilities = styled.h3 ` 
    font-size: 1.2rem;
    text-transform: capitalize;
`

export const TextBlock  = styled.p `
    font-size: 1rem;
    text-transform: capitalize;
`

export const FlipEffect = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: .8s;
`
export const ContainerCards = styled(DisplayFlex) `
    margin-top: 5px;
    flex-wrap: wrap;
    position: relative;
    min-height: 120px;
    width: 150px;
    padding-bottom: 25px;
    &:hover ${FlipEffect} { 
        transform: rotateY(180deg);
    }
`

export const StyleCards = styled(DisplayFlex) `
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
    border-radius: 15px;
   
`

export const CardFront = styled(StyleCards) `
    background-color: #B81;
             
`

export const CardBack = styled(StyleCards) `
    background-color: #B8191F;
    transform: rotateY(180deg);
`

export const TeextBlockMoves = styled(TextBlock) `
    padding: 3px 8px;
    color: #2C3052;
    background-color: rgb(238 242 255);
    border-top-left-radius: 5px;
    border-bottom-right-radius: 10px;
    font-weight: 700;
`

export const TitleDetails = styled.h3 `
    margin: 20px 0px 20px;
    text-transform: capitalize;
    font-size: 1.4rem;
`
export const TitleMoves = styled(TitleDetails) `
    margin-top: 15px;
`


export const LayoutMoves = styled(DisplayFlex) `

    background-color: #B8191F;
    grid-area: moves;
    flex-direction: column;
    border: 1px solid black;
    max-width: 800px;
    border-radius: 10px;
    padding-top: 15px;
    height: 250px;
    position: relative;
    overflow: auto;

    &::-webkit-scrollbar {
        border-radius: 10px;
        width: 10px;
        background-color: #B8191F;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(238 242 255);
        border-radius: 10px;
    }
`

export const ContainerMoves = styled(DisplayFlex) `
    flex-direction: column;
    top: 0;
    position: absolute;
`

export const Moves = styled(DisplayFlex) `  
    
    padding: 15px;
    flex-wrap: wrap;
    gap: 10px;
`
