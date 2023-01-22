import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const submit = (event, inputElement) => {
    const inputValue = inputElement.current.value;

    if (inputValue.length === 0) return;

    if (event.key === "Enter") {
      navigate(`/${inputValue}`);
    }
  };

  return (
    <div className="w-3/5 flex justify-around items-center">
      <Input placeholder="Enter lichess.org username" submit={submit} />
    </div>
  );
};

export default Search;
