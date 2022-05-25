import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// ########################################################
// get Data from JSON File
export const getJSONdata = (req, res, next) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const pokedexPath = path.join(__dirname, '../pokedex.json');

    readFile(pokedexPath, async (err, data) => {
        try {
            req.jsonData = await JSON.parse(data);
            next();
        } catch (error) {
            console.log(error);
        }
    });

    // const jsonData = JSON.parse(readFileSync(pokedexPath));
    // return jsonData;
}