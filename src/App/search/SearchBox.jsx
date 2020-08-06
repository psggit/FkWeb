import React, { useState } from "react";
import { searchIcon } from "../../assets/images";
import PropTypes from "prop-types";

SearchBox.propTypes = {
  onFocusOut: PropTypes.func,
  onFocusIn: PropTypes.func,
  handleInput: PropTypes.func,
  placeholder: PropTypes.string,
};

function SearchBox(props) {
  const [inputType] = useState("search");
  //  const [inputValue, setInputValue] = useState("");
  const { handleInput, placeholder, onFocusIn, onFocusOut } = props;

  function handleChange(value) {
    //    setInputValue(value);
    handleInput(value);
  }
  return (
    <>
      <img className="search-img" src={searchIcon} alt="searchIcon" />
      <input
        type={inputType}
        name="input-form"
        onFocus={() => onFocusIn()}
        onBlur={() => onFocusOut()}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="inputclass"
        autoComplete="off"
      />
    </>
  );
}
export { SearchBox };
