const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
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
  subCategory: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("Category", categorySchema);
