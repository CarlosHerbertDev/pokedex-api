import { http, HttpResponse } from "msw";

export const handlers = [
  // Primeiro request: Lista de Pokémons
  http.get("https://pokeapi.co/api/v2/pokemon", async () => {
    console.log("🟡 Interceptado pelo MSW! (Lista de Pokémons)");

    return HttpResponse.json({
      count: 2,
      results: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    });
  }),

  // Segundo request: Detalhes de cada Pokémon
  http.get("https://pokeapi.co/api/v2/pokemon/:id", async ({ params }) => {
    console.log(`🟡 Interceptado pelo MSW! (Detalhes do Pokémon: ${params.id})`);

    if (params.id === "25") {
      return HttpResponse.json({
        name: "pikachu",
        sprites: {
          other: {
            dream_world: {
              front_default: "https://example.com/pikachu.svg",
            },
          },
        },
        types: [{ type: { name: "electric" } }],
      });
    }

    if (params.id === "1") {
      return HttpResponse.json({
        name: "bulbasaur",
        sprites: {
          other: {
            dream_world: {
              front_default: "https://example.com/bulbasaur.svg",
            },
          },
        },
        types: [{ type: { name: "grass" } }],
      });
    }

    return HttpResponse.json({ message: "Not found" }, { status: 404 });
  }),
];
