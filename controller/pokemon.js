
// ########################################################
// Basic CRUD Operations

// Read ---------------------------------------------------
// All ---------------
export const getAllPokemon = (req, res) => {
    try {
        res.status(200).json(req.jsonData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// One by id or name -
export const getOnePokemonByIdOrName = (req, res) => {
    console.log(getJSONdata());
    
}

// One Detail of one pokemon
export const getOneDetailOfOnePokemon = (req, res) => {
    console.log(getJSONdata());
}



