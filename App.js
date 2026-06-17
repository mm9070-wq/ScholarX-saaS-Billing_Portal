import "./App.css";

function App() {
  const role = "Admin";

  return (
    <div className="container">
      <h1>ScholarX SaaS Billing Portal</h1>

      <div className="card">
        <h2>Login</h2>
        <p>Logged in as: <strong>{role}</strong></p>
      </div>

      <div className="card">
        <h2>User Dashboard</h2>
        <p><strong>Current Plan:</strong> Premium Plan - ₹499/month</p>

        <h3>Billing History</h3>
        <ul>
          <li>May 2026 - ₹499</li>
          <li>April 2026 - ₹499</li>
          <li>March 2026 - ₹499</li>
        </ul>

        <h3>Available Plans</h3>
        <button>Basic Plan</button>
        <button>Premium Plan</button>
      </div>

      {role === "Admin" && (
        <div className="card">
          <h2>Admin Panel</h2>

          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Manaswini</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>Customer</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>Customer</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;