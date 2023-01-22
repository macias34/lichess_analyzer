const Button = ({ children }) => {
  return (
    <button className="bg-violet-700 py-3 px-4 font-semibold rounded-md transition hover:bg-violet-800">
      {children}
    </button>
  );
};

export default Button;
