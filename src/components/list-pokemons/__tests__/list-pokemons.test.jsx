import { render, screen, waitFor, act } from "@testing-library/react"
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context";
import { ListPokemons } from "../list-pokemons";
import { server } from "../../../mocks/server";
import { http, HttpResponse } from 'msw'; 
import { setupServer } from 'msw/node';
import axios from 'axios';
import { BrowserRouter } from "react-router-dom";


let valueTheme

const TestComponent = () => {

    const { tooglerTheme } = useContext(ThemeContext)

    valueTheme = tooglerTheme

    return null;
}


const ProviderThemes = () => {

    return (
    <ThemeProvider>
        <TestComponent />
        <ListPokemons />
    </ThemeProvider>
    )
}

const mockPokedex =  { pokemons: [
    { name: "charmander", image: "charmander.png", type: ["fire"] },
    { name: "bulbasaur", image: "bulbasaur.png", type: ["grass"] }
  ] 
}


// beforeEach(() => {
//     jest.spyOn(console, 'error').mockImplementation(() => {});
// });

// afterEach(() => {
//     jest.restoreAllMocks();
//     jest.resetAllMocks();
// });

describe('List Pokemons Component', () => {


    it("ao renderizar mostrar carregamento, se não estiver nada sendo carregado, mostrar o contéudo", async () => {
      render(
        <BrowserRouter>
        <ListPokemons />
        </BrowserRouter>
      );
  
      expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
  
      const pikachu = await screen.findByText(/pikachu/i);
      const bulbasaur = await screen.findByText(/bulbasaur/i);
  
      expect(pikachu).toBeInTheDocument();
      expect(bulbasaur).toBeInTheDocument();
    });
    

    it('ao renderizar, o contexto do tema deve ser disponibilizado', () => {

        render(<ProviderThemes />)

        expect(valueTheme).toBe('')

    })

    it('ai renderizar, o conteudo do sessionStorage de pokedex deve ser carregado', async () => {


        const mockSetState = jest.fn();
        jest.spyOn(React, 'useState')
            .mockImplementation((initialValue) => [initialValue, mockSetState]);

        const getItem = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockPokedex))

        render (<ListPokemons />)

            expect(getItem).toHaveBeenCalledWith('pokedex');
            expect(mockSetState).toHaveBeenCalledWith(mockPokedex);
    
    })

    it('ao renderizar, o conteúdo do sessuinStorege deve ser salvo', async () => {

        const setItem = jest.spyOn(Storage.prototype, 'setItem')

        jest.spyOn(React, "useState").mockImplementation((initialValue) => {
            if (typeof initialValue === "object" && initialValue !== null && "pokemons" in initialValue) {
                return [mockPokedex, jest.fn()]
            }
                return [initialValue, jest.fn()];
          });

          
            render(<ListPokemons />);
  
            expect(setItem).toHaveBeenCalledWith('pokedex', JSON.stringify(mockPokedex))

        
    })

})