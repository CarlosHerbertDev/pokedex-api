import { render, screen } from "@testing-library/react"
import { FilterPokemons } from "../filter-pokemons"
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context"
import { BrowserRouter } from "react-router-dom"
import { useContext } from "react"


let valueTheme

const TestComponent = () => {

    const { togglerTheme } = useContext(ThemeContext)

    valueTheme = togglerTheme

    return null;
}

const filteredPokemons = [
    {name: 'charmander', image:'https://imagecharmander.com'}, 
    {name: 'bulbasur', image:'https://imagebulbasur.com'}
    ]

const ProviderTheme = () => {

    return (
    <ThemeProvider >
        <TestComponent />
        <BrowserRouter>
                <FilterPokemons filteredPokemons={filteredPokemons} />
        </BrowserRouter>
    </ThemeProvider>
    )
}

describe('Filter Componente', () => {
    it('ao renderizar o componente deve receber os valores das props corretamente', () => {
        render(<ProviderTheme />)

        expect(filteredPokemons).toEqual(expect.arrayContaining([expect.objectContaining(
            {name: 'charmander', image:'https://imagecharmander.com'}, 
            {name: 'bulbasur', image:'https://imagebulbasur.com'}
            )]))

    })

    it('ao renderizar o componente deve receber o contexto de temas', () => {

        render(<ProviderTheme />)

        expect(valueTheme).toBe('')
    })

    it('ao renderizar, as props recebidasdevems ser exibidas na tela', () => {

        render(<ProviderTheme />)

        filteredPokemons.forEach(pokemon => {
            expect(screen.getByText(pokemon.name)).toBeInTheDocument()
        })
    })
})