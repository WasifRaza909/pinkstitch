import React, { useEffect, useState } from "react";
import { getPermissions } from "../features/permissions/permissionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createRolePermission } from "../features/rolePermissions/rolePermissionSlice";

function RolePermissionsScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roleName } = useParams();
  const [rolePermissions, setRolePermissions] = useState([]);

  const { permissions, isSuccess, isError, isLoading } = useSelector(
    (state) => state.permission
  );

  useEffect(() => {
    dispatch(getPermissions());
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const rolePermission = {
      role: roleName,
      permissions: rolePermissions,
    };

    await dispatch(createRolePermission(rolePermission));

    setRolePermissions([]);

    if (isSuccess && !isError) {
      navigate("/admin/roles");
    }
  };

  const handlePermissionChange = (e, permission) => {
    if (e.target.checked) {
      setRolePermissions((prevPermissions) => [...prevPermissions, permission]);
    } else {
      setRolePermissions((prevPermissions) =>
        prevPermissions.filter((p) => p !== permission)
      );
    }
  };

  return (
    <>
      <div className="role_permissions">
        <div className="role_permissions_container">
          <div>
            <h1>Role Permissions</h1>
            <h2>{roleName}</h2>
            <form onSubmit={onSubmit}>
              <table>
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Permissions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>User</td>
                    <td>
                      {permissions && permissions.length > 0 ? (
                        permissions.map((permission) => {
                          if (permission.permission.endsWith("User")) {
                            return (
                              <label key={permission.id}>
                                <input
                                  type="checkbox"
                                  value={permission.permission}
                                  onChange={(e) =>
                                    handlePermissionChange(
                                      e,
                                      permission.permission
                                    )
                                  }
                                />
                                {permission.permission}
                              </label>
                            );
                          }
                          return null; // Render nothing for other permissions
                        })
                      ) : (
                        <p>Loading permissions...</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Agent</td>
                    <td>
                      {permissions && permissions.length > 0 ? (
                        permissions.map((permission) => {
                          if (permission.permission.endsWith("Agent")) {
                            return (
                              <label key={permission.id}>
                                <input
                                  type="checkbox"
                                  value={permission.permission}
                                  onChange={(e) =>
                                    handlePermissionChange(
                                      e,
                                      permission.permission
                                    )
                                  }
                                />
                                {permission.permission}
                              </label>
                            );
                          }
                          return null;
                        })
                      ) : (
                        <p>Loading permissions...</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Customer</td>
                    <td>
                      {permissions && permissions.length > 0 ? (
                        permissions.map((permission) => {
                          if (permission.permission.endsWith("Customer")) {
                            return (
                              <label key={permission.id}>
                                <input
                                  type="checkbox"
                                  value={permission.permission}
                                  onChange={(e) =>
                                    handlePermissionChange(
                                      e,
                                      permission.permission
                                    )
                                  }
                                />
                                {permission.permission}
                              </label>
                            );
                          }
                          return null;
                        })
                      ) : (
                        <p>Loading permissions...</p>
                      )}
                    </td>
                  </tr>
                  {/* <tr>
                    <td>Partner</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Partner View
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Create
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Update
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Partner Lead</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Partner Lead View
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Lead Create
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Lead Update
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Lead Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Lead</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Lead View
                      </label>
                      <label>
                        <input type="checkbox" /> Lead Create
                      </label>
                      <label>
                        <input type="checkbox" /> Lead Update
                      </label>
                      <label>
                        <input type="checkbox" /> Lead Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Order</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Order View
                      </label>
                      <label>
                        <input type="checkbox" /> Order Create
                      </label>
                      <label>
                        <input type="checkbox" /> Order Update
                      </label>
                      <label>
                        <input type="checkbox" /> Order Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Partner Show</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Partner Show
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Report</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Report View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Payment</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Payment View
                      </label>
                      <label>
                        <input type="checkbox" /> Payment Create
                      </label>
                      <label>
                        <input type="checkbox" /> Payment Update
                      </label>
                    </td>
                  </tr>

                  <tr>
                    <td>Notification Sms</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Notification Sms
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Dashboard</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Dashboard View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>General Settings</td>
                    <td>
                      <label>
                        <input type="checkbox" /> General Settings View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Order Histroy</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Order History View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Reports Sales Per Service</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Reports Sales Per Service View
                      </label>
                    </td>
                  </tr> */}
                </tbody>
              </table>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RolePermissionsScreen;
