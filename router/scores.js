import { Router } from "express";
import {
    getAllScores,
    createNewScore
} from "../controller/scoresController.js";

export const scoresRouter = Router({});

scoresRouter
    .route("/create")
    .post(createNewScore);

scoresRouter
    .route("/")
    .get(getAllScores);