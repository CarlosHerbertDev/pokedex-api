import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { RenderListPokemons } from "./renderListPokemons"
import { RenderDetailsPokemons } from "./renderDetailsPokemons"

HashRouter

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <RenderListPokemons /> } />
            <Route exact path='/:name' element={ <RenderDetailsPokemons /> } />
        </Routes>
    </BrowserRouter>
)