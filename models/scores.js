
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const scoreSchema = new Schema(
  {
    player: { type: String, required: true },
    pokemon: { type: String },
    score: { type: Number },
    rounds: { type: Number },
  }
);

export default model("Score", scoreSchema);
