import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { createListPokemon, getPokemonDetatils, getDetails, getDetailsAbilities } from "./services"; 

const mock = new MockAdapter(axios);

describe("Testes das chamadas de API", () => {

  afterEach(() => {
    mock.reset(); // Reseta os mocks após cada teste para evitar conflitos
  });

    it('deve buscar a lista de pokemons corretamente', async () => {

        const mockLlist =  {
            resullts: [{name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/"}]
        }

        mock.onGet('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10').reply(200, mockLlist)

        const data = await createListPokemon(0)

        expect(data).toEqual(mockLlist)
    })

//   it("Deve buscar a lista de Pokémons corretamente", async () => {
//     const mockData = {
//       results: [{ name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" }]
//     };

//     mock.onGet("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10").reply(200, mockData);

//     const data = await createListPokemon(0);

//     expect(data).toEqual(mockData);
//   });

//   it("Deve buscar os detalhes dos Pokémons", async () => {
//     const mockData = {
//       name: "pikachu",
//       id: 25
//     };

//     mock.onGet("https://pokeapi.co/api/v2/pokemon/25/").reply(200, mockData);

//     const data = await getDetails(25);

//     expect(data).toEqual(mockData);
//   });

//   it("Deve buscar os detalhes das habilidades corretamente", async () => {
//     const mockAbilities = [
//       {
//         ability: { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" }
//       }
//     ];

//     const mockAbilityDetails = {
//       name: "static",
//       flavor_text_entries: [{ language: { name: "en" }, flavor_text: "Paralyzes on contact." }]
//     };

//     mock.onGet("https://pokeapi.co/api/v2/ability/9/").reply(200, mockAbilityDetails);

//     const data = await getDetailsAbilities(mockAbilities);

//     expect(data).toEqual([mockAbilityDetails]);
//   });

});