
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const scoreSchema = new Schema({
  player: {type: String, required: true },
  pokemon: {type: String, required: true },
  score: {type: Number, required: true },
  rounds: {type: Number, required: true },
});

export default model("Score", scoreSchema);
