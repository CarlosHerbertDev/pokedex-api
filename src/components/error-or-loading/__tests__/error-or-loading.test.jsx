import { render, screen } from "@testing-library/react"
import { ErrorOrLoadingHandling } from "../error-or-loading-handling"


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

    })