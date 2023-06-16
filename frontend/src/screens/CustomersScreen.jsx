import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteCustomer } from "../features/customers/customerSlice";
import CustomerAddressModal from "../components/CustomerAddressModal";
import { getCustomers } from "../features/customers/customerSlice";

function CustomersScreen() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [addressModal, setAddressModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCustomer(id));
    }
    dispatch(getCustomers());
    return;
  };

  const onAddressPreview = (id) => {
    setSelectedCustomerId(id);
    setAddressModal(true);
  };

  const { customers } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

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
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>DOB</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {customers && customers.length > 0
                ? customers.map((customer) => (
                    <tr>
                      <td>{customer._id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.contact}</td>
                      <td>{customer.dateOfBirth}</td>
                      <td>
                        <button
                          className="show_address_btn"
                          onClick={() => onAddressPreview(customer._id)}
                        >
                          Show Addresses
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => navigate("/admin/customers/edit")}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => {
                            onDelete(customer._id);
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
      {addressModal && (
        <div
          style={{
            display: `${addressModal === true ? "block" : "none"}`,
          }}
        >
          <CustomerAddressModal customerId={selectedCustomerId} />
        </div>
      )}
    </>
  );
}

export default CustomersScreen;
