import { useRef } from "react";

const Input = ({ placeholder, submit }) => {
  const inputElement = useRef(null);

  return (
    <input
      autoFocus
      ref={inputElement}
      className="h-20 w-2/3 text-2xl text-emerald-200 text-center mr-5 rounded-full border-4 border-emerald-400 bg-emerald-700 outline-none placeholder:text-emerald-200"
      type="text"
      placeholder={placeholder}
      onKeyDown={() => submit(event, inputElement)}
    />
  );
};

export default Input;
