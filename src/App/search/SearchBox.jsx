import React, { useState } from "react";
import searchIcon from "../../assets/images/search.svg";

function SearchBox(props) {
  const [inputType] = useState("search");
  const [inputValue, setInputValue] = useState("");
  const{handleInput,cancelEnable}=props
  function handleChange(event) {
    let value=event.target.value;
    setInputValue(value);
    handleInput(value);
  }
  return (
    <>
      <img className="search-img"src={searchIcon} alt='searchIcon' />
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onFocus={() => cancelEnable(true)}
        onChange={handleChange}
        placeholder="Search drinks"
        className="inputclass"
        autoComplete="off"
      />
    </>
  );
}
export {SearchBox};
