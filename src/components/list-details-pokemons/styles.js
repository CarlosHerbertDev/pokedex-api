import styled from "styled-components";
import { ButtonStyle, DisplayFlex, FlexUL, LinkHome } from "../../style/reusablestyles"
import { Link } from "react-router-dom";


export const TextLoading = styled (LinkHome)`
    font-size: 1.4rem;
`
export const TextLoadingAbilities = styled (TextLoading)`
    transform: translateY(80px);
`
export const TitleDetails = styled.h3 `
    margin: 20px 0px 20px;
    text-transform: capitalize;
    font-size: 1.4rem;
`  
export const TextBlock = styled.p ` 
    font-size: 1rem;
    text-transform: capitalize;
`
export const ConatainerDetails = styled.div `
    max-width: 800px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #1d2039;
    border-radius: 10px;
    background-color: #1d2039;
    color: rgb(238 242 255);
    margin: 40px 0px 40px;  
`

export const ContainerButtonBack = styled(Link) `
    display: flex;
    margin: 0 auto;
    justify-content: flex-start;
    max-width: 1440px;
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

    @media (max-width: 825px) {
        grid-template-areas:
        "image image"
        "details details"
        "moves moves" ;
        grid-template-columns: repeat( 1, 500px);
    }

    @media (max-width: 570px) {
        grid-template-columns: repeat( 1, 400px);
    }

    @media (max-width: 465px) {
        grid-template-columns: repeat( 1, 300px);
    }
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
    margin: 0 auto;
    height: 330px;
    width: 400px;
    border: 1px solid rgb(238 242 255);
    grid-area: details;
    flex-direction: column;
    padding: 20px;
    gap: 0px;
    border-radius: 10px;
    background-color: rgb(238 242 255); 
    color: #1d2039;
    overflow: auto;

    &::-webkit-scrollbar {
        border-radius: 10px;
        width: 10px;
        background-color: rgb(238 242 255);
    }

    &::-webkit-scrollbar-thumb {
        background-color: #1d2039;
        border-radius: 10px;
    }

    @media (max-width: 470px) {
        max-width: 300px;
    }
`

export const ContainerTypesAbilities = styled(DisplayFlex) ` 
    flex-direction: column;
    position: absolute;
    top:0;
    max-width: 800px;
` 
export const Types = styled(FlexUL) `
    gap:10px;
    margin-top: 10px;
`

export const ContinerAbilities = styled(DisplayFlex) `
    flex-direction: column;
    text-align: center;
    margin-top: 40px;
    gap: 10px;
    
`

export const TextBlockType = styled(TextBlock) `
    padding: 5px 20px;
    border-radius: 5px;
    font-size: 1rem;
    text-transform: capitalize;
${({type}) => {
    if (type === 'fire') {
        return `
        background-color: rgb(253, 125, 36); 
        color:rgb(238 242 255);
        `
    } else if(type === 'normal') {
        return `
        background-color:rgb(112, 112, 112);
        color:rgb(238 242 255);
        `
    } else if(type === 'flying') {
        return `
        background-color:#efac71; 
        color:rgb(238 242 255);
        `
    } else if(type === 'fighting') {
        return `
        background-color:#E34A47; 
        color:rgb(238 242 255);
        `
    } else if(type === 'poison') {
        return `
        background-color:rgb(185, 127, 201); 
        color:rgb(238 242 255);
        `
    } else if(type === 'ground') {
        return `
        background-color:#e2725b; 
        color:rgb(238 242 255);
        `
    } else if(type === 'rock') {
        return `
        background-color:#964b00; 
        color:rgb(238 242 255);
        `
    } else if(type === 'bug') {
        return `
        background-color:rgb(114, 159, 63); 
        color:rgb(238 242 255);
        `
    } else if(type === 'ghost') {
        return `
        background-color:rgb(123, 98, 163); 
        color:rgb(238 242 255);
        `
    } else if(type === 'steel') {
        return `
        background-color:rgb(164, 172, 175); 
        color:#1d2039;
        `
    } else if(type === 'grass') {
        return `
        background-color:rgb(155, 204, 80); 
        color:#1d2039;
        `
    } else if(type === 'electric') {
        return `
        background-color:rgb(238, 213, 53); 
        color:#1d2039;
        `
    } else if(type === 'psychic') {
        return `
        background-color:rgb(243, 102, 185); 
        color:rgb(238 242 255);
        `
    } else if(type === 'ice') {
        return `
        background-color:rgb(81, 196, 231); 
        color:rgb(238 242 255);
        `
    } else if(type === 'dragon') {
        return `
        background-color:#f1f17d; 
        color:#1d2039;
        `
    } else if(type === 'dark') {
        return `
        background-color:#000; 
        color:rgb(238 242 255);
        `
    } else if(type === 'fairy') {
        return `
        background-color:rgb(253, 185, 233); 
        color:#1d2039;
        `
    } else if(type === 'stellar') {
        return `
        background-color:#4b0082 ; 
        color:rgb(238 242 255);
        `
    } else if(type === 'water') {
        return `
        background-color:rgb(69, 146, 196); 
        color:rgb(238 242 255);
        `
    } else {
        return `
        background-color:#1d2039;
        color:rgb(238 242 255);
        
        `
    }
}}
`
export const AbilitiesDetails = styled(DisplayFlex) `
    gap: 20px;  
    flex-direction: row;
    flex-wrap: wrap;
`

export const ContainerTitleAbilites = styled(DisplayFlex) `
    gap: 10px;
`
export const TitleAbilities = styled.h3 ` 
    font-size: 1.2rem;
    text-transform: capitalize;
`
export const FlipEffect = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: 1s;
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
    background-color:#daa520;
            
`

export const CardBack = styled(StyleCards) `
    background-color: #1d2039;
    color: #daa520;
    padding: 5px;
    transform: rotateY(180deg);
`

export const MiniFlip = styled(FlipEffect) `
    animation: flip-indicativo 2.5s infinite ease-in-out;
`
export const MiniContainerCard = styled.div `
    position: relative;
    height: 30px;
    width: 20px;
`
export const MiniStyledCard = styled(DisplayFlex) `
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 5px;
`
export const MiniCardFront = styled(MiniStyledCard) `
    background-color:#daa520;
        
`
export const MiniCardBack = styled(MiniStyledCard) `
    background-color: #1d2039;
    color: #daa520;
    transform: rotateY(180deg);
`

export const TeextBlockMoves = styled(TextBlock) `
    padding: 3px 8px;
    color: #1d2039;
    background-color: rgb(238 242 255);
    border-top-left-radius: 5px;
    border-bottom-right-radius: 10px;
    font-weight: 700;
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

    
    @media (max-width: 470px) {
        width: 300px;
        margin: 0 auto;
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


