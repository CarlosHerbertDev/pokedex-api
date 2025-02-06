import { http, HttpResponse } from "msw";

let reQuest = 0

export const handlers = [
  
  http.get("https://pokeapi.co/api/v2/pokemon", async () => {
    reQuest++
    if (reQuest >= 3) {
    return HttpResponse.json({
      ount: 3,
    results: [
      { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    ],


    });
  }
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
if ( reQuest >= 3) {
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

http.get("https://pokeapi.co/api/v2/ability/65/", async () => {

    return HttpResponse.json({
        
        name:"overgrow",
        flavor_text_entries: [{
          flavor_text: 'Powers up Grass-type moves in a pinch.'
        }]

    })


})





    return HttpResponse.json({ message: "Not found" }, { status: 404 });
  }),
];
