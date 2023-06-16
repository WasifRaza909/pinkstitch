import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AgentPreviewModal from "../components/AgentPreviewModal";
import { deleteAgent, getAgents } from "../features/agents/agentSlice";

function AgentsScreen() {
  const [agentPreviewModal, setAgentPreviewModal] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { agents } = useSelector((state) => state.agent);

  const onDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAgent(id));
    }
    return;
  };

  const onAgentPreview = (id) => {
    setSelectedAgentId(id);
    setAgentPreviewModal(true);
  };

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch]);

  return (
    <>
      <div
        className={`agents_screen ${
          agentPreviewModal ? "show_agent_preview_modal" : ""
        }`}
      >
        <i
          className="fas fa-times fa-2x close_modal"
          onClick={() => setAgentPreviewModal(false)}
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
              {agents && agents.length > 0
                ? agents.map((agent) => (
                    <tr>
                      <td>{agent._id}</td>
                      <td>{agent.name}</td>
                      <td>{agent.contact}</td>
                      <td>{agent.nic}</td>
                      <td>
                        <button
                          className="show_address_btn"
                          onClick={() => onAgentPreview(agent._id)}
                        >
                          Preview Agent
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            navigate(`/admin/agents/edit/${agent._id}`)
                          }
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => {
                            onDelete(agent._id);
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
      {agentPreviewModal && (
        <div
          style={{
            display: `${agentPreviewModal === true ? "block" : "none"}`,
          }}
        >
          <AgentPreviewModal agentId={selectedAgentId} />
        </div>
      )}
    </>
  );
}

export default AgentsScreen;
