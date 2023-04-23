import { getPeakRating } from "../../../helpers/chartHelpers";
import { slate } from "../../../themes/cardThemes";
const PeakRating = ({ data }) => {
  const peakRating = getPeakRating(data);

  return (
    <div className={`${slate.card}`}>
      <span className="font-semibold sm:text-xl text-base">Peak rating</span>
      <span className="text-emerald-400 font-bold text-3xl">
        {peakRating.y}
      </span>
      <span className="text-emerald-400 sm:text-lg text-sm">
        {peakRating.x}
      </span>
    </div>
  );
};

export default PeakRating;
