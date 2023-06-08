const express = require("express");
const { createRole } = require("../controllers/roleController.js");

const router = express.Router();

router.post("/", createRole);

module.exports = router;
