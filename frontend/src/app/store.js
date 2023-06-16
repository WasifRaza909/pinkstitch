import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import agentReducer from "../features/agents/agentSlice";
import permissionReducer from "../features/permissions/permissionSlice";
import customerReducer from "../features/customers/customerSlice";
import rolePermissionReducer from "../features/rolePermissions/rolePermissionSlice";

// import goalReducer from "../features/goals/goalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    agent: agentReducer,
    permission: permissionReducer,
    customer: customerReducer,
    rolePermission: rolePermissionReducer,
  },
});
