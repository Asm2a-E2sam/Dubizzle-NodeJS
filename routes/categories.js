const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

router.post("/", createCategory);

router.get("/", getAllCategories);

router.get("/:id", getCategory);

router.patch("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
