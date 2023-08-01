const User = require("../models/userModels");
const Product = require("../models/productModel");
const Store = require("../models/merchantModels");
const Variant = require("../models/variantModel");

const securedProduct = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send({ error: "Unauthorized" });
  } else {
    const userId = req.headers.authorization.split("@")[1];
    const userPass = req.headers.authorization.split("@")[2];
    const existsUser = await User.find({ _id: userId });
    if (existsUser.length > 0) {
      if (userPass == process.env.MERCHANT_SECRET_KEY) {
        if (
          existsUser[0].role == "merchant" &&
          existsUser[0].merchant == true
        ) {
          return next();
        }
      } else {
        return res.send({ error: "You are not able to create product......" });
      }
    } else {
      return res.send({ error: "You are not able to create product" });
    }
  }
};

const createProduct = async (req, res) => {
  const { name, description, image, store } = req.body;

  if (!name) {
    return res.send({ error: "Product Name is required" });
  } else if (!description) {
    return res.send({ error: "Product description is required" });
  } else if (!image) {
    return res.send({ error: "Product image is required" });
  } else {
    /*  let existingProduct = await Product.find( { name } );
    if (existingProduct.length>0) {
      return res.send({ error: "Product  is exists." });
    } */
    let product = new Product({
      name,
      description,
      image,
      store,
    });
    product.save();
    await Store.findOneAndUpdate(
      { _id: product.store },
      { $push: { products: product._id } },
      { new: true }
    );
    return res.send({ success: "Product created successfully done" });
  }
};
const createVariant = async (req, res) => {
  const { color, size, ram, storage, image, quantity, price, product } =
    req.body;

  if (!product) {
    return res.send({ error: "Producet is required" });
  } else {
    let variant = new Variant({
      color,
      size,
      ram,
      storage,
      image,
      quantity,
      price,
      product,
    });
    variant.save();
    await Product.findOneAndUpdate(
      { _id: variant.product },
      { $push: { variants: variant._id } },
      { new: true }
    );
    return res.send({ success: "Variant created successfully done" });
  }
};
module.exports = { securedProduct, createProduct, createVariant };
