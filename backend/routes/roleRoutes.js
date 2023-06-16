const express = require("express");
const { createRole, getRoles } = require("../controllers/roleController.js");

const router = express.Router();

router.post("/", createRole).get("/", getRoles);

module.exports = router;
