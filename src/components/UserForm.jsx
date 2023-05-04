import React, { useState } from "react";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 4) {
      setLastNameError("Last Name must be at least 4 characters");
    } else {
      setLastNameError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords must match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      alert("Please fix the errors");
    } else {
      alert("Form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange}
        />
        {firstNameError && firstName.length > 0 && <p style={{ color: 'red' }}>{firstNameError}</p>}
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange}
        />
        {lastNameError && lastName.length > 0 && <p style={{ color: 'red' }}>{lastNameError}</p>}
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange}
        />
        {emailError && email.length > 0 && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange}
        />
        {passwordError && password.length > 0 && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <div>
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange}
        />
        {passwordError && password.length > 0 && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
      </div>
      <input type="submit" value="Create User" />
    </form>
  );
};

export default UserForm;
