import { http, HttpResponse } from "msw";

let reQuest = 0

export const handlers = [
  
  // Primeiro request: Lista de Pokémons
  http.get("https://pokeapi.co/api/v2/pokemon", async () => {
    reQuest++
    console.log('testando request', reQuest)
    if (reQuest === 5) {
    return HttpResponse.json({
      count: 2,
      results: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    });
  }
  return HttpResponse.json({
    count: 3,
    results: [
      { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    ],
  });

  }),

  // Segundo request: Detalhes de cada Pokémon
  http.get("https://pokeapi.co/api/v2/pokemon/:id", async ({ params }) => {
if ( reQuest === 5) {
  
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
}

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

if (params.id === "5") {
  return HttpResponse.json({
    name: "charizard",
    sprites: {
      other: {
        dream_world: {
          front_default: "https://example.com/charizard.svg",
        },
      },
    },
    types: [{ type: { name: "fire" } }],
  });
}

    return HttpResponse.json({ message: "Not found" }, { status: 404 });
  }),
];
