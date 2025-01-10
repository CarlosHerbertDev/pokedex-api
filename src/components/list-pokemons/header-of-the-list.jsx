
// import { A } from "../../../public" 

import styled from "styled-components"

export const HeaderOfTheList = () => {

    return (
                <>
                    <Header>
                    <div>
                        <p>Pokedex API</p>
                        <img src="../../../public/vite.svg" alt="" />
                    </div>       
                    </Header>
                </>
    )
}

const Header = styled.header `
    background-color: red;
`