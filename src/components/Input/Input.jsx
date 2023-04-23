import { useRef } from "react";

const Input = ({ placeholder, submit }) => {
  const inputElement = useRef(null);

  return (
    <input
      autoFocus
      ref={inputElement}
      className="h-12 sm:w-1/3 w-10/12 sm:text-xl text-lg text-emerald-200 text-center sm:mr-5 rounded-full border-4 border-emerald-400 bg-emerald-700 outline-none placeholder:text-emerald-200"
      type="text"
      placeholder={placeholder}
      onKeyDown={() => submit(event, inputElement)}
    />
  );
};

export default Input;
