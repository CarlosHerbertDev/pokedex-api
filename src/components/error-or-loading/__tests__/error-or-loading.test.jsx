import { render, screen } from "@testing-library/react"
import { ErrorOrLoadingHandling } from "../error-or-loading-handling"
import { ThemeContext, ThemeProvider } from "../../../contexts/theme-context";
import { useContext } from "react";

let valueTheme


const ThemeTest = () => {
    
    const { togglerTheme } = useContext(ThemeContext)
    
    valueTheme = togglerTheme
    
    return null;
    
} 

const ProviderThemes = () => {
    return (
        <ThemeProvider>
            <ThemeTest />
            <ErrorOrLoadingHandling />
        </ThemeProvider>
    )
}

afterEach(() => {
    jest.restoreAllMocks();
  }); 

    describe('Error or Loanding Component', () => {

        it('ao dar um erro ou página carregar, exibir mensagem', () => {
            
            const messagem = 'carregaento ou erro'

            render (
                    <ErrorOrLoadingHandling>
                        {messagem}
                    </ErrorOrLoadingHandling>
                )

            const text = screen.getByTestId('error-or-loading')
            
            expect(text).toBeInTheDocument()
        })

        it('ao renderizar o componente, verificar se está sendo passado o nosso contexto', () => {
        
            render(<ProviderThemes />)
        
            expect(valueTheme).toBe('')
        
            })

    })