import { useDispatch } from "react-redux";
import { slate } from "../../../../themes/cardThemes";
import { changeGameFormat } from "../../../../features/gameFormat";

const Rating = ({ perf }) => {
  const dispatch = useDispatch();

  const gameFormat = perf[0];
  const currentRating = perf[1].rating;
  const gamesCount = perf[1].games;

  const switchGameFormat = () => {
    dispatch(changeGameFormat({ gameFormat }));
  };

  return (
    <div
      onClick={switchGameFormat}
      className={`flex px-5 py-3 max-lg:px-0 items-center max-lg:py-2 transition rounded-2xl cursor-pointer hover:${slate.perf}`}
    >
      <span className="text-5xl max-lg:text-4xl mr-3">{perf.icon}</span>

      <div className="flex flex-col">
        <span className="uppercase font-thin">{gameFormat}</span>
        <div>
          <span className="font-bold mr-2">{currentRating}</span>
          <span className="font-thin">{gamesCount} games</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
