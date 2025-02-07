import { render } from "@testing-library/react"
import React from 'react';
import { ThemeContext, ThemeProvider } from "../theme-context";

afterEach(() => {
    jest.restoreAllMocks();
  });

describe("Theme Component", () => {

    it('ao renderizar o componente o estado da variável de temas deve ser vazio', () => {

        const useSateMock = jest.spyOn(React, 'useState');
        useSateMock.mockImplementation((initialValue) => [initialValue, jest.fn()]);


       render(<ThemeProvider />)

       expect(useSateMock).toHaveBeenCalledWith('');


    })

    it('ao renderizar, o estado salvo no sessionStrage deve ser carregado e o estado do select atualizado', () => {

        const setNockTheme = jest.fn()
        jest.spyOn(React, 'useState').mockImplementation((initialValue) => [initialValue, setNockTheme]);

        const getItem = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue ('light')
                
        render(<ThemeProvider />)

        expect(getItem).toHaveBeenCalledWith('tooglerTheme')

        expect(setNockTheme).toHaveBeenCalledWith('light')

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
                    {(value) => {
                        expect(value.togglerTheme).toBe('')
                        expect(typeof value.setTogglerTheme).toBe('function')
                    }}
                </ThemeContext.Consumer>
            </ThemeProvider>
        )

    })

})