import { createGlobalStyle } from "styled-components"


const Globalstyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
    
body {
    // background-color: rgb(238 242 255);
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

@keyframes flip-indicativo {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
`

export default Globalstyle