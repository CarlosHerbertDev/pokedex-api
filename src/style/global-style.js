import { createGlobalStyle } from "styled-components"


const Globalstyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    }
    
body {
    background-color: rgb(238 242 255);
    font-family: "Roboto", serif;
    font-display: swap;
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