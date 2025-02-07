import { render, screen } from "@testing-library/react"
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context"
import { BrowserRouter } from "react-router-dom"
import { useContext } from "react"
import { IntroductinPokemons } from "../indroductin-pokemons"

let valueTheme

const TestComponent = () => {

    const { togglerTheme } = useContext(ThemeContext)

    valueTheme = togglerTheme

    return null;
}

const listPokemons = [
    {name: 'charmander', image:'https://imagecharmander.com'}, 
    {name: 'bulbasur', image:'https://imagebulbasur.com'}
    ]

const ProviderTheme = () => {

    return (
    <ThemeProvider >
        <TestComponent />
        <BrowserRouter>
                <IntroductinPokemons list={listPokemons} />
        </BrowserRouter>
    </ThemeProvider>
    )
}

describe('Filter Componente', () => {
    it('ao renderizar o componente deve receber os valores das props corretamente', () => {
        render(<ProviderTheme />)

        expect(listPokemons).toEqual(expect.arrayContaining([expect.objectContaining(
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

        listPokemons.forEach(pokemon => {
            expect(screen.getByText(pokemon.name)).toBeInTheDocument()
        })
    })
})