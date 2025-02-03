import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css'; // You can reuse the same CSS file for consistency

const LoginForm = ({ role, redirectPath, endpoint }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(endpoint, { email, password, role }); // Include role in request
      dispatch(login({ user: data.user, token: data.token, role: data.user.role })); // Add role
      alert(`${role} Login Successful`);
      navigate(redirectPath); // Navigate to the specified path
    } catch (error) {
      alert(error.response?.data?.message || `${role} Login Failed`);
    }
  };

  return (
    <div className="signup-page">
      <h1 className="logo1">SaarthiAI</h1>
      <div className="line"></div>
      <div className="signup">
        <div className="signup-header">
          <div className="get_role">Hello, {role}!</div>
          <div className="roll_car">Welcome Back .!</div>
          <button
            className="role_button"
            onClick={() => navigate(role === "Student" ? "/wp/login" : "/student/login")}
          >
            {role === "Student" ? "Are you a Working Professional? Click here" : "Are you a Student? Click here"}
          </button>
        </div>

        <div className="login-container">
          <div className="login-card">
            <p className='sc_login'>Log in to continue.</p>
            <form onSubmit={handleLogin}>
              <input
                className="login_input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* Password Field */}
              <div className="password-container1">
                <input
                  className="login_input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button className="signup_button" type="submit">
                Login
              </button>
            </form>
          </div>

          <div className="direct_to_login">
            Don't have an Account?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate(role === "Student" ? "/student/register" : "/wp/register")}
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
