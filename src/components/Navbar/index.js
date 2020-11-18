import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader } from "./NavBar.style";

export default function Navbar() {
  return (
    <StyledHeader>
      <Link
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          paddingLeft: 30,
          color: "black",
        }}
        to="/"
      >
        HOME
      </Link>
    </StyledHeader>
  );
}
