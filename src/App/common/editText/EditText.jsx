import React from "react";
import PropTypes from "prop-types";

EditText.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onTextChanged: PropTypes.func,
  errorMessage: PropTypes.string,
};

function EditText(props) {
  const { id, value, placeholder, errorMessage } = props;
  return (
    <div className="input-component">
      <div className="input-component-label">YEAR OF BIRTH</div>
      <div className="inputComponentField input">
        <input
          id={id}
          onChange={(e) => props.onTextChanged(id, e.target.value)}
          className="input_field_100 dob"
          value={value}
          placeholder={placeholder}
          type="number"
        />
      </div>
      <div className="edit-text-error">{errorMessage}</div>
    </div>
  );
}
