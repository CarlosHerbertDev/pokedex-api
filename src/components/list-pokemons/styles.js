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

export const TitleFiltro = styled.p `
    font-family: "Luckiest Guy", serif;
    color: #ffcb05;
   text-shadow: 
    2px 2px 0px #395fAA,   
    -2px 2px 0px #395fAA,  
    2px -2px 0px #395fAA,  
    -2px -2px 0px #395fAA;
    font-size: 1.5rem;

`
export const DropdownContainer = styled.div `
    position: relative;
    width: 100%;
    display: inline-block;
`

export const DropdownButton = styled.button `
    background-color: ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};
    color: ${({theme}) => { 
        return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)'
    }};
    border: 2px solid ${({theme}) => { 
        return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)'
    }};
    padding: 5px 15px;
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    text-align: left;


    &:after {
    content: " ▼";
    font-size: 0.8rem;
    }
`

export const DropdownList = styled.ul `
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};
    border: 1px solid ${({theme}) => { 
        return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)'
    }};
    border-radius: 5px;
    z-index: 1;
    padding: 0px;
    max-height: 150px;
    overflow: auto;

&::-webkit-scrollbar {
        border-radius: 10px;
        width: 10px;
        background-color: ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => { 
        return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)'
    }};
    }

`

export const DropdownItem = styled.li `
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    color: ${({theme}) => { 
        return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)'
    }};

    &:hover {
        background-color: ${({theme}) => { 
            return theme === 'dark' ? '#1d2039' : 'rgb(238 242 255)'
        }};
        color: ${({theme}) => { 
        return theme === 'dark' ? 'rgb(238 242 255)' : '#1d2039'
    }};
    }

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