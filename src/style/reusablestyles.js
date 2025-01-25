import styled from "styled-components"
import { Button } from "../components/button/button"


export const DisplayFlex = styled.div `
    display: flex;
    justify-content:center;
    align-items: center;
`

export const FlexUL = styled.ul `
    display: flex;
    justify-content:center;
    align-items: center;
`

export const BodyPokemons = styled.div `
    background-color: ${({theme}) => { 
        return theme === 'dark' ? '#2C3052' : 'rgb(238 242 255)' 
    }}; 
    min-height: 100vh;
`

export const SectionPokemons = styled.section `
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

`

export const LinkHome = styled.a `
    font-family: "Luckiest Guy", serif;
    color: #ffcb05;
    text-shadow: #395fAA -0.1em 0.1em 0.1em;
`

export const ButtonStyle = styled(Button) `
    margin-top: 25px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #1d2039;
    border: none;
    font-family: "Luckiest Guy", serif;
    font-size: 1.1rem;
    color: #ffcb05;
    text-shadow: #395fAA 0.1em 0.1em 0.1em;
    transition: 0.1s ease-in-out;
    `