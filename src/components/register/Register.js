// src/components/Register.js
import React from "react";

const Register = () => {
  // Implement registration logic here, this is just a placeholder
  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
