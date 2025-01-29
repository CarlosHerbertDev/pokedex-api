import { fireEvent, render, screen } from "@testing-library/react"
import React from 'react';
import { ThemeContext, ThemeProvider } from "../theme-context";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));


jest.mock("../../components/button/button", () => jest.fn(() => <div data-testid="mock-filho"></div>));


describe("Theme Component", () => {

    it('aao renderizar o componente o estado da variável de temas deve ser vazio', () => {

        // const setNockTheme = jest.fn()
        // React.useState.mockImplementation((initialTheme) => [initialTheme, setNockTheme])


        const useSateMock = jest.spyOn(React, 'useState');

        useSateMock.mockImplementation((initialValue) => [initialValue, jest.fn()]);


       render(<ThemeProvider />)

       expect(useSateMock).toHaveBeenCalledWith('');



    //    expect(React.useState).toHaveBeenCalledWith('')

    })

    it('ao rendertizar a pagina, se tiver um estado salvo no sessionStorage ele deve ser carregaado e atuaalizar o estado do componente', () => {

        const setNockTheme = jest.fn()

        React.useState.mockImplementation((initialTheme) => [initialTheme, setNockTheme])

        const getItem = jest.spyOn(Storage.prototype, 'getItem');

        getItem.mockImplementation (() => 'light' || 'dark')
                
        render(<ThemeProvider />)

        expect(getItem).toHaveBeenCalledWith('tooglerTheme')

        expect(setNockTheme).toHaveBeenCalledWith('light' || 'dark')

    })

    it('ao renderizar a página o estado deve ser salvo', () => {

        const setItem = jest.spyOn(Storage.prototype, 'setItem');

        setItem.mockImplementation (() => {})

        render(<ThemeProvider />)

        expect(setItem).toHaveBeenCalledWith('tooglerTheme', '')
        
    })

    it('ao renderezir a paaginaa, verificar se meus temas estão sendo disponibilizados para todo o código', () => {
        
        render(
            <ThemeProvider>
                <ThemeContext.Consumer>
                    {(value) => {}}
                </ThemeContext.Consumer>
            </ThemeProvider>
        )



    })

})