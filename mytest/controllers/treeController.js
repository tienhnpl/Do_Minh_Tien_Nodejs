const treeService = require("../services/treeService");

exports.getAll = async (req, res) => {
  try {
    const accounts = await treeService.getAll();
    res.render("tree/list", { accounts });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addTree = async (req, res) => {
  try {
    res.render("tree/form");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.storeTree = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await treeService.store({ username, email, password });
    res.redirect("/trees");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
