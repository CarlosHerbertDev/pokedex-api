import axios from "axios";   

export async function createListPokemon(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
        return response?.data;
    } catch (error) {
        console.error('Erro ao buscar lista dos Pokemons 😕', error);
    }
}

export async function getPokemonDetatils(source) {

    try {
        const details = 'https://pokeapi.co/api/v2/pokemon/'
        if(typeof source === 'string'){
            const response = await axios.get(`${details}${source}/`)
            return response?.data;    
        } else if(Array.isArray(source)) {
        
            const listDetails = source.map(async function (item) {
            const response = await axios.get(`${details}${item.name}`);
            return response?.data;
            });

            return await Promise.all(listDetails);
        }

    } catch (error) {
        console.error('Erro ao buscar informações dos Pokemons 😕', error);
    }
}

export async function getDetailsAbilities(link) {
        
    try {
        const dataAbilities = link.map(async function (abilities) {
            const response = await axios.get(abilities.ability.url);
            return response?.data;
        })
            return await Promise.all(dataAbilities)

    } catch (error) {
        console.error('Houve um erro ao buscar as habilidades do Pokemon 😕', error);
    }

}