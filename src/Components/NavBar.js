import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Header>
      <Link to="/" style={{ margin: "5px" }}>
        Home
      </Link>
      <Link to="/add" style={{ margin: "5px" }}>
        Add
      </Link>
      <Link to="/edit" style={{ margin: "5px" }}>
        Edit
      </Link>
    </Header>
  );
};

export default NavBar;
