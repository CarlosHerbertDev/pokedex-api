import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", async ({ request }) => {
    console.log("🟡 Interceptado pelo MSW!", request.url);
    return HttpResponse.json({
      count: 2,
      results: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    });
  }),

  http.get("https://pokeapi.co/api/v2/pokemon/:name", async ({ params }) => {
    const { name } = params;

    const pokemonData = {
      pikachu: {
        name: "pikachu",
        sprites: { other: { dream_world: { front_default: "pikachu.png" } } },
        types: [{ type: { name: "electric" } }],
      },
      bulbasaur: {
        name: "bulbasaur",
        sprites: { other: { dream_world: { front_default: "bulbasaur.png" } } },
        types: [{ type: { name: "grass" } }],
      },
    };

    return HttpResponse.json(pokemonData[name] || { message: "Not found" });
  }),
];