import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../features/users/userSlice";

function EditUserScreen() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [options, setOptions] = useState(["Developer", "Admin", "Manager"]);

  const { isSuccess, isError, message, isLoading, user } = useSelector(
    (state) => state.user
  );

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setContact(user.contact || "");
      setEmail(user.email || "");
      setRole(user.role ? user.role.role : "Manager");
      setStatus(user.status || "active");
    }
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      id,
      name,
      contact,
      email,
      role,
      status,
    };

    dispatch(updateUser(user));

    setName("");
    setContact("");
    setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    setRole("Manager");
    setStatus("active");

    // if (isSuccess && !isLoading) {
    //   navigate("/admin/users");
    // } else {
    //   return;
    // }
  };

  return (
    <>
      <div className="edit_user_screen">
        <div className="edit_user_screen_container">
          <h1>Edit User</h1>
          <form onSubmit={onSubmit}>
            <div className="form_grid">
              <div>
                <label>
                  Full Name
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Contact
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              {/* <div>
                <label>
                  Password
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Confirm Password
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>
              </div> */}
              <div>
                <label>
                  Select Role
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    {user && user.role && (
                      <option value={user.role.role}>{user.role.role}</option>
                    )}

                    {options
                      .filter((option) => option !== user?.role?.role)
                      .map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="radio_label">
                  <input
                    type="checkbox"
                    value={status}
                    checked={status === "active"}
                    onChange={(e) =>
                      setStatus(e.target.checked ? "active" : "inactive")
                    }
                  />
                  is Active?
                </label>
              </div>
            </div>
            <div className="cta_buttons">
              <button type="submit">Update</button>
              <button onClick={() => navigate("/admin/users")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditUserScreen;
