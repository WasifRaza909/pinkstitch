import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteUser } from "../features/users/userSlice";
import CustomerAddressModal from "../components/CustomerAddressModal";
import AgentPreviewModal from "../components/AgentPreviewModal";

function AgentsScreen() {
  const [agentPreviewModal, setagentPreviewModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
    return;
  };

  return (
    <>
      <div
        className={`agents_screen ${
          agentPreviewModal ? "show_agent_preview_modal" : ""
        }`}
      >
        <i
          className="fas fa-times fa-2x close_modal"
          onClick={() => setagentPreviewModal(false)}
          style={{
            display: `${agentPreviewModal === true ? "block" : "none"}`,
          }}
        ></i>
        <div className="agents_screen_container">
          <div>
            <h1>View All Agents</h1>
            <button onClick={() => navigate("/admin/agents/create")}>
              Create Agent
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <input type="text" placeholder="Search here" />

          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Contact</th>
                <th>NIC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Wasif Raza</td>
                <td>+92 1234 567890</td>
                <td>422011234567890</td>
                <td>
                  <button
                    className="show_address_btn"
                    onClick={() => setagentPreviewModal(!agentPreviewModal)}
                  >
                    Preview Agent
                  </button>
                </td>
                <td>
                  <button onClick={() => navigate("/admin/agents/edit")}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => {
                      //   onDelete(user.SNo);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{ display: `${agentPreviewModal === true ? "block" : "none"}` }}
      >
        <AgentPreviewModal />
      </div>
    </>
  );
}

export default AgentsScreen;
