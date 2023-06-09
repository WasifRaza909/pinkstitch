const User = require("../models/userModel.js");
const Role = require("../models/roleModel.js");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// @desc    Register User
// @route   POST /api/users
// @access  Private
const registerUser = asyncHandler(async (req, res) => {
  const { name, contact, email, password, status, role } = req.body;

  const roleObj = await Role.findOne({ role: role });

  const user = await User.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    contact,
    status,
    password,
    role: roleObj,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name,
      email,
      contact,
      status,
      role: roleObj,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Login User
// @route   POST /api/users/login
// @access  Private
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      user: user._id,
      name: user.name,
      email,
      contact: user.contact,
      status: user.status,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Update User
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const { name, contact, email, password, status, role } = req.body;

  const roleId = await Role.findOne({ role: role });

  const user = await User.findByIdAndUpdate(req.params.id, {
    name,
    email,
    contact,
    status,
    password,
    role: roleId,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name,
      email,
      contact,
      status,
      role: roleId,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    Delete User
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await User.deleteOne({ _id: req.params.id });

  res.status(200);
  res.json({
    _id: req.params.id,
    message: "User Deleted",
  });
});

// @desc    Get all users
// @route   GET /api/users/
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(400);
    throw new Error("No User found");
  }
});

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
};
