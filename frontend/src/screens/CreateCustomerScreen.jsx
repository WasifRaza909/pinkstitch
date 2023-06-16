import { addListener } from "@reduxjs/toolkit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCustomerScreen() {
  const navigate = useNavigate();
  const [addressCount, setAddressCount] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [addresses, setAddresses] = useState([{ address: "", location: "" }]);

  const addNewAddress = () => {
    if (addressCount < 3) {
      setAddressCount(addressCount + 1);
    }
  };

  const removeAddress = () => {
    if (addressCount > 1) {
      setAddressCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="create_customer_screen">
        <div className="create_customer_screen_container">
          <h1>Create Customer</h1>
          <form>
            <div className="form_grid">
              <div>
                <label>
                  Full Name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Contact
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    type="number"
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Date Of Birth
                  <input
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    type="date"
                    required
                  />
                </label>
              </div>
              <div className="addresses">
                {Array.from(Array(addressCount).keys()).map((index) => (
                  <div key={index}>
                    <label>
                      Address {index + 1}
                      {index > 0 && (
                        <i
                          style={{ color: "red", display: "inline-block" }}
                          className="fas fa-multiply"
                          onClick={removeAddress}
                        ></i>
                      )}
                    </label>
                    <input type="text" required />
                    <label>Location {index + 1}</label>
                    <input type="text" required />
                  </div>
                ))}
              </div>
              {addressCount < 3 && (
                <a className="add_new_address_btn" onClick={addNewAddress}>
                  Add New Address
                </a>
              )}
            </div>
            <div className="cta_buttons">
              <button>Create</button>
              <button onClick={() => navigate("/admin/customers")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateCustomerScreen;
