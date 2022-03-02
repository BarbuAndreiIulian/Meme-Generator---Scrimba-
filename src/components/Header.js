import React from "react";
import "../components/Header.css";

const Header = () => {
  return (
    <div className="header--container">
      <div className="logo-parts">
        <img src="./assets/logo.svg" />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
};

export default Header;
