import { http, HttpResponse } from "msw";

let reQuest = 0

export const handlers = [
  
  http.get("https://pokeapi.co/api/v2/pokemon", async () => {
    reQuest++
    if (reQuest >= 3) {
    return HttpResponse.json({
      count: 3,
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
  http.get("https://pokeapi.co/api/v2/pokemon/:id", async ({ params }) => {
if ( reQuest >= 3) {
  if (params.id === "25") {
    return HttpResponse.json({
      name: "pikachu",
      id: 25,
      sprites: {
        other: {
          dream_world: {
            front_default: "https://example.com/pikachu.svg",
          },
        },
      },
      types: [{ type: { name: "electric" } }],
      moves: [{ move: { name: "thunderbolt" } }],
      abilities: [
        { ability: { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" } }
      ],
    });
  }

  if (params.id === "1") {
    return HttpResponse.json({
      name: "bulbasaur",
      id: 1,
      sprites: {
        other: {
          dream_world: {
            front_default: "https://example.com/bulbasaur.svg",
          },
        },
      },
      types: [{ type: { name: "grass" } }],
      moves: [{ move: { name: "razor-wind" } }],
      abilities: [
        { ability: { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/"} }
      ],
    });
  }

  if (params.id === "5") {
    return HttpResponse.json({
      name: "charizard",
      id: 5,
      sprites: {
        other: {
          dream_world: {
            front_default: "https://example.com/charizard.svg",
          },
        },
      },
      types: [{ type: { name: "fire" } }],
      moves: [{ move: { name: "mega-punch" } }],
      abilities: [
        { ability: { name: "blaze", url: "https://pokeapi.co/api/v2/ability/66/"} }
      ],
    });
  }
}

if (params.id === "25") {
  return HttpResponse.json({
    name: "pikachu",
    id: 25,
    sprites: {
      other: {
        dream_world: {
          front_default: "https://example.com/pikachu.svg",
        },
      },
    },
    types: [{ type: { name: "electric" } }],
    moves: [{ move: { name: "thunderbolt" } }],
    abilities: [
      { ability: { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" } }
    ],
  });
}

if (params.id === "1") {
  return HttpResponse.json({
    name: "bulbasaur",
    id: 1,
    sprites: {
      other: {
        dream_world: {
          front_default: "https://example.com/bulbasaur.svg",
        },
      },
    },
    types: [{ type: { name: "grass" } }],
    moves: [{ move: { name: "thunderbolt" } }],
    abilities: [
      { ability: { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/"} }
    ],
  });
}


http.get("https://pokeapi.co/api/v2/ability/:id/", async ({params}) => {

  if (params.id === 9) {
    return HttpResponse.json({
        
      name: "static",
      flavor_text_entries: [
        {
          language: { name: "en" },
          flavor_text: "Powers up Grass-type moves in a pinch."
        }
      ]
    })
  }

  if (params.id === 66) {
    return HttpResponse.json({
        
      name: "blaze",
      flavor_text_entries: [
        {
          language: { name: "en" },
          flavor_text: "Ups FIRE moves in a pinch."
        }
      ]
    })
  }

  if (params.id === 65) {
    return HttpResponse.json({
        
      name: "overgrow",
      flavor_text_entries: [
        {
          language: { name: "en" },
          flavor_text: "Ups GRASS moves in a pinch."
        }
      ]
    })
  }
    
})

    return HttpResponse.json({ message: "Not found" }, { status: 404 });
  }),
];
