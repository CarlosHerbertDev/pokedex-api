import styled from "styled-components";
import { ButtonStyle, SectionPokemons } from "../../style/reusablestyles";

export const SectionListPokemons = styled(SectionPokemons) `
    @media (max-width: 620px) {
        padding: 15px;
    }
`

export const TextApresentation = styled.h1 `
    margin-top: 110px;
    font-size: 2rem;
    text-align: center;

    @media (max-width: 438px) {
        width: 320px;
    }

`

export const DescriptionApresentation = styled.p `
    background-color: ${({theme}) => { 
        return theme === 'light' ? '#1d2039' : 'rgb(238 242 255)' 
    }};
    color: ${({theme}) => { 
        return theme === 'light' ? 'rgb(238 242 255)' : '#1d2039)' 
    }};
    margin-top: 30px;
    font-size: 1.2rem;
    text-align: justify;
    padding: 15px;
    font-weight: 500;
    border-radius: 8px;
    line-height: 30px;
    max-width: 600px;
`
export const UlListPokemons = styled.ul `
    margin-top: 40px;
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
        return theme === 'light' ? '#1d2039' : 'rgb(238 242 255)' 
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
        return theme === 'light' ? 'rgb(238 242 255)' : '#1d2039' 
    }};
    font-size: 1.6rem;
    margin-top: 5px;

    border: 5px solid ${({theme}) => { 
        return theme === 'light' ? '#1d2039' : 'rgb(238 242 255)' 
    }};

    background-color: ${({theme}) => { 
        return theme === 'light' ? '#1d2039' : 'rgb(238 242 255)' 
    }};
    
    border-radius: 8px;
    text-transform: capitalize;
    transform: translateY(1px);
    `
    
export const VerMais = styled(ButtonStyle) `
    &:hover {
        transition: 0.1s ease-in-out;
            transform: translateY(-4px);
            box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
    }
    `