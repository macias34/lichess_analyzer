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
    <div className="w-screen flex flex-col items-center">
      <h1 className="text-3xl text-red-500 m-20">{message()}</h1>
      <Search />
    </div>
  );
};

export default ErrorUser;
