import { render, screen, waitFor } from "@testing-library/react"
import { ListDetailsPokemons } from "../list-derails-pokemons"
import { BrowserRouter } from "react-router-dom"

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('list details component', () => {

    it('testando', async () => {
        render( <BrowserRouter>
                    <ListDetailsPokemons />
                </BrowserRouter>
            )
        
    })

})