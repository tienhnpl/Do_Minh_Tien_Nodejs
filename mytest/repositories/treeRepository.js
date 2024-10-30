const tree = require("../models/tree");

exports.findAll = () => {
  return tree.find({});
};

exports.findById = (id) => {
  return tree.findOne({ _id: id }).exec();
};

exports.save = (insertData) => {
  const data = new tree(insertData);
  return data.save();
};

exports.update = (updateData) => {
  const updated = tree.update(updateData);
  return updated;
};

exports.hardDelete = (id) => {
  return tree.deleteOne({ _id: id });
};
