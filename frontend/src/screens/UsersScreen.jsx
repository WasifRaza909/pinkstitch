import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteUser, getUsers, reset } from "../features/users/userSlice";

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

  useEffect(() => {
    dispatch(getUsers());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

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
              {users && users.length > 0
                ? users.map((user) => (
                    <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role ? user.role.role : ""}</td>
                      <td>{user.status}</td>
                      <td>
                        <button
                          onClick={() =>
                            navigate(`/admin/users/edit/${user._id}`)
                          }
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => {
                            onDelete(user._id);
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UsersScreen;
