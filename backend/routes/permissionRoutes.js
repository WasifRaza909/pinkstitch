const express = require("express");
const router = express.Router();
const {
  createPermission,
  getPermissions,
} = require("../controllers/permissionController");

router.post("/", createPermission).get("/", getPermissions);

module.exports = router;
