import React, { useRef } from "react";
import { Line, defaults } from "react-chartjs-2";
import "./coin-chart.styles.scss";
defaults.global.defaultFontColor = "rgba(255, 255, 255, 0.5)";
defaults.global.legend.display = false;

const Coinchart = ({ coin, ...props }) => {
  const { width, height, data, options } = props;

  const chart = useRef(null);
  if (chart.current !== null) {
    console.log(chart.current.chartInstance);
    chart.current.chartInstance.update();
  }
  return (
    <div className="chart">
      <Line
        ref={chart}
        width={width}
        height={height}
        data={data}
        options={options}
      />
    </div>
  );
};

export default Coinchart;
