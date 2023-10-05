import React, { useState } from "react";
import "./Login_page.css";

import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  
  const [email, setEmail] = useState("dummy.dummy@dummy.com");
  const [password, setPassword] = useState("12345678");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          

          <div className="submit-container">
            <button className="submit" onClick={handleLogin}>
              Login
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
