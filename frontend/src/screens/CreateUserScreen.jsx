import { useNavigate } from "react-router-dom";

function CreateUserScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="create_user_screen">
        <div className="create_user_screen_container">
          <h1>Create User</h1>
          <form>
            <div className="form_grid">
              <div>
                <label>
                  Full Name
                  <input type="text" required />
                </label>
              </div>
              <div>
                <label>
                  Contact
                  <input type="number" required />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input type="email" required />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <input type="password" required />
                </label>
              </div>
              <div>
                <label>
                  Confirm Password
                  <input type="password" required />
                </label>
              </div>
              <div>
                <label>
                  Select Role
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                    <option value="Developer">Developer</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="radio_label">
                  <input defaultChecked type="checkbox" />
                  is Active?
                </label>
              </div>
            </div>
            <div className="cta_buttons">
              <button>Create</button>
              <button onClick={() => navigate("/admin/users")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUserScreen;
