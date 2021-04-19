import React, { useEffect } from "react";

import Coininfo from "./coin-info/coin-info.component";
import { connect } from "react-redux";
import CoinFilter from "./coin-chart-filter/coin-chart-filter.component";
import "./coinpage.styles.scss";
import { fetchCoin } from "../../../redux/coin/coin.actions";
const Coinpage = ({ fetchCoin, match }) => {
  useEffect(() => {
    fetchCoin(match.params.name);
  }, []);
  return (
    <div className="container">
      <Coininfo />
      <CoinFilter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: (currency) => dispatch(fetchCoin(currency)),
});

export default connect(null, mapDispatchToProps)(Coinpage);
