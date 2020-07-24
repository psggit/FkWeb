import React from "react";
import PropTypes from "prop-types";

EditText.propTypes = {
  id: PropTypes.string, // Id for the input field
  title: PropTypes.string, // Text about the input field
  inputType: PropTypes.string, //  number, text, month, password,
  placeholder: PropTypes.string, // Hint or Plcaeholder text.
  value: PropTypes.string, // Pass the default value
  onTextChanged: PropTypes.func, // Pass a function here to receive the change
  errorMessage: PropTypes.string, // To display the error message below the line
  inputMode: PropTypes.string, // Pass numeric to show number keypad.
  autoComplete: PropTypes.string, // section-cc | cc-number, cc-name, cc-csc, cc-exp, cc-email
  maxLength: PropTypes.string, // To limit the number of characters
};

function EditText(props) {
  const {
    id,
    title,
    inputType,
    value,
    placeholder,
    errorMessage,
    inputMode,
    autoComplete,
    onTextChanged,
    maxLength,
  } = props;
  return (
    <div className="input-component">
      <div className="input-component-label">{title}</div>
      <div className="inputComponentField input">
        <input
          id={id}
          onChange={(e) => onTextChanged(id, e.target.value)}
          className="input_field_100 dob"
          value={value}
          placeholder={placeholder}
          type={inputType}
          inputMode={inputMode}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
      </div>
      <div className="edit-text-error">{errorMessage}</div>
    </div>
  );
}

export { EditText };
