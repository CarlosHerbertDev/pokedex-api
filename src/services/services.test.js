import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { createListPokemon, getPokemonDetatils, getDetails, getDetailsAbilities } from "./services"; 

const mock = new MockAdapter(axios);

describe("Testes das chamadas de API", () => {

  afterEach(() => {
    mock.reset();
  });

    it('deve buscar a lista de pokemons corretamente', async () => {

        const mockLlist =  {
            resullts: [{name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/"}]
        }

        mock.onGet('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10').reply(200, mockLlist)

        const data = await createListPokemon(0)

        expect(data).toEqual(mockLlist)
    })

    it('deve buscar os detalhes do pokemon corretamente', async () => {

      const mockDetails = {
        name: "pikachu",
        id: 25
      }

      mock.onGet('https://pokeapi.co/api/v2/pokemon/25/').reply(200, mockDetails)

      const data = await getPokemonDetatils(25)

      expect(data).toEqual(mockDetails)

    })

    it('deve buscar os detalhes do pokemon corretamente', async () => {

      const mockAbilitiesDetails = {
        name: "overgrow",
        flavor_text_entries: [{language: { name: "en" },flavor_text: "Ups GRASS moves in a pinch."}]
      }


      const mockAbilities = [
              {
                ability: { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" }
              }
            ];
          

      mock.onGet("https://pokeapi.co/api/v2/ability/9/").reply(200, mockAbilitiesDetails)

      const data = await getDetailsAbilities(mockAbilities)

      expect(data).toEqual([mockAbilitiesDetails])

    })

});