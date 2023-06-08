import { useNavigate } from "react-router-dom";

function CreateRoleModal() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/admin/roles/create");
  };

  return (
    <div className="create_role_modal">
      <h3>Enter Role Name</h3>
      <div>
        <input type="text" placeholder="Enter here..." />
        <button onClick={onClick}>Continue</button>
      </div>
    </div>
  );
}

export default CreateRoleModal;
