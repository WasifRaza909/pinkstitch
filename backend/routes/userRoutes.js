const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");
const router = express.Router();

router
  .post("/login", loginUser)
  .post("/", registerUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
