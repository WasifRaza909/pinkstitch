import { addListener } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAgentById, updateAgent } from "../features/agents/agentSlice";

function EditAgentScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [expertise, setExpertise] = useState("");
  const [status, setStatus] = useState("active");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { isSuccess, isError, message, isLoading, agent } = useSelector(
    (state) => state.agent
  );

  useEffect(() => {
    dispatch(getAgentById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (agent) {
      setName(agent.name || "");
      setEmail(agent.email || "");
      setContact(agent.contact || "");
      setNic(agent.nic || "");
      setAddress(agent.address || "");
      setExpertise(agent.expertise || "");
      setStatus(agent.status || "active");
    }
  }, [agent]);

  const onSubmit = (e) => {
    e.preventDefault();

    const agent = {
      id,
      name,
      email,
      contact,
      nic,
      address,
      expertise,
      status,
    };

    dispatch(updateAgent(agent));

    setName("");
    setContact("");
    setEmail("");
    setNic("");
    setAddress("");
    setExpertise("");
    setStatus("active");

    if (isSuccess) {
      navigate("/admin/agents");
    } else {
      return;
    }
  };

  return (
    <>
      <div className="edit_agent_screen">
        <div className="edit_agent_screen_container">
          <h1>Edit Agent</h1>
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
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
              <button type="submit">Edit</button>
              <button onClick={() => navigate("/admin/agents")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditAgentScreen;
