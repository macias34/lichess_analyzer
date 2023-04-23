import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { iconedPerfs } from "../../../constants/cardConstants";
import { changeGameFormat } from "../../../features/gameFormat";
import Rating from "./Rating/Rating";
import ErrorUser from "../../ErrorUser/ErrorUser";

const UserRatings = ({ perfs }) => {
  const dispatch = useDispatch();

  const perfsArr = Object.entries(perfs);
  perfsArr.map((perf) => {
    const foundPerf = iconedPerfs.find(
      (iconedPerf) => perf[0] === iconedPerf.label
    );
    if (!foundPerf) return;
    perf.icon = foundPerf.icon;
  });

  if (perfsArr.length === 0) return <ErrorUser error={{ status: 404 }} />;
  useEffect(() => {
    dispatch(changeGameFormat({ gameFormat: perfsArr[0][0] }));
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {perfsArr.map((perf, index) => (
        <Rating key={index} perf={perf} />
      ))}
    </div>
  );
};

export default UserRatings;
