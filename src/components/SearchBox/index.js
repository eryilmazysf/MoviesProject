import { useRef, useContext } from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledSearchButton,
} from "./SearchBox.style";
import { MovieContext } from "../../Movie";

export const SearchBox = (/*{ setSearchKeyword, placeholder }*/) => {
  // const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchKeyword(inputRef?.current.value);
    }
  };
  const inputRef = useRef();
  const { setSearchKeyword } = useContext(MovieContext);
  return (
    <StyledSearchBox>
      <StyledSearchInput
        ref={inputRef}
        placeholder={"search a movie"}
        onKeyDown={handleKeyDown}
        isColored={false} /* onChange={(e)=>setInputValue(e.target.value)}*/
      />
      <StyledSearchButton
        onClick={
          () =>
            setSearchKeyword(
              inputRef?.current.value
            ) /*setSearchKeyword(inputValue) */
        }
      >
        Search
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
