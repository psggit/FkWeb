import React from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../common/toolbar";
import SearchVoucher from "./searchVoucher/SearchVoucher"
import AvailableVoucher from "./availableVoucher/AvailableVoucher";
import "./style.scss"

VoucherCode.propTypes = {
};

function VoucherCode(props) {
  return (
    <div className="voucher-container">
      <ToolbarComponent title="Voucher Codes" />
      <SearchVoucher {...props} />
      <AvailableVoucher {...props}/>
    </div>
  );
}

export { VoucherCode } ;
