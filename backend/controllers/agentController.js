const Agent = require("../models/agentModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Create agent
// @route   POST /api/agents
// @access  Private
const createAgent = asyncHandler(async (req, res) => {
  const { name, email, contact, address, nic, status, expertise } = req.body;

  const agentExists = await Agent.findOne({ email });

  if (agentExists) {
    res.status(400);
    res.json({
      message: "Agent already exists",
    });
  }

  const newAgent = {
    name,
    email,
    contact,
    address,
    nic,
    status,
    expertise,
  };

  const agentCreated = await Agent.create(newAgent);

  if (agentCreated) {
    res.status(201).json(agentCreated);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Update agent
// @route   PUT /api/agents/:id
// @access  Private
const updateAgent = asyncHandler(async (req, res) => {
  const { name, email, contact, address, nic, status, expertise } = req.body;

  const agentExists = await Agent.findById(req.params.id);

  if (!agentExists) {
    res.status(404);
    res.json({
      message: "Agent not found",
    });
  }

  const updAgent = {
    name,
    email,
    contact,
    address,
    nic,
    status,
    expertise,
  };

  const updatedAgent = await Agent.findOneAndUpdate(
    { _id: req.params.id },
    updAgent,
    {
      new: true,
    }
  );

  if (updatedAgent) {
    res.status(200).json(updatedAgent);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Delete agent
// @route   DELETE /api/agents/:id
// @access  Private
const deleteAgent = asyncHandler(async (req, res) => {
  const agentExists = await Agent.findById(req.params.id);

  if (!agentExists) {
    res.status(404);
    res.json({
      message: "Agent not found",
    });
  }

  const updAgent = await Agent.findByIdAndUpdate(
    { _id: req.params.id },
    {
      deletedAt: new Date(),
      status: "inactive",
    }
  );

  if (updAgent) {
    res.status(201).json({
      message: "Agent Deleted",
      _id: req.params.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get agents
// @route   GET /api/agents/
// @access  Private
const getAgents = asyncHandler(async (req, res) => {
  const agents = await Agent.find();

  const filterAgents = agents.filter((agent) => agent.deletedAt === null);

  if (!agents || !filterAgents) {
    res.status(404).json({
      message: "No agent found",
    });
  }

  res.status(200).json(filterAgents);
});

// @desc    Get agent by id
// @route   GET /api/agents/:id
// @access  Private
const getAgentById = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);

  if (!agent || agent.deletedAt !== null) {
    res.status(404);
    return res.json({
      message: "Agent not found",
    });
  }

  res.status(200).json(agent);
});

module.exports = {
  createAgent,
  updateAgent,
  deleteAgent,
  getAgents,
  getAgentById,
};
