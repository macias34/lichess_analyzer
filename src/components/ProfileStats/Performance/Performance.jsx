import { slate } from "../../../themes/cardThemes";
import { useSelector } from "react-redux";
import { useGetPerformanceDataQuery } from "../../../features/apiSlice";

const Performance = ({ data }) => {
  const games = data?.stat?.count;

  const all = games?.all;
  const wins = games?.win;
  const losses = games?.loss;

  const winrate = Math.round((wins / all) * 100);

  if (games)
    return (
      <div title={`${winrate}% WR`} className="flex items-center gap-3">
        <span className="font-semibold text-base">Games</span>
        <p className="text-3xl font-bold max-lg:text-xl">
          <span className="text-emerald-400 ">
            {parseInt(wins).toLocaleString()}
          </span>{" "}
          /{" "}
          <span className="text-red-500">
            {parseInt(losses).toLocaleString()}
          </span>
        </p>
      </div>
    );
};

export default Performance;
