import { fireEvent, render, screen } from "@testing-library/react"
import { HeaderOfComponents } from "../header-of-components"
import { ThemeProvider } from "../../../contexts/theme-context";
import React from 'react';

const ProviderThemes = () => {
    return (
        <ThemeProvider>
            <HeaderOfComponents />
        </ThemeProvider>

    )

}

afterEach(() => {
    jest.restoreAllMocks();
  });

describe("Header Component", () => {

    it('ao renderizar o header, deverá aparacer o titulo da aplicação', () => {

        render(<HeaderOfComponents />);

        const title =  screen.getByText('Pokédex API');
        
        expect(title).toBeInTheDocument()

    });

    it("ao clicar no botão logo, o scroll deve ir para o topo da pagina ", () => {

        window.scrollTo = jest.fn();

        render(<HeaderOfComponents />)

        const logo = screen.getByTestId('scroll-top')

        fireEvent.click(logo)

        expect(window.scrollTo).toHaveBeenCalledWith(100, 0);
    })


    it('ao clicar no botão darklight, o estado tema deverá ser alterado', () => {
    
        const setThemeMock = jest.fn()
        jest.spyOn(React, 'useState').mockImplementation((initialValue) => [initialValue, setThemeMock]);


        render(<ProviderThemes />)

        const DarkLight = screen.getByTestId('change-theme')

        fireEvent.click(DarkLight)

        expect(setThemeMock).toHaveBeenCalledWith('dark')

    })

});

