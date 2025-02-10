<h1 align="center">Pokédex API</h1>

<p align="center">
O Pokédex API é um projeto que exibe uma listagem inicial de 10 Pokémons obtidos de uma API pública. Cada Pokémon possui uma página dedicada com mais detalhes, acessível ao clicar no seu card. Além disso, a aplicação oferece um botão "Ver mais" para carregar 10 novos Pokémons, permitindo expandir a lista. Também é possível filtrar os Pokémons exibidos por tipo e alternar entre os temas claro e escuro, proporcionando uma experiência personalizada ao usuário.<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Decições adotadas</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
</p>
<br>
  <h2 align= 'center'>Desktop Version</h2>
  <p align= 'center'>
  <img alt="blog preview card main" src="./design/projeto-desktop.gif" width='100%'>
  </p>
  <h2 align= 'center'>Mobile Version</h2>
  <p align= 'center'>
  <img alt="blog preview card main" src="./design/projeto-mobile.gif">
  </p>
  
## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- Javascript
- API
- React
- Jest e RTL para testes 
- Git e Github


## 🛠 Decisões adotadas 
<p>  
Esse projeto trouxe grandes desafios, um deles foi uso do Jest, onde antes tinha apenas o conhecimento do seu uso em funções de JS puro, e com o desenvolvimento desse projeto adquiri conhecimento nos testes envolvendo componentes, onde usei O RTL para testar eles, aprendi a mockar estados e funções que guardam estados de sessão como o SessionStorage, além de usar a ajuda no MSW para mockar e interceptar chamadas da API para realizar os testes.
</p>
<p>  
Outro desafio foi a utlização do context API, para disponibilizar o contexto de temas por toda a aplicação, onde é proporcionado uma experiência personalizada para usuário alterar entre o tema claro e escuro, e para utilização dessa funcionalidade, antes tive que me apronfundar um pouco mais no uso de styled components para criar um estilização mais dinâmica, estilizando os componentes por meio de props, e de acordo com o valor recebido pela prop, o tema é alterado, e onde essa prop que é recebida pelos componentes de estilos é o contexto que disponibilzamos os componentes
</p>


- [Acesse o projeto finalizado, online](https://carlosherbertdev.github.io/projeto-inicial-fetch-github-api/)