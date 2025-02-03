import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context";
import { ListPokemons } from "../list-pokemons";
import axios from 'axios';

// Mockando o axios
jest.mock('axios');

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

afterEach(() => {
    jest.restoreAllMocks();
});

const mockPokedex =  { pokemons: [
    { name: "charmander", image: "charmander.png", type: ["fire"] },
    { name: "bulbasaur", image: "bulbasaur.png", type: ["grass"] }
  ] 
}

describe('List Pokemons Component', () => {

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

        await waitFor(() => {
            expect(getItem).toHaveBeenCalledWith('pokedex');
            expect(mockSetState).toHaveBeenCalledWith(mockPokedex);
        })
    })

    it('ao renderizar, o conteúdo do sessuinStorege deve ser salvo',  () => {

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

    it('ao renderizar, deve ser exibido uma mensgaem de carregando, antes do contéudo ser carregado está aparecendo na tela', () => {

        render(<ListPokemons />)

        const loading = screen.getByText('Carregando...')

        expect(loading).toBeInTheDocument()

    })

    it('API', () => {

            

    })

})