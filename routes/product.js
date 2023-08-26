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

router.get("/subCategoryID/:subCategoryID", getProductByCategoryID);

router.get("/seller/:seller", getProductBySellerID);

router.get("/condition/:condition", getProductByCondition);

router.get("/location/:location", getProductByLocation);

router.get("/title/:title", getProductByTitle);

router.get("/page/:page", getProductsByPage);

router.get('/:min/:max', getProductByPrice);

module.exports = router;

