import { render, screen, fireEvent } from "@testing-library/react"
import { DescriptionProject } from "../description-project"
import React from "react";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('Description Componente', () => {

    it('verificar se os estados das variáveis estão iniciando com os valores corretos', () => {
        const useSateMock = jest.spyOn(React, 'useState');
        useSateMock.mockImplementation((initialValue) => [initialValue, jest.fn()]);

        render(<DescriptionProject />)

        expect(useSateMock).toHaveBeenCalledWith('')
        expect(useSateMock).toHaveBeenCalledWith(false)
    })

    it('verificar se o estado ao renderizar o compoente o estado é carregado e o estado do select atualizado', () => {

        const setSeleckMock = jest.fn()
        React.useState.mockImplementation(() => ['', setSeleckMock])

        const getItem = jest.spyOn(Storage.prototype, 'getItem');

        getItem.mockImplementation(() => ['fire', 'water', 'grass'])

        render( <DescriptionProject />)

        expect(getItem).toHaveBeenCalledWith('selectPokemons')

        expect(setSeleckMock).toHaveBeenCalledWith(['fire', 'water', 'grass'])
    })

    it('verificar se ao renderizar o componente o estado é salvo', () => {

        const setItem = jest.spyOn(Storage.prototype, 'setItem');

        render( <DescriptionProject />)

        expect(setItem).toHaveBeenCalledWith('selectPokemons', '')
    })

    


    it('ao renderizar o componente deve recerber os valores das props corretamente', () => {

        // const types = ['fire', 'water', 'grass']
        // const filterPokemons = jest.fn()

        // render(<DescriptionProject dinamicSelect={types} filteringPokemons={filterPokemons}  />)

        //     expect(types).toEqual(expect.arrayContaining(['fire', 'water', 'grass']))
        //     expect(typeof filterPokemons).toBe('function')

        //     const select = screen.getByTestId('test-select') 

        //     fireEvent.click(select)

        //     const optionsSelect = screen.getByTestId('test-options')

        //     expect(optionsSelect).toBeInTheDocument(types.forEach((type) => {
        //         expect(screen.getByText(type)).toBeInTheDocument();
        //     }))



    })



})