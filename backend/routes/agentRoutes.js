const express = require("express");
const router = express.Router();
const {
  createAgent,
  updateAgent,
  deleteAgent,
  getAgents,
  getAgentById,
} = require("../controllers/agentController.js");

router
  .post("/", createAgent)
  .put("/:id", updateAgent)
  .delete("/:id", deleteAgent)
  .get("/", getAgents)
  .get("/:id", getAgentById);

module.exports = router;
