import { useNavigate } from "react-router-dom";

function AgentPreviewModal() {
  const navigate = useNavigate();

  return (
    <div className="agent_preview_modal">
      <h3>Agent</h3>
      <ul>
        <li>
          <h4>Full Name</h4>
          <div>
            <p>Wasif Raza</p>
          </div>
        </li>
        <li>
          <h4>Email</h4>
          <div>
            <p>wasifraza909@gmail.com</p>
          </div>
        </li>
        <li>
          <h4>NIC</h4>
          <div>
            <p>422011234567890</p>
          </div>
        </li>
        <li>
          <h4>Contact</h4>
          <div>
            <p>1234567890</p>
          </div>
        </li>
        <li>
          <h4>DOB</h4>
          <div>
            <p>29 May 2002</p>
          </div>
        </li>
        <li>
          <h4>Contact</h4>
          <div>
            <p>1234567890</p>
          </div>
        </li>
        <li>
          <h4>Status</h4>
          <div>
            <p>Active</p>
          </div>
        </li>
        <li className="expertise_list">
          <h4>Expertise</h4>
          <div>
            <p>1234567890</p>
            <p>12345678dfsafsafsfa90</p>
            <p>1234567890</p>
            <p>1234567890</p>
            <p>1234567890</p>
            <p>1234567890</p>
            <p>1234fffffffffffffffffffffffffffff567890</p>
            <p>1234567890</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AgentPreviewModal;
