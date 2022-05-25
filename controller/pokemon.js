
// ########################################################
// Basic CRUD Operations

// Read ---------------------------------------------------
// All ---------------
export const getAllPokemon = (req, res) => {
    try {
        if (req.json) {
            res.status(200).json(req.jsonData);
        } else {
            res.status(404).send("Pokémon not found!");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// One by id or name -
export const getOnePokemonByIdOrName = (req, res) => {
    const { id } = req.params;
    const pokedex = req.jsonData;

    if (id) {
        const pokemon = pokedex.find((pokemon) => id == pokemon.id || id.toLowerCase() == pokemon.name.english.toLowerCase());
        if (pokemon) {
            res.status(200).json(pokemon);
        } else {
            res.status(404).send("Pokémon not found!");
        }
    } else {
        res.status(500).send("Something went wrong!");
    }
}

// One Detail of one pokemon
export const getOneDetailOfOnePokemon = (req, res) => {
    const { id, info } = req.params;
    console.log(info);
    const pokedex = req.jsonData;

    if (id) {
        const pokemon = pokedex.find((pokemon) => id == pokemon.id || id.toLowerCase() == pokemon.name.english.toLowerCase());

        if (pokemon) {
            res.status(200).json({ info: pokemon[info] })
        } else {
            res.status(404).send("Pokémon not found!")
        }
    } else {
        res.status(500).send("Something went wrong!");
    }
}