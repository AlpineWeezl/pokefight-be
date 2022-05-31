import { Router } from "express";
import {
  getAllScores,
  //getSingleScore,
  createNewScore,
  //deleteScore,
  //updateScore,
} from "../controllers/scoresController.js";

const scoresRouter = Router();

scoresRouter.route("/game/save").post(createNewScore);

scoresRouter.route("/game/leaderboard").get(getAllScores);

export default scores;
