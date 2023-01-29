import Search from "../Search/Search";

const ErrorUser = ({ error }) => {
  const message = () => {
    switch (error.status) {
      case 404:
        return "User not found.";
      default:
        return error.data.error;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black absolute top-0 left-0">
      <h1 className="text-3xl text-red-500 m-20">{message()}</h1>
      <Search />
    </div>
  );
};

export default ErrorUser;
