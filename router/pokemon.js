import { Router } from "express";
import { getAllPokemon, getOneDetailOfOnePokemon, getOnePokemonByIdOrName } from "../controller/pokemon.js";
import { getJSONdata } from "../middlewares/jsonFile.js";

export const pokemonRouter = Router();

pokemonRouter
    .route('/')
    .get(getJSONdata, getAllPokemon)
    .all((req, res) => {res.status(401).json({error: req.error})});

pokemonRouter
    .route('/:id')
    .get(getOnePokemonByIdOrName)
    .all((req, res) => {res.status(401).json({error: req.error})});

pokemonRouter
    .route('/:id/:info')
    .get(getOneDetailOfOnePokemon)
    .all((req, res) => {res.status(401).json({error: req.error})});