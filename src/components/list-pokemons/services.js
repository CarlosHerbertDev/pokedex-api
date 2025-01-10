import axios from "axios";   

export async function createListPokemon(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar lista dos Pokemons 😕', error);
    }
}

export async function getPokemonDetatils(namePokemon) {
    try {
        const listDetails = namePokemon.map(async function (item) {
            const response = await axios.get(item.url);
            return response.data;
        });

        return await Promise.all(listDetails);

    } catch (error) {
        console.error('Erro ao buscar informações dos Pokemons 😕', error);
    }
}

