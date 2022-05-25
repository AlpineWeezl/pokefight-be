import 'dotenv/config';
import express from "express";
import { pokemonRouter } from './router/pokemon.js';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 5000;

// ###############################################
// middlewares

app.use(express());
app.use(cors());

// ###############################################
// routers

app.use('/api/pokemon', pokemonRouter)

app.listen(port, () => {console.log(`The server is listening on port ${port}`)})