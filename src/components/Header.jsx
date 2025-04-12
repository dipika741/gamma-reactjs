import React from "react";
import Menubar from "./Menubar";
import Topbar from "./Topbar";

// import "../assets/css/style.css";

const Header = () => {
  return (
    <header className="header">
      <Topbar />
      <Menubar />
    </header>
  );
};

export default Header;
