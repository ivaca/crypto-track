import React from "react";
import "./search-input.styles.scss";
import { connect } from "react-redux";

import { changeText } from "../../../../redux/search/search.actions";
const SearchInput = ({ changeText }) => {
  return (
    <div className="search">
      <input
        type="search"
        className="search-input"
        placeholder="Ex. BTC"
        onChange={(e) => changeText(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeText: (text) => dispatch(changeText(text)),
});
export default connect(null, mapDispatchToProps)(SearchInput);
