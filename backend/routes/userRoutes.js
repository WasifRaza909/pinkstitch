const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
} = require("../controllers/userController.js");
const router = express.Router();

router
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/login", loginUser)
  .post("/", registerUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
