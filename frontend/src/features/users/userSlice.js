import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      SNo: 1,
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      SNo: 2,
      name: "Wasif",
      email: "wasif@gmail.com",
      role: "Manager",
      status: "Active",
    },
  ],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Delete User
export const deleteUser = createAsyncThunk("goals/delete");

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      });
  },
});

export default userSlice.reducer;
