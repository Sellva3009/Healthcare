// src/components/Login.js
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (email === "" || password === "") {
      setError("Email and Password are required!");
    } else {
      setError("");
      // You can handle login logic here, like calling an API
      console.log("Logging in with", { email, password });
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" // Dummy image URL
        alt="Login"
        style={styles.image}
      />
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

      <div className="LoginText" style={styles.loginText}>
        <h3 style={styles.link}>
          <a href="/forgot-password" style={styles.linkText}>
            Forgot Password?
          </a>
        </h3>
        <h3 style={styles.link}>
          <a href="/register" style={styles.linkText}>
            New User? Register here
          </a>
        </h3>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "center",
  },
  image: {
    width: "150px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "15px",
    fontSize: "14px",
  },
  loginText: {
    marginTop: "20px",
  },
  link: {
    marginBottom: "10px",
  },
  linkText: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Login;
