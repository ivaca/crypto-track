import React from "react";
import { Line, defaults } from "react-chartjs-2";
import { dataLine } from "./coin-chart.settings";
import { selectCoinHistoryData } from "../../../../redux/coin/coin.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Coinchart from "./coin-chart.component";
defaults.global.defaultFontColor = "rgba(255, 255, 255, 0.5)";
defaults.global.legend.display = false;

const CoinchartContainer = ({ coin, filter }) => {
  const timestampToDate = (time) => {
    var date = new Date(time * 1000);
    return (
      date.toDateString().split(" ")[1] +
      " " +
      date.toDateString().split(" ")[2]
    );
  };
  const loadChartData = () => {
    const chartData = { time: [], price: [] };

    coin.data.filter((coinData, i) => {
      chartData.time.push(timestampToDate(coinData.time));
      chartData.price.push(coinData.close);
    });

    dataLine.datasets[0].data = chartData.price.slice(0, filter);
    dataLine.labels = chartData.time.slice(0, filter);
  };
  loadChartData();

  return <Coinchart data={dataLine} options={dataLine.options} />;
};
const mapStateToProps = createStructuredSelector({
  coin: selectCoinHistoryData,
});

export default connect(mapStateToProps)(CoinchartContainer);
