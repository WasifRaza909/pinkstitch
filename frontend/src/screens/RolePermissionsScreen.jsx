import React from "react";

function RolePermissionsScreen() {
  const onSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("Submit permissions?")) {
      console.log("SUBMITTED");
      return;
    }

    return;
  };
  return (
    <>
      <div className="role_permissions">
        <div className="role_permissions_container">
          <div>
            <h1>Role Permissions</h1>
            <form onSubmit={onSubmit}>
              <table>
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Permissions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Customer View
                      </label>
                      <label>
                        <input type="checkbox" /> Customer Create
                      </label>
                      <label>
                        <input type="checkbox" /> Customer Update
                      </label>
                      <label>
                        <input type="checkbox" /> Customer Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Category View
                      </label>
                      <label>
                        <input type="checkbox" /> Category Create
                      </label>
                      <label>
                        <input type="checkbox" /> Category Update
                      </label>
                      <label>
                        <input type="checkbox" /> Category Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Service</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Service View
                      </label>
                      <label>
                        <input type="checkbox" /> Service Create
                      </label>
                      <label>
                        <input type="checkbox" /> Service Update
                      </label>
                      <label>
                        <input type="checkbox" /> Service Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Partner</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Partner View
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Create
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Update
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Partner Lead</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Partner Lead View
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Lead Create
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Lead Update
                      </label>
                      <label>
                        <input type="checkbox" /> Partner Lead Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Lead</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Lead View
                      </label>
                      <label>
                        <input type="checkbox" /> Lead Create
                      </label>
                      <label>
                        <input type="checkbox" /> Lead Update
                      </label>
                      <label>
                        <input type="checkbox" /> Lead Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Order</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Order View
                      </label>
                      <label>
                        <input type="checkbox" /> Order Create
                      </label>
                      <label>
                        <input type="checkbox" /> Order Update
                      </label>
                      <label>
                        <input type="checkbox" /> Order Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Partner Show</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Partner Show
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Report</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Report View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Payment</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Payment View
                      </label>
                      <label>
                        <input type="checkbox" /> Payment Create
                      </label>
                      <label>
                        <input type="checkbox" /> Payment Update
                      </label>
                    </td>
                  </tr>

                  <tr>
                    <td>Notification Sms</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Notification Sms
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Dashboard</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Dashboard View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>General Settings</td>
                    <td>
                      <label>
                        <input type="checkbox" /> General Settings View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Order Histroy</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Order History View
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Reports Sales Per Service</td>
                    <td>
                      <label>
                        <input type="checkbox" /> Reports Sales Per Service View
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button type="Submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RolePermissionsScreen;
