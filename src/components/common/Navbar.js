import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/admin">Admin</Link>
      </nav>
      <nav>
        <Link to="/staff">Staff</Link>
      </nav>
    </>
  );
}
