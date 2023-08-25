const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const authController = require('../controllers/authController');

router
    .route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);
router
    .route("/:id")
    .get(userController.getUserById)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);

router.post('/login', authController.login);

module.exports = router;