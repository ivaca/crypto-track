import React from "react";
import SearchInput from "../homepage/search-input/search-input.component";
import CurrencyList from "../homepage/currency-list/currency-list.component";
import "./homepage.styles.scss";

const Homepage = ({ ...props }) => {
  return (
    <div className="content">
      <SearchInput {...props} />
      <CurrencyList {...props} />
    </div>
  );
};

export default Homepage;
