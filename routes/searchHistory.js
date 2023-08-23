const express = require("express");
var router = express.Router();

var {
  getAllSearchHistories,
  addSearchHistories,
  updateSearchHistory,
  deleteSearchHistory,
} = require(`../controllers/searchHistory`);

router.route("/").get(getAllSearchHistories).post(addSearchHistories);

router.route("/:id").patch(updateSearchHistory).delete(deleteSearchHistory);

module.exports = router;
