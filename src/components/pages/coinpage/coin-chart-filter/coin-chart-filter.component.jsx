import React, { useState } from "react";

import { connect } from "react-redux";
import CoinchartContainer from "../coin-chart/coin-chart.container";

import "./coin-chart-filter.styles.scss";
const CoinFilter = () => {
  const [filter, setFilter] = useState(30);
  return (
    <>
      <div className="coin-filter">
        <ul tabindex="1">
          <li>
            <button onClick={() => setFilter(3)}>3 days</button>
          </li>
          <li>
            <button onClick={() => setFilter(7)}>Week</button>
          </li>
          <li>
            <button onClick={() => setFilter(30)}>Month</button>
          </li>
        </ul>
      </div>
      <CoinchartContainer filter={filter} />;
    </>
  );
};

export default CoinFilter;
