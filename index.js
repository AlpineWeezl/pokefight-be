import 'dotenv/config';
import "./db/mongoClient.js";
import express from "express";
import { pokemonRouter } from './router/pokemon.js';
import { scoresRouter } from './router/scores.js';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 5000;

// ###############################################
// middlewares

app.use(express());
app.use(express.json());
app.use(cors());

// ###############################################
// routers

app.use('/api/pokemon', pokemonRouter)
app.use('/api/highscores', scoresRouter)

app.listen(port, () => {console.log(`The server is listening on port ${port}`)})









// ###############################################
// mongoDB Testconnection

/*
import { MongoClient, ObjectId } from "mongodb";
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "pokefight";

try {
  await client.connect();
  console.log("Verbunden mit Mongo");
} catch (error) {
  console.log(error);
}
const db = client.db(dbName);
*/ 