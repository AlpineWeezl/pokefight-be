import { Router } from "express";
import { getAllPokemon, getOneDetailOfOnePokemon, getOnePokemonByIdOrName } from "../controller/pokemon.js";
import { getJSONdata } from "../middlewares/jsonFile.js";

export const pokemonRouter = Router();

pokemonRouter
    .route('/')
    .get(getJSONdata, getAllPokemon)
    .all((req, res) => {res.status(501).json({error: req.error})});

pokemonRouter
    .route('/:id')
    .get(getJSONdata, getOnePokemonByIdOrName)
    .all((req, res) => {res.status(501).json({error: req.error})});

pokemonRouter
    .route('/:id/:info')
    .get(getJSONdata, getOneDetailOfOnePokemon)
    .all((req, res) => {res.status(501).json({error: req.error})});