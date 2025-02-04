import { render, screen, waitFor, act } from "@testing-library/react"
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context";
import { ListPokemons } from "../list-pokemons";
import { server } from "../../../mocks/server";
import { http, HttpResponse } from 'msw'; 
import { setupServer } from 'msw/node';
import axios from 'axios';



// Mockando o axios
// jest.mock('axios');

// let valueTheme

// const TestComponent = () => {

//     const { tooglerTheme } = useContext(ThemeContext)

//     valueTheme = tooglerTheme

//     return null;
// }


// const ProviderThemes = () => {

//     return (
//     <ThemeProvider>
//         <TestComponent />
//         <ListPokemons />
//     </ThemeProvider>
//     )
// }

// const mockPokedex =  { pokemons: [
//     { name: "charmander", image: "charmander.png", type: ["fire"] },
//     { name: "bulbasaur", image: "bulbasaur.png", type: ["grass"] }
//   ] 
// }


// beforeEach(() => {
//     jest.spyOn(console, 'error').mockImplementation(() => {});
// });

// afterEach(() => {
//     jest.restoreAllMocks();
//     jest.resetAllMocks();
// });

describe('List Pokemons Component', () => {


   
test("Deve exibir a lista de pokémons corretamente", async () => {
    render(<ListPokemons />);
    console.log("🟡 Teste iniciado!");
  
    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
  
    // Usa findByText() para esperar os elementos carregarem
    const pikachu = await screen.findByText(/pikachu/i, {}, { timeout: 3000 });
    const bulbasaur = await screen.findByText(/bulbasaur/i, {}, { timeout: 3000 });
  
    console.log("🟢 Teste finalizado! Pokémons encontrados.");
  
    expect(pikachu).toBeInTheDocument();
    expect(bulbasaur).toBeInTheDocument();
  });
    

    // it('ao renderizar, o contexto do tema deve ser disponibilizado', () => {

    //     render(<ProviderThemes />)

    //     expect(valueTheme).toBe('')

    // })

    // it('ai renderizar, o conteudo do sessionStorage de pokedex deve ser carregado', async () => {


    //     const mockSetState = jest.fn();
    //     jest.spyOn(React, 'useState')
    //         .mockImplementation((initialValue) => [initialValue, mockSetState]);

    //     const getItem = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockPokedex))

        
    //     await act(async () => {render (<ListPokemons />)})

    //     await waitFor(() => {
    //         expect(getItem).toHaveBeenCalledWith('pokedex');
    //         expect(mockSetState).toHaveBeenCalledWith(mockPokedex);
    //     })
    // })

    // it('ao renderizar, o conteúdo do sessuinStorege deve ser salvo', async () => {

    //     const setItem = jest.spyOn(Storage.prototype, 'setItem')

    //     jest.spyOn(React, "useState").mockImplementation((initialValue) => {
    //         if (typeof initialValue === "object" && initialValue !== null && "pokemons" in initialValue) {
    //             return [mockPokedex, jest.fn()]
    //         }
    //             return [initialValue, jest.fn()];
    //       });

    //       await act(async () => {
    //         render(<ListPokemons />);
    //       });
        
    //     await waitFor(() => {
    //     expect(setItem).toHaveBeenCalledWith('pokedex', JSON.stringify(mockPokedex))
    //     });
        
    // })

    // it('ao renderizar, deve ser exibido uma mensgaem de carregando, antes do contéudo ser carregado está aparecendo na tela',  () => {

    //         render(<ListPokemons />);
      
    //         const loading = screen.getByText('Carregando...')

    //         expect(loading).toBeInTheDocument()
       
           
    // })

    // it('deve exibir uma mensagem de erro caso a requisição falhe', async () => {
    //     axios.get.mockRejectedValue(new Error('Erro ao carregar informações dos Pokemons 😕'));

    //     await act(async () => {
    //       render(<ListPokemons />);
    //     });
      
    //     await waitFor(() => {
    //       expect(screen.getByText('Erro ao carregar informações dos Pokemons 😕')).toBeInTheDocument();
    //     });
        
    //   });
    // it('API', async () => {

    //     // const response = await fetch('https://pokeapi.co/api/v2/pokemons')
    //     // const user = await response.json()
    //     // console.log(user)
        
        
    //         render(<ListPokemons />);

    //         screen.debug()
    
        
    // })

})