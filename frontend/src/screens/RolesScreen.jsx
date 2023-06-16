import { useEffect, useState } from "react";
import CreateRoleModal from "../components/CreateRoleModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRolePermissions,
  reset,
} from "../features/rolePermissions/rolePermissionSlice";

function RolesScreen() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rolePermissions } = useSelector((state) => state.rolePermission);

  const onDelete = (id) => {
    console.log(id);
  };

  useEffect(() => {
    dispatch(getRolePermissions());

    return () => {
      dispatch(reset());
    };
  }, []);

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
              <h5>Id</h5>
            </li>

            <li>
              <h5>Role</h5>
            </li>
            <li>
              <h5>Action</h5>
            </li>
          </ul>
          {/* <ul>
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
          </ul> */}
          {rolePermissions &&
            rolePermissions.map((rolePermission) => (
              <ul>
                <li>{rolePermission.role._id}</li>
                <li>{rolePermission.role.role}</li>
                <li>
                  <button
                    onClick={() =>
                      navigate(`/admin/roles/edit/${rolePermission._id}`)
                    }
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => {
                      onDelete(rolePermission.role._id);
                    }}
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>
      <div style={{ display: `${modal === true ? "block" : "none"}` }}>
        <CreateRoleModal />
      </div>
    </>
  );
}

export default RolesScreen;
