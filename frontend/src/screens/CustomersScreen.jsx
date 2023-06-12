import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteUser } from "../features/users/userSlice";
import CustomerAddressModal from "../components/CustomerAddressModal";

function CustomersScreen() {
  const [addressModal, setAddressModal] = useState(false);
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
        className={`customers_screen ${
          addressModal ? "show_address_modal" : ""
        }`}
      >
        <i
          className="fas fa-times fa-2x close_modal"
          onClick={() => setAddressModal(false)}
          style={{ display: `${addressModal === true ? "block" : "none"}` }}
        ></i>
        <div className="customers_screen_container">
          <div>
            <h1>View All Customers</h1>
            <button onClick={() => navigate("/admin/customers/create")}>
              Create Customer
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <input type="text" placeholder="Search here" />

          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>DOB</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Wasif</td>
                <td>wasif@gmail.com</td>
                <td>+92 1234 567890</td>
                <td>29-05-2002</td>
                <td>
                  <button
                    className="show_address_btn"
                    onClick={() => setAddressModal(!addressModal)}
                  >
                    Show Addresses
                  </button>
                </td>
                <td>
                  <button onClick={() => navigate("/admin/customers/edit")}>
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
      <div style={{ display: `${addressModal === true ? "block" : "none"}` }}>
        <CustomerAddressModal />
      </div>
    </>
  );
}

export default CustomersScreen;
