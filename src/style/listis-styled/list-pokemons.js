import { Link } from "react-router-dom";
import styled from "styled-components";
import sun34 from "../../assets/sun34.png"
import pokebola34 from "../../assets/pokebola34.png"
import { Button } from "../../components/button/button";

export const HeaderlistPokemons = styled.header `
    background-color: #2C3052;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
`
export const Logo = styled.div `
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 10px
`

export const TitleLogo = styled.p `
    font-family: "Luckiest Guy", serif;
    font-size: 2rem;
    text-shadow: #395fAA 0.1em 0.2em 0.1em;
`

export const LinkHome = styled.a `
    color: #ffcb05;
`

export const ButtonDarkLight = styled.button `
    background: url(${sun34});
    border: none;
    width: 34px;
    height: 34px;
    cursor: pointer;
`
export const HeaderContainer = styled.div `
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

export const ImagePokebola = styled.div `
    background: url(${pokebola34});
    border: none;
    width: 40px;
    height: 40px;
`

export const TextApresentation = styled.h1 `
    margin-top: 110px;
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
    margin-top: 110px;
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

export const VerMais = styled(Button) `
    margin-top: 25px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #2C3052;
    border: none;
    font-family: "Luckiest Guy", serif;
    font-size: 1.1rem;
    color: #ffcb05;
    text-shadow: #395fAA 0.1em 0.2em 0.1em;
    transition: 0.3s ease-in-out;

    &:hover {
        padding: 16px 18px;
        transition: 0.3s ease-in-out;

    }
`

export const NewLink = styled(Link) `

`