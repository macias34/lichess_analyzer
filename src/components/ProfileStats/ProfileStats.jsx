import { slate } from "../../themes/cardThemes";
import Chart from "../Chart/Chart";
import PeakRating from "./PeakRating/PeakRating";
import Performance from "./Performance/Performance";
import {
  useGetRatingHistoryQuery,
  useGetPerformanceDataQuery,
} from "../../features/apiSlice";
import { useSelector } from "react-redux";
const ProfileStats = ({ username }) => {
  const { gameFormat } = useSelector((state) => state.gameFormat.value);

  const {
    data: ratingHistory,
    error: ratingHistoryError,
    isFetching: ratingHistoryIsFetching,
  } = useGetRatingHistoryQuery(username);

  if (ratingHistoryError) return <h1>{ratingHistoryError.data.error}</h1>;

  const {
    data: performanceData,
    error: performanceError,
    isFetching: performanceIsFetching,
  } = useGetPerformanceDataQuery({
    username,
    gameFormat,
  });

  return (
    <div
      className={`flex items-center gap-10  sm:flex-row flex-col justify-around w-2/3 ${slate.container} px-5`}
    >
      {!ratingHistoryIsFetching ? (
        <>
          <Chart data={ratingHistory} />
          <div className="flex flex-col gap-5">
            <PeakRating data={ratingHistory} />
            {!performanceError ? <Performance data={performanceData} /> : ""}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileStats;
