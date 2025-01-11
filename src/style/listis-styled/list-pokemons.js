import { Link } from "react-router-dom";
import styled from "styled-components";


export const HeaderlistPokemons = styled.header `
    background-color: #2C3052;
`

export const MainListPokemons = styled.main `
    margin: 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

`
export const ImagePokemon = styled.img `
    width: 200px;
    height: 200px;
    padding: 35px;

`

export const NumberPokemon = styled.h2 `
    color: rgb(238 242 255);
    margin-top: 20px;
    border: 5px solid #2C3052;
    background-color: #2C3052;
    border-radius: 10px;
    width: 100%;
`
export const UlListPokemons = styled.ul `
    margin-top: 50px;
    max-width: 1440px;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`
export const LiPokemons = styled.li `
    border-radius: 20px;
    border: 5px solid #2C3052;
    text-align: center;
    display: flex;
`
export const NewLink = styled(Link) `
    width: 100%;
`