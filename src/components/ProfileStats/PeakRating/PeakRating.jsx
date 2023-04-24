import { getPeakRating } from "../../../helpers/chartHelpers";
import { slate } from "../../../themes/cardThemes";
const PeakRating = ({ data }) => {
  const peakRating = getPeakRating(data);

  return (
    <div title={peakRating.x} className="flex items-center gap-3">
      <span className="font-semibold text-base">Peak rating</span>
      <span className="text-emerald-400 font-bold text-3xl max-lg:text-2xl">
        {peakRating.y}
      </span>
    </div>
  );
};

export default PeakRating;
