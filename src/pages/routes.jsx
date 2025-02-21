import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RenderListPokemons } from "./renderListPokemons"
import { RenderDetailsPokemons } from "./renderDetailsPokemons"

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <RenderListPokemons /> } />
            <Route exact path='/:name' element={ <RenderDetailsPokemons /> } />
        </Routes>
    </BrowserRouter>
)