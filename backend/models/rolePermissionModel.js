const mongoose = require("mongoose");

const rolePermissionSchema = new mongoose.Schema(
  {
    role: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Role",
    },
    permissions: {
      type: Array,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RolePermission", rolePermissionSchema);
