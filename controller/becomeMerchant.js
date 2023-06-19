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

    if (duplicateMail.length > 0) {
      return res.send({ error: " Email already exists" });
    } else {
      let store = new Store({
        storeName,
        officialEmail,
        officialPhone,
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
        {new:true}
      );
      return res.send({ success: " Congratulations. Now you are a merchant " });
    }
  }
};
module.exports = { becomeMerchantController };
