const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Role", rolesSchema);
