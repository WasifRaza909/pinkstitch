import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  rolePermissions: [],
  rolePermission: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Role Permission
export const createRolePermission = createAsyncThunk(
  "rolePermission/create",
  async (rolePermissionData, thunkAPI) => {
    try {
      const response = await axios.post(
        "/api/rolepermissions",
        rolePermissionData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
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

// // Update Agent
// export const updateAgent = createAsyncThunk(
//   "agents/update",
//   async (agentData, thunkAPI) => {
//     try {
//       const response = await axios.put(
//         `/api/agents/${agentData.id}`,
//         agentData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Delete Role
// export const deleteRole = createAsyncThunk(
//   "roles/delete",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/api/roles/${id}`);

//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Get rolePermissions
export const getRolePermissions = createAsyncThunk(
  "rolePermissions/getAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/api/rolepermissions");

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

// Get rolePermission By Id
export const getRolePermissionById = createAsyncThunk(
  "rolePermissions/getRolePermission",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/rolepermissions/${id}`);

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

export const rolePermissionSlice = createSlice({
  name: "rolePermissions",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      //   Get Roles

      .addCase(getRolePermissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRolePermissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rolePermissions = action.payload;
      })
      .addCase(getRolePermissions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      // Create rolePermission

      .addCase(createRolePermission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRolePermission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rolePermissions.push(action.payload);
      })
      .addCase(createRolePermission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      //  Delete Role

      //   .addCase(deleteRole.pending, (state) => {
      //     state.isLoading = true;
      //   })
      //   .addCase(deleteRole.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.isSuccess = true;
      //     state.agents = state.agents.filter(
      //       (agent) => agent._id !== action.payload._id
      //     );
      //   })
      //   .addCase(deleteRole.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.isError = true;
      //     state.message = action.payload;
      //   })

      //  Get rolePermission by Id

      .addCase(getRolePermissionById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRolePermissionById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rolePermission = action.payload;
      })
      .addCase(getRolePermissionById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });

    //   //   Update Agent

    //   .addCase(updateAgent.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateAgent.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.agents = state.agents.map((agent) =>
    //       agent._id === action.payload._id ? action.payload : agent
    //     );
    //   })
    //   .addCase(updateAgent.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //   });
  },
});

export const { reset } = rolePermissionSlice.actions;
export default rolePermissionSlice.reducer;
