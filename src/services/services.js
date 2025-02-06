import axios from "axios";   

export async function createListPokemon(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
        return response?.data;


    } catch (error) {
        console.error('Erro ao buscar lista dos Pokemons 😕', error);
    }
}

export async function getPokemonDetatils(namePokemon) {
    try {
        const listDetails = namePokemon.map(async function (item) {
            const response = await axios.get(item.url);
            return response?.data;
        });

        return await Promise.all(listDetails);

    } catch (error) {
        console.error('Erro ao buscar informações dos Pokemons 😕', error);
    }
}

export async function getDetails(id) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        return response?.data;    
    } catch (error) {
        console.error('Houve um erro ao buscar as informações detalhadas do Pokemon 😕', error);
    }
}



export async function getDetailsAbilities(link) {
        console.log(link)
        
    try {
        const dataAbilities = link.map(async function (abilities) {
            const response = await axios.get(abilities.ability.url);
            console.log(response.data)
            
            return response?.data;
        })
            return await Promise.all(dataAbilities)

    } catch (error) {
        console.error('Houve um erro ao buscar as habilidades do Pokemon 😕', error);
    }

}