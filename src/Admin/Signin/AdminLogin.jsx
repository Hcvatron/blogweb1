import  { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../context/AdminContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { AdminLogin } = useAdminContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AdminLogin(email, password, navigate);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-left">
        <img
          src="https://res.cloudinary.com/dcf3mojai/image/upload/v1745574199/dream_drive-removebg-preview_x7duqr.png"
          alt="Logo"
          className="admin-login-logo"
        />
        <h1 className="admin-brand-name">A Car Rental Company</h1>
      </div>

      <div className="admin-login-right">
        <form className="admin-login-box" onSubmit={handleLogin}>
          <h2 className="admin-login-title">Admin Login</h2>
          <p className="admin-login-subtitle">Access your dashboard</p>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="admin-error">{error}</p>}

          <button type="submit">Login</button>
          <p className="admin-forgot">Forgot password?</p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
