import "./App.css";
import Sidebar from "./components/Sidebar";
import RolesScreen from "./screens/RolesScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RolePermissionsScreen from "./screens/RolePermissionsScreen";
import UsersScreen from "./screens/UsersScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import EditUserScreen from "./screens/EditUserScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Sidebar />
          <div className="right_screens">
            <Routes>
              <Route path="/admin/roles" element={<RolesScreen />} />
              <Route path="/admin/users" element={<UsersScreen />} />
              <Route
                path="/admin/roles/create"
                element={<RolePermissionsScreen />}
              />
              <Route
                path="/admin/users/create"
                element={<CreateUserScreen />}
              />
              <Route path="/admin/users/edit" element={<EditUserScreen />} />
              {/* <RolesScreen /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
