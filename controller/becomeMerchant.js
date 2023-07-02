const Store = require("../models/merchantModels");
const User = require("../models/userModels");

const becomeMerchantController = async (req, res) => {
  const {
    storeName,
    officialEmail,
    officialPhone,
    address,
    owner,
    products,
    createdAt,
    updatedAt,
    status,
  } = req.body;
  if (!storeName) {
    return res.send({ error: " Store Name is Required" });
  } else if (!officialEmail) {
    return res.send({ error: " Email is Required" });
  } else if (!officialPhone) {
    return res.send({ error: " Phone is Required" });
  } else if (!address) {
    return res.send({ error: " Address is Required" });
  } else {
    let duplicateMail = await Store.find({ officialEmail });
    let duplicateStoreName = await Store.find({ storeName });

    if (duplicateMail.length > 0) {
      return res.send({ error: " Email already is exists" });
    } else if (duplicateStoreName.length > 0) {
      return res.send({ error: " Store Name is already exists" });
    } else {
      let store = new Store({
        storeName,
        officialEmail,
        officialPhone,
        status,
        address,
        owner,
        products,
        createdAt,
        updatedAt,
      });
      store.save();
      await User.findOneAndUpdate(
        { _id: store.owner },
        { role: "merchant", merchant: true },
        { new: true }
      );
      return res.send({
        success: " Congratulations. Now you are a merchant 🎉",
      });
    }
  }
};

const merchantStatus = async (req, res) => {
  const { storeName, status } = req.body;
  if (status == "waiting" || status == "rejected") {
    await Store.findOneAndUpdate({ storeName }, { status }, { new: true });
  } else if (status == "approved") {
    await Store.findOneAndUpdate({ storeName }, { status }, { new: true });
  }
  res.send({
    success: " Store status updated Successfully",
  });
};
module.exports = { becomeMerchantController, merchantStatus };
