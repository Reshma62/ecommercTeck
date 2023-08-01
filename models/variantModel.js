const mongoose = require("mongoose");

const { Schema } = mongoose;

let variantSchema = new Schema({

  color: {
    type: String,
  },
  size: {
    type: String,
  },
  ram: {
    type: String,
  },
  storage: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  quantity: {
    type: String,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  updatedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Variant", variantSchema);
