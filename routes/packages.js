const express = require("express");
var router = express.Router();
var {
  addPackages,
  getPackages,
  getpackage,
  updatePackages,
  deletePackages,
} = require(`../controllers/packages`);

router.route("/").post(addPackages)           // add new Packages
router.route("/").get(getPackages)            // get all Packages
router.route("/:id").get(getpackage)            // get all Packages
router.route("/:id").patch(updatePackages)    // Update Packages
router.route("/:id").delete(deletePackages)   //delete Packages


module.exports = router;