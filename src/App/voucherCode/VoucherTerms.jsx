import React from "react";
import "./style.scss";
import { ToolbarComponent } from "../common/toolbar";
import { useHistory } from "react-router-dom";

function VoucherTerms() {
  const history = useHistory();
  const voucherDetails = history.location.state.voucherDetails;
  return (
    <div>
      <ToolbarComponent title="Voucher Terms" />
      <div className="voucher-term-container">
        <div className="voucher-title">{voucherDetails.value}</div>
        <div className="voucher-desc">
          {voucherDetails.attributes.longDescription}
        </div>
      </div>
    </div>
  );
}

export default VoucherTerms;
