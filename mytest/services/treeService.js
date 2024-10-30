const treeRepository = require("../repositories/treeRepository");

exports.getAll = () => {
  return treeRepository.findAll();
};

exports.getDetail = (id) => {
  return treeRepository.findById(id);
};

exports.store = async (storeData) => {
  // check trùng lặp.
  // mã hoá dữ liệu.
  // storeData.createdAt = Date.now();
  return treeRepository.save(storeData);
};

exports.update = async (id, updateData) => {
  const existingTree = await treeRepository.findById(id);
  if (!existingTree) {
    throw new Error("Account is not found");
  }
  // lấy ra bản ghi cũ và thay đổi giá trị mới.
  existingAccount.password = updateData.password;
  return treeRepository.update(existingAccount);
};

exports.delete = async (id) => {
  const existingTree = await treeRepository.findById(id);
  if (!existingTree) {
    throw new Error("Account is not found");
  }
  // existingAccount.status = AccountStatus.DELETED; // enum
  return treeRepository.update(existingAccount);
};
