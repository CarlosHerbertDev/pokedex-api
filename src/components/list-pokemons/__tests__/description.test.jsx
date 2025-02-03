import { render, screen, fireEvent } from "@testing-library/react"
import { DescriptionProject } from "../description-project"
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context";

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
        <DescriptionProject />
    </ThemeProvider>
    )
}

afterEach(() => {
    jest.restoreAllMocks();
});

describe('Description Componente', () => {

    it('ao renderizar, o contexto deve ser disponibilizado para o componente', () => {

        render (<ProviderThemes />)

        expect(valueTheme).toBe('')
    })

    it('ao renderizar, o estado salvo no sessionStrage deve ser carregado e o estado do select atualizado', () => {

        const getItem = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('fire');
        const mockSetState = jest.fn();
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => ['fire', mockSetState]); 


        render(<DescriptionProject />);

        expect(getItem).toHaveBeenCalledWith('selectPokemons');

        expect(mockSetState).toHaveBeenCalledWith('fire');
    })

    it('ao renderizar o componente, o estado é salvo', () => {

        const setItem = jest.spyOn(Storage.prototype, 'setItem');

        render( <DescriptionProject />)

        expect(setItem).toHaveBeenCalledWith('selectPokemons', '')
    })

    it('ao renderizar, os textos devem aparecer na tela', () => {

        render(<DescriptionProject />)

        const textWelcome = screen.getByText('Bem vindo ao Pokédex API !')
        const textFilter = screen.getByText('Filtrar')
        const textDescription = screen.getByText(new RegExp('A Pokédex API é', 'i'))
        
        expect(textWelcome).toBeInTheDocument()
        expect(textFilter).toBeInTheDocument()
        expect(textDescription).toBeInTheDocument()
        
    })

    it('ao clicar no botão dropdawn do select, o estado de isdropdawn é atualizado', () => {

        const setMockDropDawn = jest.fn()
        jest.spyOn(React, 'useState').mockImplementation((initialValue) => [initialValue, setMockDropDawn]);
    
        render (<DescriptionProject />)

        const selectButton = screen.getByTestId('test-select')

        fireEvent.click(selectButton)
        
        expect(setMockDropDawn).toHaveBeenCalledWith(true)

    })

    it('ao renderizar o componente, as props devem receber os valoreas corretos', () => {

        const types = ['fire', 'water', 'grass']
        const filterPokemons = jest.fn()

        render(<DescriptionProject dinamicSelect={types} filteringPokemons={filterPokemons}  />)

        expect(types).toEqual(expect.arrayContaining(['fire', 'water', 'grass']))
        expect(typeof filterPokemons).toBe('function')

    })

    it('ao clicar no botão do select, o dropdawn deve mostrar as opções do select e renderizar a lista de tipos de pokemons que foi recebida como prop', () => {

        const types = ['fire', 'water', 'grass']

        render(<DescriptionProject dinamicSelect={types}/>)

        expect(types).toEqual(expect.arrayContaining(['fire', 'water', 'grass']))

        expect(screen.queryByTestId('test-options')).not.toBeInTheDocument()
        
        const selectButton = screen.getByTestId('test-select')

        expect(selectButton).toBeInTheDocument()

        fireEvent.click(selectButton)

        const optionsContainer = screen.getByTestId('test-options');
        expect(optionsContainer).toBeInTheDocument();

        types.forEach((type) => {
            expect(screen.getByText(type)).toBeInTheDocument();
        });

    })

    it('ao renderizar a lista do select, quando clicamos em um item, a função passada como prop deve ser disparada', async () => {
        
        const filterPokemons = jest.fn()
        
        render(<DescriptionProject dinamicSelect={[]} filteringPokemons={filterPokemons}  />)
        
        expect(screen.queryByTestId('test-options')).not.toBeInTheDocument()
        
        const selectButton = screen.getByTestId('test-select')
        fireEvent.click(selectButton)
                    
        const optionsContainer = screen.getByTestId('campo-todos')
        expect(optionsContainer).toBeInTheDocument();
                        
        fireEvent.click(optionsContainer)
                    
        expect(filterPokemons).toHaveBeenCalledWith('todos')

    })

})