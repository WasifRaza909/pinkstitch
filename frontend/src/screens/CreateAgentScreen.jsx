import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAgent } from "../features/agents/agentSlice";

function CreateAgentScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [expertise, setExpertise] = useState("");
  const [status, setStatus] = useState("active");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess, isError, message, isLoading, agents } = useSelector(
    (state) => state.agent
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const agent = {
      name,
      email,
      contact,
      nic,
      address,
      expertise,
      status,
    };

    dispatch(createAgent(agent));

    setName("");
    setEmail("");
    setContact("");

    setNic("");
    setAddress("");
    setExpertise("");
    setStatus("active");

    if (isError) {
      return window.alert(message);
    }

    if (isSuccess && !isError) {
      navigate("/admin/agents");
    }
  };

  return (
    <>
      <div className="create_agent_screen">
        <div className="create_agent_screen_container">
          <h1>Create Agent</h1>
          <form onSubmit={onSubmit}>
            <div className="form_grid">
              <div>
                <label>
                  Full Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Contact
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div>
                <label>
                  NIC
                  <input
                    type="text"
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="address_input">
                <label>
                  Address
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="expertise_input">
                <label>
                  Expertise
                  <input
                    value={expertise}
                    onChange={(e) => setExpertise(e.target.value)}
                    type="text"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="radio_label">
                  <input
                    defaultChecked
                    type="checkbox"
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
              <button onClick={() => navigate("/admin/agents")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAgentScreen;
