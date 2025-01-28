import { fireEvent, render, screen } from "@testing-library/react"
import React from 'react';
import { ThemeContext, ThemeProvider } from "../theme-context";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

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

})