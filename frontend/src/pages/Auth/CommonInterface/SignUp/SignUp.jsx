import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../../redux/slices/authSlice";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import "./SignUp.css";

const RegisterForm = ({ role, redirectPath }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role,
      });

      const { token, user, role: userRole } = response.data;
      dispatch(register({ user, token, role: userRole }));
      alert(`${role} Registration Successful`);
      navigate(redirectPath);
    } catch (error) {
      setError(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="signup-page">
      <h1 className="logo1">SaarthiAI</h1>
      <div className="line"></div>
      <div className="signup">
        <div className="signup-header">
          <div className="get_role">Get Started as {role}</div>
          <div className="roll_car">Roll the Carpet.!</div>
          <button
            className="role_button"
            onClick={() => navigate(role === "Student" ? "/wp/register" : "/student/register")}
          >
            {role === "Student" ? "Are you a Working Professional? Click here" : "Are you a Student? Click here"}
          </button>
        </div>

        <div className="signup-container">
          <div className="signup-card">
            <p className="sc">Just some details to get you in.!</p>
            {error && <p className="error-text">{error}</p>}
            <form onSubmit={handleRegister}>
              <input
                className="signup_input"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="signup_input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              {/* Password Field */}
              <div className="password-container">
                <input
                  className="signup_input"
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

              {/* Confirm Password Field */}
              <div className="password-container">
                <input
                  className="signup_input"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button className="signup_button" type="submit">
                Signup
              </button>
            </form>
          </div>

          <div className="direct_to_login">
            Already have an Account?{" "}
            <span style={{ cursor: "pointer" }} onClick={() => navigate(role === "Student" ? "/student/login" : "/wp/login")}>
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
