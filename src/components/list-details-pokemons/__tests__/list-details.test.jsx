import { render, screen } from "@testing-library/react"
import { ListDetailsPokemons } from "../list-derails-pokemons"
import { BrowserRouter } from "react-router-dom"


beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
});


describe('Description Componente', () => {

    it('ao renderizar, o contexto deve ser disponibilizado para o componente', () => {

        render (
            <BrowserRouter>
                <ListDetailsPokemons />
            </BrowserRouter>
            )

            console.log(screen.debug())
            
        
    })
})