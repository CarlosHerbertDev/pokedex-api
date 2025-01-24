import styled from "styled-components";
import { ButtonStyle, DisplayFlex, LinkHome, SectionPokemons } from "../../style/reusablestyles";

export const SectionListPokemons = styled(SectionPokemons) `
    @media (max-width: 620px) {
        padding: 15px;
    }
`

export const ContainerFilter = styled(DisplayFlex) `
    gap: 10px;
`
export const TextApresentation = styled.h1 `
    margin-top: 90px;
    font-size: 2rem;
    text-align: center;

    @media (max-width: 438px) {
        width: 320px;
    }

`

export const DescriptionApresentation = styled.p `
    color: ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};

    margin-top: 10px;
    font-size: 1.2rem;
    text-align: center;
    padding: 15px;
    font-weight: 500;
    border-radius: 8px;
    line-height: 30px;
    max-width: 600px;
`

export const TitleFiltro = styled.label `
    font-family: "Luckiest Guy", serif;
    color: #ffcb05;
    text-shadow: #395fAA -0.1em 0.1em 0.1em;
    font-size: 1.5rem;

`
export const SelectFilter = styled.select `

    background-color: ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};
    color: ${({theme}) => { 
        return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)'
    }};
    
    border-radius: 5px;  
    font-size: 1.2rem; 
    min-width: 80px; 
    padding: 2px;
`



export const UlListPokemons = styled.ul `
    margin: 30px 0px; 
    max-width: 1440px;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`
export const LiPokemons = styled.li `

    border-radius: 20px;
    border: 5px solid ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};
    text-align: center;
    display: flex;
    transition: 0.1s ease-in-out;

        &:hover {
            transition: 0.1s ease-in-out;
            transform: translateY(-4px);
            box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
        }    
`

export const ImagePokemon = styled.img `
    width: 200px;
    height: 200px;
    padding: 35px;
    transition: 0.1s ease-in-out;
`

export const NamePokemon = styled.h2 `
    color: ${({theme}) => { 
        return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)' 
    }};
    font-size: 1.6rem;
    margin-top: 5px;

    border: 5px solid ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};

    background-color: ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};
    
    border-radius: 8px;
    text-transform: capitalize;
    transform: translateY(1px);
    `
    
export const VerMais = styled(ButtonStyle) `
    margin-bottom: 30px;
    &:hover {
        transition: 0.1s ease-in-out;
            transform: translateY(-4px);
            box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
    }
    `