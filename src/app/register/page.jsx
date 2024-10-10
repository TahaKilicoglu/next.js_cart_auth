"use client";

import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
