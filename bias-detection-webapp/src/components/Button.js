// src/components/Button.js
import React from 'react';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="btn">
    {children}
  </button>
);

export default Button;
