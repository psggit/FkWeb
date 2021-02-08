import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss"
import { ToolbarComponent } from "../common/toolbar";
import { useHistory } from "react-router-dom";

VoucherTerms.propTypes = {
};

function VoucherTerms(props) {
  const history = useHistory();
  const voucherDetails = history.location.state.voucherDetails
  return (
    <div>
      <ToolbarComponent title="Voucher Terms" />
      <div className="voucher-term-container">
        <div className="voucher-title">{voucherDetails.value}</div>
        <div className="voucher-desc">{voucherDetails.attributes.longDescription}</div>
      </div>
    </div>
  );
}

export default VoucherTerms;
