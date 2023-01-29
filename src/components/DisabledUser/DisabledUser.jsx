import Search from "../Search/Search";

const DisabledUser = () => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-7 justify-center bg-black absolute top-0 left-0">
      <h1 className="text-3xl text-orange-400">User's account is disabled.</h1>
      <span className="text-2xl text-emerald-400">Try another account !</span>
      <Search />
    </div>
  );
};

export default DisabledUser;
