import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RenderListPokemons } from "./renderListPokemons"
import { RenderDetailsPokemons } from "./renderDetailsPokemons"


const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <RenderListPokemons /> } />
            <Route exact path='/details-pokemons/:id' element={ <RenderDetailsPokemons /> } />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }