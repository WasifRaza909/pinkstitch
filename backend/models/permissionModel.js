const mongoose = require("mongoose");

const permissionsSchema = new mongoose.Schema({
  permission: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Permission", permissionsSchema);
