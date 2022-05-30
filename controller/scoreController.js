import User from "../models/score.js";

export const getAllScores = async (req, res) => {
  try {
    const allScores = await Score.find();
    res.status(200).json({ scores: allScores });
  } catch (error) {
    res.status(500).json(err);
  }
};

export const getSingleScore = async (req, res) => {
  try {
    const { id } = req.params;
    const singleScore = await Score.findById(id);
    res.status(200).json(singleScore);
  } catch (error) {
    res.status(500).json(err);
  }
};

export const createNewScore = async (req, res) => {
  try {
    const { player, pokemon, score, rounds } = req.body;
    const newScore = await Score.create({ player, pokemon, score, rounds });
    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteScore = async (req, res) => {
  try {
    const { id } = req.params;
    await Score.findByIdAndDelete(id);
    res.status(200).send("Score successfully deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateScore = async (req, res) => {
  try {
    const { id } = req.params;
    const { player, pokemon, score, rounds } = req.body;
    const modifiedUser = await User.findByIdAndUpdate(
      id,
      { player, pokemon, score, rounds },
      { new: true }
    );
    res.status(200).json(modifiedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};


