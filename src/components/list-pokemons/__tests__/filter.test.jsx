import { render, screen, fireEvent } from "@testing-library/react"
import { DescriptionProject } from "../description-project"
import { ListPokemons } from "../list-pokemons"
import { FilterPokemons } from "../filter-pokemons"

describe('Description Componente', () => {

    it('teste', () => {
         const teste = [{name: 'aa', image:'https:image.com'}, {name: 'ba', image:'https:image.com'}]
        render(<FilterPokemons filteredPokemons={teste} />)

    })

})