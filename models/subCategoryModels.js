const mongoose = require("mongoose");

const { Schema } = mongoose;

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "waiting",
    enum: ["approved", "rejected", "waiting"],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("SubCategory", subCategorySchema);
