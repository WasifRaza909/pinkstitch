import "./App.css";
import Sidebar from "./components/Sidebar";
import RolesScreen from "./screens/RolesScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RolePermissionsScreen from "./screens/RolePermissionsScreen";
import UsersScreen from "./screens/UsersScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import EditUserScreen from "./screens/EditUserScreen";
import CustomersScreen from "./screens/CustomersScreen";
import CreateCustomerScreen from "./screens/CreateCustomerScreen";
import EditCustomerScreen from "./screens/EditCustomerScreen";
import AgentsScreen from "./screens/AgentsScreen";
import EditAgentScreen from "./screens/EditAgentScreen";
import CreateAgentScreen from "./screens/CreateAgentScreen";
import EditRolePermissionsScreen from "./screens/EditRolePermissionsScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Sidebar />
          <div className="right_screens">
            <Routes>
              <Route path="/admin/roles" element={<RolesScreen />} />
              <Route
                path="/admin/roles/create/:roleName"
                element={<RolePermissionsScreen />}
              />
              <Route
                path="/admin/roles/edit/:id"
                element={<EditRolePermissionsScreen />}
              />
              <Route path="/admin/users" element={<UsersScreen />} />
              <Route
                path="/admin/users/create"
                element={<CreateUserScreen />}
              />
              <Route
                path="/admin/users/edit/:id"
                element={<EditUserScreen />}
              />
              <Route path="/admin/customers" element={<CustomersScreen />} />
              <Route
                path="/admin/customers/create"
                element={<CreateCustomerScreen />}
              />
              <Route
                path="/admin/customers/edit"
                element={<EditCustomerScreen />}
              />
              <Route path="/admin/agents" element={<AgentsScreen />} />
              <Route
                path="/admin/agents/edit/:id"
                element={<EditAgentScreen />}
              />
              <Route
                path="/admin/agents/create"
                element={<CreateAgentScreen />}
              />
              {/* <RolesScreen /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
