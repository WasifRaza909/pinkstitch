import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteUser } from "../features/users/userSlice";

function UsersScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  const onDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
    return;
  };

  return (
    <>
      <div className="users_screen">
        <div className="users_screen_container">
          <div>
            <h1>View All Users</h1>
            <button onClick={() => navigate("/admin/users/create")}>
              Create User
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <input type="text" placeholder="Search here" />

          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr>
                    <td>{user.SNo}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>
                      <button onClick={() => navigate("/admin/users/edit")}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => {
                          onDelete(user.SNo);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UsersScreen;
