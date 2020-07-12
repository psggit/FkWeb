import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

RetailerList.propTypes = {
  name: PropTypes.string,
  onSyed: PropTypes.any,
  onHarshit: PropTypes.any,
};

function RetailerList({ name, onSyed, onHarshit }) {
  return (
    <div className="retailer_list_wrap">
      <div className="retailer_item">
        <div className = "retailer_link">
          <div className = "retailer_name">
            Retailer - 1
          </div>
          <div className = "retailer_info">
            Information About Retailer
          </div>
        </div>
      </div>
      <div className="retailer_item">
        <div className = "retailer_link">
          <div className = "retailer_name">
            Retailer - 1
          </div>
          <div className = "retailer_info">
            Information About Retailer
          </div>
        </div>
      </div>
      <div className="retailer_item">
        <div className = "retailer_link">
          <div className = "retailer_name">
            Retailer - 1
          </div>
          <div className = "retailer_info">
            Information About Retailer
          </div>
        </div>
      </div>
      <div className="retailer_item">
        <div className = "retailer_link">
          <div className = "retailer_name">
            Retailer - 1
          </div>
          <div className = "retailer_info">
            Information About Retailer
          </div>
        </div>
      </div>
    </div>
  );
}

export { RetailerList };
