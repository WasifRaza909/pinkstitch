const Role = require("../models/roleModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Create Role
// @route   POST /api/roles
// @access  Private
const createRole = asyncHandler(async (req, res) => {
  const { role } = req.body;

  const rol = await Role.create({
    role,
  });

  if (rol) {
    res.status(201).json(rol);
  } else {
    res.status(400);
    throw new Error("Invalid role");
  }
});

module.exports = {
  createRole,
};
