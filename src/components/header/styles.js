import styled from "styled-components";
import sun34 from "../../assets/sun34.png"
import pokebola34 from "../../assets/pokebola34.png"
import moon34 from "../../assets/moon34.png"

export const HeaderlistPokemons = styled.header `
    background-color: #1d2039;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 1;
`
export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 15px 20px;
`

export const Logo = styled.div `
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 10px
`

export const TitleLogo = styled.p `
    font-size: 2rem;
    cursor: pointer;
`

export const ImagePokebola = styled.div `
    background: url(${pokebola34});
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
`

export const ButtonDarkLight = styled.button `
    background: url(${({theme}) => { 
        return theme === 'dark' ? moon34 : sun34 
    }});
    border: none;
    width: 34px;
    height: 34px;
    cursor: pointer;
    transform: translateY(4px);
    transition: 1s;
`