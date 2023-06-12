import { addListener } from "@reduxjs/toolkit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditCustomerScreen() {
  const navigate = useNavigate();
  const [addressCount, setAddressCount] = useState(1);

  const addNewAddress = () => {
    if (addressCount < 3) {
      setAddressCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <div className="edit_customer_screen">
        <div className="edit_customer_screen_container">
          <h1>Edit Customer</h1>
          <form>
            <div className="form_grid">
              <div>
                <label>
                  Full Name
                  <input type="text" required />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input type="email" required />
                </label>
              </div>
              <div>
                <label>
                  Contact
                  <input type="number" required />
                </label>
              </div>
              <div>
                <label>
                  Date Of Birth
                  <input type="date" required />
                </label>
              </div>
              <div className="addresses">
                {Array.from({ length: addressCount }, (_, index) => (
                  <div key={index}>
                    <label>
                      Address {index + 1}
                      <input type="text" required />
                    </label>
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
              <button>Edit</button>
              <button onClick={() => navigate("/admin/customers")}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditCustomerScreen;
