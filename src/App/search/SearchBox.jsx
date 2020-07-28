import React, { useState } from "react";

function SearchBox(props) {
  const [inputType] = useState("text");
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onFocus={() => props.cancelEnable(true)}
        onChange={handleChange}
        className="inputclass"
      />
    </>
  );
}
export { SearchBox };
