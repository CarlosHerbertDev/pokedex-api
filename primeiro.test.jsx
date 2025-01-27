import { fireEvent, render, screen } from "@testing-library/react"
import { HeaderOfComponents } from "./src/components/header/header-of-components"
import { Logo } from "./src/components/header/styles";
import { ThemeProvider } from "./src/contexts/theme-context";



const ProviderThemes = () => {
    return (
        <ThemeProvider>
            <HeaderOfComponents />
        </ThemeProvider>


)

}


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}));
  

describe("Header Component", () => {

    it('should render Header with Pokedex API', () => {

        render(<HeaderOfComponents />);

        screen.getByText('Pokédex API');


    });

    it("ao clicar no botão logo, o scroll deve ir para o topo da pagina ", () => {

        window.scrollTo = jest.fn();




        // useState.mockImplementationOnce(() => ['', setIsActive]);
        
        render(<HeaderOfComponents />)


        const logo = screen.getByTestId('scroll-top')

        const DarkLight = screen.getByTestId('change-theme')

        fireEvent.click(logo)
        // fireEvent.click(DarkLight)


        
        expect(window.scrollTo).toHaveBeenCalledWith(100, 0);
    })

});

