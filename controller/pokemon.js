import { readFile, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// ########################################################
// get Data from JSON File
const getJSONdata = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const pokedexPath = path.join(__dirname, '../pokedex.json')
    const jsonData = JSON.parse(readFileSync(pokedexPath));
    return jsonData;
}


// ########################################################
// Basic CRUD Operations

// Read ---------------------------------------------------
// All ---------------
export const getAllPokemon = (req, res) => {
    console.log(getJSONdata());
}

// One by id or name -
export const getOnePokemonByIdOrName = (req, res) => {
    console.log(getJSONdata());
    
}

// One Detail of one pokemon
export const getOneDetailOfOnePokemon = (req, res) => {
    console.log(getJSONdata());
}



