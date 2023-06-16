import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAgentById } from "../features/agents/agentSlice";

function AgentPreviewModal({ agentId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { agent } = useSelector((state) => state.agent);

  useEffect(() => {
    dispatch(getAgentById(agentId));
  }, [dispatch, agentId]);

  return (
    <div className="agent_preview_modal">
      <h3>Agent</h3>
      <ul>
        <li>
          <h4>Full Name</h4>
          <div>
            <p>{agent && agent.name}</p>
          </div>
        </li>
        <li>
          <h4>Email</h4>
          <div>
            <p>{agent && agent.email}</p>
          </div>
        </li>
        <li>
          <h4>NIC</h4>
          <div>
            <p>{agent && agent.nic}</p>
          </div>
        </li>
        <li>
          <h4>Contact</h4>
          <div>
            <p>{agent && agent.contact}</p>
          </div>
        </li>

        <li>
          <h4>Status</h4>
          <div>
            <p>{agent && agent.status}</p>
          </div>
        </li>

        <li>
          <h4>Address</h4>
          <div>
            <p>{agent && agent.address}</p>
          </div>
        </li>
        <li className="expertise_list">
          <h4>Expertise</h4>
          <div>
            {agent &&
              agent.expertise &&
              agent.expertise.map((exp) => <p>{exp}</p>)}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AgentPreviewModal;
