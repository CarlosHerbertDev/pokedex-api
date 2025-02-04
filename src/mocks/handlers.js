import { http, HttpResponse } from 'msw'; 

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemons', () => {
    return HttpResponse.json({

    pokemons: [
        {
            name: 'bulbasaur',
            image: 'bulbasaur.png',
            type: 'grass',
        },
        {
            name: 'charmander',
            image: 'charmander.png',
            type: 'fire',
        },
        {
            name: 'squartle',
            image: 'squartle.png',
            type: 'water',
        },
    ]
    });
  }),
];