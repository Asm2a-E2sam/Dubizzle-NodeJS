const categoryModel = require("../models/categories");

async function createCategory(req, res) {
  try {
    const newCategory = await categoryModel.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

async function getAllCategories(req, res) {
  try {
    const Categories = await categoryModel.find();
    res.status(201).json(Categories);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

async function getCategory(req, res) {
  var id = req.params.id;
  try {
    const Category = await categoryModel.findById(id);
    if (!Category) {
      throw new Error("Category not found");
    }
    res.status(201).json(Category);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

async function updateCategory(req, res) {
  var id = req.params.id;
  var categoryName = req.body.name;

  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate({ _id: id },{ name: categoryName },{ new: true }); 
    //  const updatedCategory = await categoryModel.updateOne({ _id: id },{ name: categoryName });
    res.status(201).json(updatedCategory);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

async function deleteCategory(req, res) {
  var id = req.params.id;
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(id);
    if (!deletedCategory) {
      throw new Error("Category not found");
    }
    res.status(201).json(deletedCategory);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
