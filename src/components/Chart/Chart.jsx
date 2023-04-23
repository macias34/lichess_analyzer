import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import { reducePointsArr } from "../../helpers/chartHelpers";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchRatingHistory } from "../../queries/cardQueries";

const Chart = ({ data }) => {
  const { gameFormat } = useSelector((state) => state.gameFormat.value);

  const gameFormatData = data.find(
    (format) => format.name.toLowerCase() === gameFormat.toLowerCase()
  );
  const bulletPoints = reducePointsArr(gameFormatData);
  // Creating array from lichess rating-history API
  const chartLabel =
    gameFormat.charAt(0).toUpperCase() + gameFormat.slice(1).toLowerCase();

  const chartData = {
    datasets: [
      {
        label: chartLabel + " rating",
        data: bulletPoints,
        scaleStepWidth: 1,
      },
    ],
  };

  return (
    <div className="sm:w-2/3 w-full">
      <Line
        data={chartData}
        options={{
          borderColor: "#31C48D",
          backgroundColor: "#046C4E",
          normalized: true,
          color: "white",
          scales: {
            x: {
              type: "time",
              grace: "10%",
              ticks: {
                maxRotation: 0,
                autoSkip: true,
                color: "white",
              },
              time: {
                tooltipFormat: "MMM D, YYYY",
              },
              grid: {
                // display: false,
                color: "green",
              },
            },
            y: {
              grid: {
                color: "green",
              },
              ticks: {
                color: "white",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
