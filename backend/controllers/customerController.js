const Customer = require("../models/customerModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Create Customer
// @route   POST /api/customers
// @access  Private
const createCustomer = asyncHandler(async (req, res) => {
  const { name, email, contact, dateOfBirth, customerAddresses } = req.body;

  const customerExists = await Customer.findOne({ email });

  if (customerExists) {
    res.status(400);
    res.json({
      message: "Customer already exists",
    });
  }

  const newCustomer = {
    name,
    email,
    contact,
    dateOfBirth,
    customerAddresses: customerAddresses.map((address) => ({
      address: address.address,
      isPrimary: address.isPrimary,
      location: address.location,
      cityId: address.cityId,
    })),
  };

  const customerCreated = await Customer.create(newCustomer);

  if (customerCreated) {
    res.status(201).json(customerCreated);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Update Customer
// @route   POST /api/customers
// @access  Private
const updateCustomer = asyncHandler(async (req, res) => {
  const { name, email, contact, dateOfBirth, customerAddresses } = req.body;

  const customerExists = await Customer.findById(req.params.id);

  if (!customerExists) {
    res.status(404);
    res.json({
      message: "Customer not found",
    });
  }

  const updatedCustomerAddresses = customerAddresses.map((address) => ({
    address: address.address,
    isPrimary: address.isPrimary,
    location: address.location,
    cityId: address.cityId,
  }));

  const updCustomer = {
    name,
    email,
    contact,
    dateOfBirth,
    customerAddresses: updatedCustomerAddresses,
  };

  const updatedCustomer = await Customer.findOneAndUpdate(
    { _id: req.params.id },
    updCustomer,
    {
      new: true,
    }
  );

  if (updatedCustomer) {
    res.status(200).json(updatedCustomer);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Delete customer
// @route   DELETE /api/customers/:id
// @access  Private
const deleteCustomer = asyncHandler(async (req, res) => {
  const customerExists = await Customer.findById(req.params.id);

  if (!customerExists) {
    res.status(404);
    res.json({
      message: "Customer not found",
    });
  }

  const updCustomer = await Customer.findByIdAndUpdate(
    { _id: req.params.id },
    {
      deletedAt: new Date(),
      status: "inactive",
    }
  );

  if (updCustomer) {
    res.status(201).json({
      message: "Customer Deleted",
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get customers
// @route   GET /api/customers
// @access  Private
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();

  const filterCustomers = customers.filter(
    (customer) => customer.deletedAt === null
  );

  if (!customers || !filterCustomers) {
    res.status(404).json({
      message: "No customer found",
    });
  }

  res.status(200).json(filterCustomers);
});

// @desc    Get customer by id
// @route   GET /api/customers/:id
// @access  Private
const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer || customer.deletedAt !== null) {
    res.status(404);
    return res.json({
      message: "Customer not found",
    });
  }

  res.status(200).json(customer);
});

module.exports = {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomers,
  getCustomerById,
};
