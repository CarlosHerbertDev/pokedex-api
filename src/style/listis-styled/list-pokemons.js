import { Link } from "react-router-dom";
import styled from "styled-components";
import sun64 from "../../assets/sun34.png"


export const HeaderlistPokemons = styled.header `
    background-color: #2C3052;
    color: #ffcb05;
    display: flex;
    justify-content: center;
    
`
export const DivLogo = styled.div `
    display: flex;
    justify-content:center;
    align-items: center;
`

export const TitleLogo = styled.p `
    font-family: "Luckiest Guy", serif;
    font-size: 2rem;
`

export const ButtonDarkLight = styled.button `
    background: url(${sun64});
    border:none;
    width: 34px;
    height: 34px;
`
export const Div = styled.div `
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 15px 20px;
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
    font-size: 1.6rem;
    margin-top: 5px;
    border: 5px solid #2C3052;
    background-color: #2C3052;
    border-radius: 8px;
    width: 100%;
`
export const UlListPokemons = styled.ul `
    margin-top: 50px;
    max-width: 1440px;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`
export const LiPokemons = styled.li `
    border-radius: 20px;
    border: 5px solid #2C3052;
    text-align: center;
    display: flex;
`
export const NewLink = styled(Link) `

`