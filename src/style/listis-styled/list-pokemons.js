import styled from "styled-components";
import { Button } from "../../components/button/button";

export const Container = styled.div `
    background-color: rgb(238 242 255);
`

export const LinkHome = styled.a `
    font-family: "Luckiest Guy", serif;
    color: #ffcb05;
    text-shadow: #395fAA -0.1em 0.1em 0.1em;
`

export const MainListPokemons = styled.main `
    margin: 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 620px) {
        padding: 15px;
    }
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
    text-shadow: #395fAA 0.1em 0.1em 0.1em;
    transition: 0.1s ease-in-out;

    &:hover {
        padding: 16px 18px;
        transition: 0.1s ease-in-out;
    
    }
    `