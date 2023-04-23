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
      <div className={` ${slate.card}`}>
        <span className="font-semibold sm:text-xl text-base">Games</span>
        <span className="sm:text-3xl text-xl  text-emerald-400 font-bold">
          {winrate}% WR
        </span>
        <p>
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
