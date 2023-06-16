const RolePermission = require("../models/rolePermissionModel.js");
const Role = require("../models/roleModel.js");
const Permission = require("../models/permissionModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Create Role Permission
// @route   POST /api/rolepermissions
// @access  Private
const createRolePermission = asyncHandler(async (req, res) => {
  const { role, permissions } = req.body;

  const rol = await Role.create({
    role,
  });

  const permissionsArr = [];

  if (permissions && permissions.length > 0) {
    for (const per of permissions) {
      const result = await Permission.find({ permission: per });

      result.map((res) => permissionsArr.push(res._id));
    }
  }

  const rolePermission = await RolePermission.create({
    role: rol._id,
    permissions: permissionsArr,
  });

  if (rolePermission) {
    res.status(201).json(rolePermission);
  } else {
    res.status(400);
    throw new Error("Invalid Role Permission");
  }
});

// @desc    Update Role Permission
// @route   PUT /api/rolepermissions/:id
// @access  Private
const updateRolePermission = asyncHandler(async (req, res) => {
  const rolePermission = await RolePermission.findById(req.params.id);

  if (!rolePermission) {
    res.status(404);
    throw new Error("Permission & role not found");
  }
  const { role, permissions } = req.body;

  const rol = await Role.findByIdAndUpdate(
    rolePermission.role,
    { role },
    {
      new: true,
    }
  );

  const permissionsArr = [];

  if (permissions && permissions.length > 0) {
    for (const per of permissions) {
      const result = await Permission.find({ permission: per });

      result.map((res) => permissionsArr.push(res._id));
    }
  }

  const updatedPermissionAsRole = await RolePermission.findByIdAndUpdate(
    req.params.id,
    {
      role: rol._id,
      permissions: permissionsArr,
    },
    {
      new: true,
    }
  );

  if (updatedPermissionAsRole) {
    res.status(201).json(updatedPermissionAsRole);
  } else {
    res.status(400);
    throw new Error("Invalid role permission");
  }
});

// @desc    Delete Role Permission
// @route   DELETE /api/rolepermissions/:id
// @access  Private
const deleteRolePermission = asyncHandler(async (req, res) => {
  const rolePermission = await RolePermission.findById(req.params.id);

  if (rolePermission) {
    await RolePermission.deleteOne({ _id: req.params.id });
    await Role.deleteOne({ _id: rolePermission.role });
    res.json({ message: "Permission & Role removed" });
  } else {
    res.status(404);
    throw new Error("Permission & role not found");
  }
});

// @desc    Get Role Permission
// @route   GET /api/rolepermissions/:id
// @access  Private
const getRolePermissionById = asyncHandler(async (req, res) => {
  const rolePermission = await RolePermission.findById(req.params.id);

  if (rolePermission) {
    const role = await Role.findById(rolePermission.role);
    const permissions = [];

    for (const permissionId of rolePermission.permissions) {
      const permission = await Permission.findById(permissionId);
      permissions.push(permission);
    }

    res.status(200).json({
      _id: rolePermission._id,
      role,
      permissions,
    });
  } else {
    res.status(404);
    throw new Error("Permission & role not found");
  }
});

// @desc    Get Role Permissions
// @route   GET /api/rolepermissions
// @access  Private
const getRolePermissions = asyncHandler(async (req, res) => {
  const rolePermissions = await RolePermission.find();
  const rolePermissionsArr = [];

  if (rolePermissions) {
    for (const rolePermission of rolePermissions) {
      const role = await Role.findById(rolePermission.role);
      const permissions = [];
      for (const permissionId of rolePermission.permissions) {
        const permission = await Permission.findById(permissionId);
        permissions.push(permission);
      }
      const rolePermissionObj = {
        _id: rolePermission.id,
        role,
        permissions,
      };

      rolePermissionsArr.push(rolePermissionObj);
    }

    res.status(200).json(rolePermissionsArr);
  } else {
    res.status(404);
    throw new Error("Permission & role not found");
  }
});

module.exports = {
  createRolePermission,
  updateRolePermission,
  deleteRolePermission,
  getRolePermissionById,
  getRolePermissions,
};
