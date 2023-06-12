import { addListener } from "@reduxjs/toolkit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditAgentScreen() {
  const navigate = useNavigate();
  const [addressCount, setAddressCount] = useState(1);

  const addNewAddress = () => {
    if (addressCount < 3) {
      setAddressCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <div className="edit_agent_screen">
        <div className="edit_agent_screen_container">
          <h1>Edit Agent</h1>
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
                  Email
                  <input type="email" required />
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
                  Date Of Birth
                  <input type="date" required />
                </label>
              </div>
              <div>
                <label>
                  NIC
                  <input type="number" required />
                </label>
              </div>
              <div className="address_input">
                <label>
                  Address
                  <input type="text" required />
                </label>
              </div>
              <div className="expertise_input">
                <label>
                  Expertise
                  <input type="text" required />
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
              <button>Edit</button>
              <button onClick={() => navigate("/admin/agents")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditAgentScreen;
