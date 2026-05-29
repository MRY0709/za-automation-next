import { useState } from "react";

function SignupModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields");

      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");

      return;
    }
    if (!validatePassword(formData.password)) {
      setError(
        "Password must contain uppercase, lowercase, number and 8 characters.",
      );

      return;
    }
    setError("");

    alert("Signup Successful!");

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="signup-submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;
