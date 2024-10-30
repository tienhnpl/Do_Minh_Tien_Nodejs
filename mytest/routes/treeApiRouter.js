var express = require("express");
var router = express.Router();
const treeApi = require("../apis/treeApi");

router.get("/", function (req, res, next) {
  treeApi.getAll(req, res);
});

router.post("/", async function (req, res, next) {
  await treeApi.storeAccount(req, res);
});

module.exports = router;
