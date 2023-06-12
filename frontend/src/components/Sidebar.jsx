import logo from "../assets/Logo-08.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="logo">
          <img src={logo} alt="Pinkstitch logo" />
        </div>

        <h2>Super Admin</h2>

        <ul>
          <li>
            <i className="fas fa-solid fa-user"></i>
            <Link to="/admin/customers">Customers</Link>
          </li>
          {/* <li>
            <i class="fas fa-solid fa-folder"></i>
            <a href="/">Categories</a>
          </li>
          <li>
            <i className="fas fa-solid fa-box"></i>
            <a href="/">Bundles</a>
          </li>
          <li>
            <i className="fas fa-solid fa-handshake"></i>
            <a href="/">Partners</a>
          </li>
          <li>
            <i className="fas fa-solid fa-users"></i>
            <a href="/">Partner Leads</a>
          </li>
          <li>
            <i className="fas fa-solid fa-bullseye"></i>
            <a href="/">Leads</a>
          </li>
          <li>
            <i className="fas fa-solid fa-shopping-cart"></i>
            <a href="/">Orders</a>
          </li>
          <li>
            <i className="fas fa-solid fa-history"></i>
            <a href="/">Order History</a>
          </li>
          <li>
            <i className="fas fa-solid fa-chart-bar"></i>
            <a href="/">Reports</a>
          </li>
          <li>
            <i className="fas fa-solid fa-credit-card"></i>
            <a href="/">Payment</a>
          </li>
          <li>
            <i className="fas fa-solid fa-money-check"></i>
            <a href="/">Payment History</a>
          </li>
          <li>
            <i className="fas fa-solid fa-bell"></i>
            <a href="/">Notification Center</a>
          </li> */}
          {/* <li>
            <i className="fas fa-solid fa-cog"></i>
            <a href="/">Settings</a>
          </li> */}
          <li>
            <i className="fas fa-solid fa-users-cog"></i>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <i class="fas fa-solid fa-user-tag"></i>
            <Link to="/admin/roles">Roles</Link>
          </li>
          <li>
            <i class="fas fa-user-tie"></i>
            <Link to="/admin/agents">Agents</Link>
          </li>
          {/* <li>
            <i className="fas fa-solid fa-lock"></i>
            <a href="/">Change Password</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
