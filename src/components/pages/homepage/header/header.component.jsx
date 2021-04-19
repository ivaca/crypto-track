import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
const Header = () => {
  return (
    <header>
      <Link to="/crypto-track/">
        <img src="https://bitcoin.org/img/icons/opengraph.png" />
      </Link>
    </header>
  );
};
export default Header;
