import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = ({ style }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submit = (event, inputElement) => {
    const inputValue = inputElement.current.value;

    if (inputValue.length === 0) return;

    if (event.key === "Enter") {
      navigate(`/${inputValue}`);
      inputElement.current.value = "";
    }
  };

  return (
    <div className="w-screen flex justify-around items-center" style={style}>
      <Input placeholder="Enter lichess.org username" submit={submit} />
    </div>
  );
};

export default Search;
