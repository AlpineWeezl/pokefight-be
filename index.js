import 'dotenv/config';
import express from "express";
import { pokemonRouter } from './router/pokemon.js';

const app = express();

// ###############################################
// middlewares

app.use(express());

// ###############################################
// routers

app.use('/api/pokemon', pokemonRouter)

