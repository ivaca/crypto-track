export const dataLine = {
  labels: [],
  datasets: [
    {
      fill: !false,
      lineTension: 0.01,

      borderColor: "rgb(64,193,74)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "black",
      pointBackgroundColor: "rgb(64,193,74)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      defaultFontColor: "rgb(64,193,74)",
      pointRadius: 0,
      scaleFontSize: 0,
      pointHitRadius: 10,
      data: [],
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
        hitRadius: 5,
        hoverRadius: 5,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            color: "rgba(255, 255, 255, 0.05)",
          },
          ticks: {
            fontFamily: "Ubuntu",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: "rgba(0,0,0,0)",
            zeroLineColor: "rgba(0,0,0,0)",
          },
          ticks: {
            fontFamily: "Ubuntu",
          },
        },
      ],
    },
  },
};
