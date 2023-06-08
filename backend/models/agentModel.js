const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    contact: {
      type: String,
      validate: {
        validator: function (value) {
          const regex =
            /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
          return regex.test(value);
        },
        message: "Invalid phone number format",
      },
    },
    expertise: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    nic: {
      type: String,
      required: true,
      trim: true,
    },
    cityId: {
      type: mongoose.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(), // Generate a new ObjectId as the default value
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Agent", agentSchema);
