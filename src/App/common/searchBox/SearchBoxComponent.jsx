import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { searchIcon } from "../../../assets/images";

SearchBoxComponent.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChangeFunc: PropTypes.func,
  onCancelFunc: PropTypes.func,
};

function SearchBoxComponent(props) {
  return (
    <div className="search-box-wrapper">
      <img className="searchIcon" src={searchIcon} />
      <input
        placeHolder={props.placeHolder}
        value={props.value}
        onChange={(e) => {
          props.onChangeFunc(e.target.value);
        }}
      />
      <div
        className="inputCross"
        onClick={() => {
          props.onChangeFunc("");
        }}
      >
        {" "}
        x{" "}
      </div>
      <div onClick={() => props.onCancelFunc()} className="search-cancel">
        Cancel
      </div>
    </div>
  );
}

export { SearchBoxComponent };
