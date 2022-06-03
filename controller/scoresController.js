import Score from "../models/scores.js";

export const getAllScores = async (req, res) => {
  try {
    const allScores = await Score.find({});
    console.log('Bis hier funktioniert es');
    console.log(allScores);
    res.status(200).json({ scores: allScores });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleScore = async (req, res) => {
  try {
    const { id } = req.params;
    const singleScore = await Score.findById(id);
    res.status(200).json(singleScore);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createNewScore = async (req, res) => {
  try {
    console.log(req.body);
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
    const modifiedScore = await User.findByIdAndUpdate(
      id,
      { player, pokemon, score, rounds },
      { new: true }
    );
    res.status(200).json(modifiedScore);
  } catch (error) {
    res.status(500).json(error);
  }
};


