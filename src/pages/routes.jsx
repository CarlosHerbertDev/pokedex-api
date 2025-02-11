import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { RenderListPokemons } from "./renderListPokemons"
import { RenderDetailsPokemons } from "./renderDetailsPokemons"



const AppRoutes = () => (
    <HashRouter>
        <Routes>
            <Route exact path='/' element={ <RenderListPokemons /> } />
            <Route exact path='/:id' element={ <RenderDetailsPokemons /> } />
        </Routes>
    </HashRouter>
)

export { AppRoutes }