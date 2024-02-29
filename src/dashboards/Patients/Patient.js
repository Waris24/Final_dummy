import React, { useState } from "react";
import "./Patient.css";

function Patient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission for login or register
    if (isLogin) {
      // Handle login
      console.log("Logging in with:", email, password);
    } else {
      // Handle register
      console.log("Registering with:", email, password);
    }
  };

  return (
    <>
      <div class="hero-image">
        <div className="container">
          <div className="card">
            <div className="form-container">
              <h2>{isLogin ? "Login" : "Sign Up"}</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
              </form>
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <a href="#" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Sign up" : "Login"}
                </a>
              </p>
            </div>
            <div className="hospital-info">
              {/* Write about hospital here */}
              <p>Info</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Patient;
