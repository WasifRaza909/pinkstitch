import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, reset } from "../features/users/userSlice";

function CreateUserScreen() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Manager");
  const [status, setStatus] = useState("active");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess, isError, message, isLoading, user } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      window.alert(message);
      return dispatch(reset());
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return window.alert("Passwords do not match!");
    } else {
      const user = {
        name,
        contact,
        email,
        password,
        role,
        status,
      };

      await dispatch(createUser(user));

      setName("");
      setContact("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("Manager");
      setStatus("active");

      if (isSuccess && !isError) {
        navigate("/admin/users");
      }
    }
  };

  return (
    <>
      <div className="create_user_screen">
        <div className="create_user_screen_container">
          <h1>Create User</h1>
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
              <div>
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
              </div>
              <div>
                <label>
                  Select Role
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                    <option value="Developer">Developer</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="radio_label">
                  <input
                    defaultChecked
                    type="checkbox"
                    value={status}
                    onChange={(e) =>
                      setStatus(e.target.checked ? "active" : "inactive")
                    }
                  />
                  is Active?
                </label>
              </div>
            </div>
            <div className="cta_buttons">
              <button type="submit">Create</button>
              <button onClick={() => navigate("/admin/users")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUserScreen;
