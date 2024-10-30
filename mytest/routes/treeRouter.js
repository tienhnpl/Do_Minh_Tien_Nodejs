var express = require("express");
var router = express.Router();
const treeController = require("../controllers/treeController");

router.get("/", function (req, res, next) {
  treeController.getAll(req, res);
});

router.get("/create", function (req, res, next) {
  treeController.addTree(req, res);
});

router.post("/store", async function (req, res, next) {
  await treeController.storeAccount(req, res);
});

module.exports = router;
