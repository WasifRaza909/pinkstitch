import { useState } from "react";
import CreateRoleModal from "../components/CreateRoleModal";

function RolesScreen() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={`roles_screen ${modal ? "show_modal" : ""}`}>
        <i
          className="fas fa-times fa-2x close_modal"
          onClick={() => setModal(false)}
          style={{ display: `${modal === true ? "block" : "none"}` }}
        ></i>
        <div className="roles_screen_container">
          <div>
            <h1>View Roles</h1>
            <button onClick={() => setModal(!modal)}>
              Create Role
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <input type="text" placeholder="Search here" />

          <ul>
            <li>
              <h5>S.No</h5>
            </li>

            <li>
              <h5>Role</h5>
            </li>
            <li>
              <h5>Action</h5>
            </li>
          </ul>
          <ul>
            <li>1</li>
            <li>Admin</li>
            <li>
              <button>
                <i className="fas fa-edit"></i>
              </button>
              <button>
                <i className="fas fa-bell"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ display: `${modal === true ? "block" : "none"}` }}>
        <CreateRoleModal />
      </div>
    </>
  );
}

export default RolesScreen;
