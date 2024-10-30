const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const treeSchema = new Schema({
  treename: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

treeSchema.pre("save", async function (next) {
  this.treenamename = this.treename + "." + Date.now();
  next();
});

module.exports = mongoose.model("TreeCollection", treeSchema);
