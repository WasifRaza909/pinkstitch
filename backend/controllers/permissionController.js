const Permission = require("../models/permissionModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Create Permission
// @route   POST /api/permissions
// @access  Private
const createPermission = asyncHandler(async (req, res) => {
  const { permission } = req.body;

  const per = await Permission.create({
    permission,
  });

  if (per) {
    res.status(201).json(per);
  } else {
    res.status(400);
    throw new Error("Invalid permission");
  }
});

// @desc    Get all Permissions
// @route   POST /api/permissions
// @access  Private
const getPermissions = asyncHandler(async (req, res) => {
  const permissions = await Permission.find();

  if (permissions) {
    res.status(200).json(permissions);
  } else {
    res.status(400);
    throw new Error("No Permission found");
  }
});

module.exports = {
  createPermission,
  getPermissions,
};
