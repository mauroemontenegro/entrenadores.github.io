import React, { useState } from "react";
import "./burger.css";

const BurgerButton = (porps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={porps.handleClick}
      className={`icon nav-icon-5 ${isOpen ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
