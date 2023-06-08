const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const customerSchema = new mongoose.Schema(
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
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    // customerAddresses: [
    //   address: {
    //     isPrimary: {
    //       type: String,
    //     },
    //     location: {
    //       type: Array,
    //       required: true,
    //     },
    //     cityId: {
    //       type: Array,
    //       required: true,
    //     },
    //     deletedAt: {
    //       type: Date,
    //       default: null,
    //     },
    //   },
    // ],
    customerAddresses: [
      {
        address: {
          type: String,
        },
        isPrimary: {
          type: Boolean,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        cityId: {
          type: String,
          required: true,
        },
        deletedAt: {
          type: Date,
          default: null,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
