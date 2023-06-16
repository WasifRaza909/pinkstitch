import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCustomerById } from "../features/customers/customerSlice";

function CustomerAddressModal({ customerId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { customer } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getCustomerById(customerId));
  }, [customerId, dispatch]);

  return (
    <div className="customer_address_modal">
      <h3>Addresses</h3>
      <ul>
        {customer &&
          customer.customerAddresses &&
          customer.customerAddresses.map((address, index) => (
            <li>
              <h4>Address {index + 1}</h4>
              <div>
                <p>{address.address}</p>
                <a target="_blank" href={address.location}>
                  <button>Get Location</button>
                </a>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CustomerAddressModal;
