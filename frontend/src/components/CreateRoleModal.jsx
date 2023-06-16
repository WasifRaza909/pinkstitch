import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRoleModal() {
  const [roleName, setRoleName] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/admin/roles/create/${roleName}`);
    setRoleName("");
  };

  return (
    <div className="create_role_modal">
      <h3>Enter Role Name</h3>
      <div>
        <input
          value={roleName}
          onChange={(e) => {
            setRoleName(e.target.value);
          }}
          type="text"
          placeholder="Enter here..."
        />
        <button onClick={onClick}>Continue</button>
      </div>
    </div>
  );
}

export default CreateRoleModal;
