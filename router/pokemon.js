import { Router } from "express";
import { getAllPokemon, getOneDetailOfOnePokemon, getOnePokemonByIdOrName } from "../controller/pokemon";

export const pokemonRouter = Router();

pokemonRouter
    .route('/')
    .get(getAllPokemon)
    .all((req, res) => {res.status(401).json({error: req.error})});

pokemonRouter
    .route('/:id')
    .get(getOnePokemonByIdOrName)
    .all((req, res) => {res.status(401).json({error: req.error})});

pokemonRouter
    .route('/:id/:info')
    .get(getOneDetailOfOnePokemon)
    .all((req, res) => {res.status(401).json({error: req.error})});