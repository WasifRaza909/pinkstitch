const express = require("express");
const router = express.Router();
const {
  createCustomer,
  deleteCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
} = require("../controllers/customerController.js");

router
  .post("/", createCustomer)
  .delete("/:id", deleteCustomer)
  .put("/:id", updateCustomer)
  .get("/", getCustomers)
  .get("/:id", getCustomerById);

module.exports = router;
