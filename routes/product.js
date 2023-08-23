const express = require("express");
var router = express.Router();
var {
  addProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductByID,
  getProductByCategoryID,
  getProductBySellerID,
  getProductByCondition,
  getProductByLocation,
  getProductByTitle,
  getProductsByPage,
  getProductByPrice
} = require(`../controllers/product`);

router.route("/")
  .get(getAllProducts)
  .post(addProducts);

router.route("/:id")
  .patch(updateProduct)
  .delete(deleteProduct)
  .get(getProductByID);

router.get("/:subCategoryID", getProductByCategoryID);

router.get("/:seller", getProductBySellerID);

router.get("/:condition", getProductByCondition);

router.get("/:location", getProductByLocation);

router.get("/:title", getProductByTitle);

router.get("/:page", getProductsByPage);

router.get('/:min/:max', getProductByPrice);

module.exports = router;

