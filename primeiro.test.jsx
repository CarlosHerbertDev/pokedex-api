import { fireEvent, render, screen } from "@testing-library/react"
import { HeaderOfComponents } from "./src/components/header/header-of-components"
import { Logo } from "./src/components/header/styles";

describe("Header Component", () => {

    it('should render Header with Pokedex API', () => {

        render(<HeaderOfComponents />);

        screen.getByText('Pokédex API');


    });

    it("should render Header initial scroll position", () => {
        const scrollToMock = jest.fn();
        global.scrollTo = scrollToMock;
        const { getByTestId  } = render(<Logo data-testid="logo" onClick={() => {window.scrollTo}}></Logo>)


        const logo = getByTestId('logo')

        fireEvent.click(logo)
        
        expect(scrollToMock).toHaveBeenCalledWith(100, 0);
    })

});

