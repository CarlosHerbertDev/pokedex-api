import { createGlobalStyle } from "styled-components"


const Globalstyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
    
body {
    font-family: "Roboto", serif;
    font-display: swap;
    font-size: 62.5%;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000;
}
`

export default Globalstyle