const express = require("express");
const {
  createRolePermission,
  updateRolePermission,
  deleteRolePermission,
  getRolePermissionById,
  getRolePermissions,
} = require("../controllers/rolePermissionController.js");
const router = express.Router();

router
  .post("/", createRolePermission)
  .put("/:id", updateRolePermission)
  .delete("/:id", deleteRolePermission)
  .get("/:id", getRolePermissionById)
  .get("/", getRolePermissions);

module.exports = router;
