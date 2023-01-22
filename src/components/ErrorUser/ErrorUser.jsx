import Search from "../Search/Search";

const ErrorUser = ({ message }) => {
  return (
    <div className="w-full flex flex-col items-center gap-7">
      <h1 className="text-3xl text-red-500">{message}</h1>
      <span className="text-2xl text-emerald-400">Try another account !</span>
      <Search />
    </div>
  );
};

export default ErrorUser;
