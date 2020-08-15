import React, { useState } from "react";
import { searchIcon, exitIcon } from "../../assets/images";
import PropTypes from "prop-types";

SearchBox.propTypes = {
  onFocusOut: PropTypes.func,
  onFocusIn: PropTypes.func,
  handleInput: PropTypes.func,
  placeholder: PropTypes.string,
};

function SearchBox(props) {
  const [inputType] = useState("search");
  const [inputValue, setInputValue] = useState("");
  //  const [inputValue, setInputValue] = useState("");
  const { handleInput, placeholder, onFocusIn, onFocusOut } = props;

  function handleChange(value) {
    setInputValue(value);
    handleInput(value);
  }

  function clearText() {
    setInputValue("");
  }

  return (
    <>
      <div className="inputWrap">
        <img className="search-img" src={searchIcon} alt="searchIcon" />
        <input
          id="inpt-search"
          type={inputType}
          name="input-form"
          onFocus={() => onFocusIn()}
          onBlur={(e) => onFocusOut(e)}
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          className="inputclass"
          autoComplete="off"
        />
        <img
          className={
            inputValue == ""
              ? "hide-content inputCross"
              : "show-content inputCross"
          }
          src={exitIcon}
          alt="exitIcon"
          onClick={clearText}
        />
      </div>
    </>
  );
}
export { SearchBox };
