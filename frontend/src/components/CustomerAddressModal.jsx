import { useNavigate } from "react-router-dom";

function CustomerAddressModal() {
  const navigate = useNavigate();

  return (
    <div className="customer_address_modal">
      <h3>Addresses</h3>
      <ul>
        <li>
          <h4>Address 1</h4>
          <div>
            <p>Block-3 Gulshan-i-Iqbal Karachi</p>
            <button>Get Location</button>
          </div>
        </li>
        <li>
          <h4>Address 2</h4>
          <div>
            <p>Block-4 Gulshan-i-Iqbal Karachi</p>
            <button>Get Location</button>
          </div>
        </li>
        <li>
          <h4>Address 3</h4>
          <div>
            <p>Block-5 Gulshan-i-Iqbal Karachi</p>
            <button>Get Location</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CustomerAddressModal;
