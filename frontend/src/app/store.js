import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
// import goalReducer from "../features/goals/goalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // goals: goalReducer,
  },
});
