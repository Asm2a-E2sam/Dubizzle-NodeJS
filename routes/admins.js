const express = require("express");
const router = express.Router();

const {
  createAdmin,
  getAllAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminByEmail,
} = require("../controllers/admins");

router.post("/", createAdmin);

router.get("/", getAllAdmins);
// router.route("/").get(getAllAdmins); 

router.get("/:id", getAdmin);

// router parameter
router.get("/email/:email", getAdminByEmail);

router.patch("/:id", updateAdmin);

router.delete("/:id", deleteAdmin);

module.exports = router;
