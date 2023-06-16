import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: [],
  agent: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Agent
export const createAgent = createAsyncThunk(
  "agents/create",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/api/agents", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Agent
export const updateAgent = createAsyncThunk(
  "agents/update",
  async (agentData, thunkAPI) => {
    try {
      const response = await axios.put(
        `/api/agents/${agentData.id}`,
        agentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete Agent
export const deleteAgent = createAsyncThunk(
  "agents/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/agents/${id}`);

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Agents
export const getAgents = createAsyncThunk("agents/getAll", async (thunkAPI) => {
  try {
    const response = await axios.get("/api/agents");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Get Agent By Id
export const getAgentById = createAsyncThunk(
  "agents/getAgent",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/agents/${id}`);
      console.log(id);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      // Get Agents

      .addCase(getAgents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAgents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agents = action.payload;
      })
      .addCase(getAgents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      //   Create Agent

      .addCase(createAgent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAgent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agents.push(action.payload);
      })
      .addCase(createAgent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      //  Delete Agent

      .addCase(deleteAgent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAgent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agents = state.agents.filter(
          (agent) => agent._id !== action.payload._id
        );
      })
      .addCase(deleteAgent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //  Get Agent by Id

      .addCase(getAgentById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAgentById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agent = action.payload;
      })
      .addCase(getAgentById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //   Update Agent

      .addCase(updateAgent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAgent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agents = state.agents.map((agent) =>
          agent._id === action.payload._id ? action.payload : agent
        );
      })
      .addCase(updateAgent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = agentSlice.actions;
export default agentSlice.reducer;
