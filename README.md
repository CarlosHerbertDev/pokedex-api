<h1 align="center">Pokédex API</h1>

<p align="center">
O Pokédex API é um projeto que exibe uma listagem inicial de 10 Pokémons obtidos de uma API pública. Cada Pokémon possui uma página dedicada com mais detalhes, acessível ao clicar no seu card. Além disso, a aplicação oferece um botão "Ver mais" para carregar 10 novos Pokémons, permitindo expandir a lista. Também é possível filtrar os Pokémons exibidos por tipo e alternar entre os temas claro e escuro, proporcionando uma experiência personalizada ao usuário.<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-decisões-adotadas">Decições adotadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-instalar-e-rodar">Como Instalar e Rodar</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
</p>
<br>
  <h2 align= 'center'>Desktop Version</h2>
  <p align= 'center'>
  <img alt="blog preview card main" src="./public/pokedex-apil-desktop.gif" width='100%'>
  </p>
  <h2 align= 'center'>Mobile Version</h2>
  <p align= 'center'>
  <img alt="blog preview card main" src="./public/pokedex-apil-mobile.gif">
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

<p>
  As tecnologias utilizadas neste projeto foram essenciais para garantir uma aplicação mais escalável e bem estruturada. O React, por exemplo, sendo uma biblioteca do JavaScript, permitiu a criação de uma interface eficiente e reutilizável por meio de componentes. Além disso, o uso do Styled Components foi um grande diferencial na estilização dos componentes, tornando os estilos dinâmicos mais fáceis de gerenciar, além de facilitar a manutenção e exclusão de estilos quando um componente não for mais necessário no futuro.
</p>
<p>
  Outra tecnologia fundamental foi o Jest, combinado com o React Testing Library (RTL), que possibilitou a validação do funcionamento correto dos componentes, funções assíncronas e do Context API, garantindo maior confiabilidade no projeto.
</p>
<p>
  Por fim, ferramentas como Git foram utilizadas para versionamento do código, enquanto o GitHub permitiu armazenar e compartilhar o repositório de forma acessível, facilitando a colaboração e o gerenciamento do desenvolvimento.
</p>


## 🛠 Decisões adotadas 
<p>
  Durante o desenvolvimento deste projeto, enfrentei diversos desafios que contribuíram significativamente para o meu aprendizado.
</p>
<p>  
  Um dos principais desafios foi o uso do Jest, pois até então, meu conhecimento sobre essa ferramenta se limitava a testes em funções de JavaScript puro. Com este projeto, aprofundei meu entendimento sobre testes em componentes, utilizando o React Testing Library (RTL). Além disso, aprendi a mockar estados e funções que armazenam informações na sessão, como o SessionStorage, além de contar com a ajuda do MSW (Mock Service Worker) para interceptar chamadas da API e facilitar a realização dos testes.
</p>
<p>  
  Outro desafio importante foi a implementação da Context API para gerenciar o contexto de temas em toda a aplicação. Essa funcionalidade proporciona uma experiência personalizada ao usuário, permitindo a alternância entre tema claro e escuro. Para que essa implementação fosse possível, precisei me aprofundar no uso do Styled Components, criando uma estilização mais dinâmica. A mudança de tema foi realizada através do uso de props, onde os componentes recebem a prop do tema diretamente do contexto, permitindo a alteração dos estilos de forma eficiente e organizada.
</p>
<p>
  Esses desafios trouxeram um grande aprendizado, tornando o código mais estruturado, reutilizável e fácil de manter. 💡✨
</p>


## 💻 Como Instalar e Rodar

<p>Para instalar e rodar esse projeto em seu computador basta seguir os seguintes passos:</p>

<ol style="padding: 5px;">
<li>
    📝 Clonando Repositório:
   
  Primeiro vamos fazer um clone do repositório para sua máquina local, lembrando que é necessário ter o git instalado para realizar o clone, tendo ele instalado, você deverá copiar o seguinte comando
   ```
  git clone https://github.com/CarlosHerbertDev/pokedex-api.git
   ```
  Depois de copiar esse comando, pode escolher no seu computador a pasta onde vai ficar os arquivos, depois com git bash basta colar esse comando e executar
</li>
<li>
   🛠 Entrando na Pasta e instalando depências: 
   
   Agora que já clonamos, vamos entrar na pasta e instalar as dependências, para entrar na pasta, adicione o seguinte comando
   ```
   cd pokedex-api
   ```
   Para instalar as dependências verifique se o Node js esá instalado em sua máquina, caso não esteja, instale e vollte para os próximos passos
  , tendo o node instalado rode o seguinte comando 
  ```
  npm install
  ```
Ou, se estiver usando yarn ou pnpm:

```
yarn install
# ou
pnpm install
```
</li>
<li>
💻 Rodar o Servidor de Desenvolvimento

Para rodar o projeto agora, basta usar o seguinte comando
```
npm run dev
```
Ou, se estiver usando yarn ou pnpm
```
yarn dev
# ou
pnpm dev
```

Depois de usar esse comando sera impresso no terminal um link, então basta acessar ele e ver o projeto funcionando!

O link será semelhante a esse:
```
Local: http://localhost:5173/
```
</li>
</ol>

<p>
  Pronto, seguindo esses passos conseguirá ver o projeto em funcionamento! Uma boa experiência! :)
</p>