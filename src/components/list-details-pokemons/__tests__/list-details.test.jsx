import { render, screen, waitFor } from "@testing-library/react"
import { ListDetailsPokemons } from "../list-derails-pokemons"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context";
import { useContext } from "react";
import { server } from "../../../mocks/server";
import { http, HttpResponse } from "msw";

let valueTheme

const TestComponent = () => {

    const { togglerTheme } = useContext(ThemeContext)

    valueTheme = togglerTheme

    return null;
}

const renderDetails = (component, initialRoute = '/25') => {

    return render(
        <ThemeProvider>
          <TestComponent />
          <MemoryRouter initialEntries={[initialRoute]}>
            <Routes>
              <Route exact path="/:id" element={component} />
            </Routes>
          </MemoryRouter>
        </ThemeProvider>
      );
}

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('List Details Component', () => {
  
    it('ao renderizar, tema do contexto deve ser disponibilizado', () => {
        
        renderDetails(<ListDetailsPokemons />)
        
        expect(valueTheme).toBe('')
    })
    
    
    it('ao renderizar, se ocorrer um erro na chamada da API ao buscar detalhes dos pokémons, mostrar erro', async () => {
       
        server.use(
                http.get("https://pokeapi.co/api/v2/pokemon/:id", async () => {
                return HttpResponse.json({ message: "Not found" }, { status: 404 });
            })
        );

        renderDetails(<ListDetailsPokemons />)
        
        const erro =  await screen.findByText('Erro ao carregar detalhes do Pokemon 😕')
        
        expect(erro).toBeInTheDocument();
        
    })
    
    it('ao renderizar, se ocorrer um erro na chamada da API ao buscar abilities dos pokémons, mostrar erro', async () => {
       
        server.use(
                http.get("https://pokeapi.co/api/v2/ability/:id/", async () => {
                return HttpResponse.json({ message: "Not found" }, { status: 404 });
            })
        );

        renderDetails(<ListDetailsPokemons />)
        
        const erro =  await screen.findByText('Erro ao carregar detalhes do Pokemon 😕')
        
        expect(erro).toBeInTheDocument();
        
    })
    it('ao renderizar elementos devem aparecer na tela, se não estiverem disponíveis, mostrar mensagem de carregamento', async () => {

        renderDetails(<ListDetailsPokemons />)
           
        expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
        
        expect(await screen.findByText(/pikachu/i)).toBeInTheDocument()
        expect(await screen.findByText(/electric/i)).toBeInTheDocument()
        expect(await screen.findByText(/thunderbolt/i)).toBeInTheDocument()
        expect(await screen.findByText(/static/i)).toBeInTheDocument()
        expect(await screen.findByText(/Paralyzes on contact./i)).toBeInTheDocument();
    })
    it('ao renderizar a pagina deve exibir o botão de voltar para a listagem', async () => {
        
        renderDetails(<ListDetailsPokemons />)
    
        expect(await screen.findByText(/voltar/i)).toBeInTheDocument()
    })
})