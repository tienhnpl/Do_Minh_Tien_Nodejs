const treeService = require("../services/treeService");

exports.getAll = async (req, res) => {
  try {
    const accounts = await treeService.getAll();
    res.json(accounts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.storeAccount = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const saveData = await treeService.store({ username, email, password });
    res.status(201).json(saveData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
