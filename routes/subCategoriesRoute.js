const express = require("express");
const router = express.Router();
const subCategoriesController = require("./../controllers/subCategoriesController");


router.route("/").get(subCategoriesController.getSubCategorys).post(subCategoriesController.createSubCategory);
router.route("/:id").get(subCategoriesController.getSubCategory).patch(subCategoriesController.updateSubCategory).delete(subCategoriesController.deleteSubCategory);


module.exports = router;
