import { FcRotateToPortrait } from "react-icons/fc";

const NoPortrait = () => {
  return (
    <div className="hidden max-sm:flex absolute gap-5 text-lg top-1/2 left-1/2 flex-col w-full items-center justify-center -translate-y-1/2 -translate-x-1/2">
      <FcRotateToPortrait size={100} />
      <span>This app doesn't work on portrait view.</span>
      <span className="text-emerald-500">
        Please rotate your phone to horizontal.
      </span>
    </div>
  );
};

export default NoPortrait;
