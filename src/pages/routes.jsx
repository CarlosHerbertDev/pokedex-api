import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { RenderListPokemons } from "./renderListPokemons"
import { RenderDetailsPokemons } from "./renderDetailsPokemons"

HashRouter

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <RenderListPokemons /> } />
            <Route exact path='/:id' element={ <RenderDetailsPokemons /> } />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }