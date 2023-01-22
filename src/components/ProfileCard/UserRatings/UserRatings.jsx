import { iconedPerfs } from "../../../constants/cardConstants";
import { slate } from "../../../themes/cardThemes";

const UserRatings = ({ perfs }) => {
  const perfsArr = Object.entries(perfs);
  perfsArr.map((perf) => {
    const foundPerf = iconedPerfs.find(
      (iconedPerf) => perf[0] === iconedPerf.label
    );
    if (!foundPerf) return;
    perf.icon = foundPerf.icon;
  });

  return (
    <div className="flex flex-col gap-5">
      {perfsArr.map((perf, index) => (
        <div
          className={`flex px-5 py-3 transition rounded-2xl cursor-pointer hover:${slate.perf}`}
          key={index}
        >
          <span className="text-5xl mr-3">{perf.icon}</span>

          <div className="flex flex-col">
            <span className="uppercase font-thin">{perf[0]}</span>
            <div>
              <span className="font-bold mr-2">{perf[1].rating}</span>
              <span className="font-thin">{perf[1].games} games</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserRatings;
