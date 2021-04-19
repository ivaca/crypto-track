import React from "react";
import { selectCoinHistoryData } from "../../../../redux/coin/coin.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./coin-info.styles.scss";
const Coininfo = ({ coin }) => {
  return (
    <div className="coin-info">
      <div className="name">{coin.currency}</div>
      <div className="image"></div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  coin: selectCoinHistoryData,
});

export default connect(mapStateToProps)(Coininfo);
