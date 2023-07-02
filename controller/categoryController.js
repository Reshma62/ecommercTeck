const Category = require("../models/categoryModels");
const SubCategory = require("../models/subCategoryModels");

const createCategory = async (req, res) => {
  const {
    name,
    description,
    isActive,
    status,
    subCategory,
    createdAt,
    updatedAt,
  } = req.body;

  if (!name) {
    return res.send({ error: " Category name is required" });
  } else {
    let duplicateCategory = await Category.find({ name });
    if (duplicateCategory.length > 0) {
      return res.send({ error: " Category  is already exists" });
    } else {
      const category = new Category({
        name,
        description,
        isActive,
        status,
        subCategory,
        createdAt,
        updatedAt,
      });
      category.save();

      res.send({ success: " Category created successfully" });
    }
  }
};
const categoryStatus = async (req, res) => {
  const { name, status } = req.body;
  if (status == "waiting" || status == "rejected") {
    await Category.findOneAndUpdate(
      { name },
      { isActive: false, status },
      { new: true }
    );
  } else if (status == "approved") {
    await Category.findOneAndUpdate(
      { name },
      { isActive: true, status },
      { new: true }
    );
  }
  res.send({ success: "  Category Status Updated successfully" });
};

const createSubCategory = async (req, res) => {
  const {
    name,
    description,
    isActive,
    status,
    category,
    createdAt,
    updatedAt,
  } = req.body;

  if (!name) {
    return res.send({ error: "Sub Category name is required" });
  } else {
    let duplicateSubCategory = await SubCategory.find({ name });
    if (duplicateSubCategory.length > 0) {
      return res.send({ error: "Sub Category  is already exists" });
    } else {
      const subCategory = new SubCategory({
        name,
        description,
        isActive,
        status,
        category,
        createdAt,
        updatedAt,
      });
      subCategory.save();
      await Category.findOneAndUpdate(
        { _id: subCategory.category },
        { $push: { subCategory: subCategory._id } },
        { new: true }
      );

      res.send({ success: " Sub Category created successfully" });
    }
  }
};

const subCategoryStatus = async (req, res) => {
  const { name, status } = req.body;
  if (status == "waiting" || status == "rejected") {
    await SubCategory.findOneAndUpdate(
      { name },
      { isActive: false, status },
      { new: true }
    );
  } else if (status == "approved") {
    await SubCategory.findOneAndUpdate(
      { name },
      { isActive: true, status },
      { new: true }
    );
  }
  res.send({ success: " Sub Category Status Updated successfully" });
};

const getAllCategory = async (req, res) => {
  let allCategory = await Category.find({}).populate("subCategory");
  res.send(allCategory);
};
const getAllSubCategory = async (req, res) => {
  let allSubCate = await SubCategory.find({}).populate("category");
  res.send(allSubCate);
};
module.exports = {
  createCategory,
  createSubCategory,
  getAllCategory,
  getAllSubCategory,
  categoryStatus,
  subCategoryStatus,
};
