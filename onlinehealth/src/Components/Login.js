import React, { useState } from "react";
import { useAuth } from "./auth";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectpath = location.state?.path || '/';

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/", { email, password });

      if (response.data === "exist") {
        auth.login(email);
        navigate('/');
      } else if (response.data === "notexist"){
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  }

  return (
    <div className="login-container" style={{ marginTop: '100px' }}>
      <h1> Sudnet Login/Signin</h1>

      <form className="login-form" onSubmit={submit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="submit-button" type="submit">
          Log In
        </button>
      </form>

      <div className="or-divider">
        <p>OR</p>
      </div>

      <Link to="/Signup">
        <button className="btn">Sign Up</button>
      </Link>
    </div>
  );
}
