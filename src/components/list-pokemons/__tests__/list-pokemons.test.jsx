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



const mockPokedex = [
    {name: 'charmander', image: 'charmander.png', type: ['fire']},
    {name: 'charmander', image: 'charmander.png', type: ['fire']}
]

describe('List Pokemons Component', () => {

    it('ao renderizar, o contexto do tema deve ser disponibilizado', () => {

        render(<ProviderThemes />)

        expect(valueTheme).toBe('')
    })

    it('verificar se o conteudo do sessionStorage de pokedex está sendo carregado', async () => {


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

})