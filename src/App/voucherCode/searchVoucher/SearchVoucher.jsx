import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EditText } from "../../common/editText";
import { Alert, AlertWithOptions } from "../../common/alert";
import { useHistory } from "react-router-dom";
import "./style.scss"

SearchVoucher.propTypes = {
  searchVoucherCode: PropTypes.func,
  searchVoucherSuccess: PropTypes.bool,
  searchVoucherFailed: PropTypes.bool,
  searchVoucherError: PropTypes.string,
  products: PropTypes.any,
  resetOnUnmount: PropTypes.func,
  resetPromo: PropTypes.func,
  fetchSummarySuccess: PropTypes.bool,
  fetchSummaryError: PropTypes.bool,
  fetchSummaryErrorMessage: PropTypes.string,
};

function SearchVoucher(props) {
  const history = useHistory();
  const [value, setValue] = useState("")
  const [disable, setDisable] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [summaryError, setSummaryError] = useState(props.fetchSummaryError)
  const retailerId = props.retailer.id
  const cityId = props.selectedAddress.city.id
  const stateId = props.selectedAddress.state.id
  const gps = props.selectedAddress.city.gps

  useEffect(() => {
    if (props.searchVoucherSuccess ) {
       props.fetchSummary(props)
      //history.push("/cart")
    }
  }, [props.searchVoucherSuccess]);

  useEffect(() => {
      if (props.searchVoucherFailed) {
        setShowAlert(true)
        setDisable(false)
    }
    return () => props.resetOnUnmount();
  }, [props.searchVoucherFailed, props.searchVoucherSuccess]);

  useEffect(() => {
    if (props.fetchSummaryError) {
      setSummaryError(props.fetchSummaryError)
    }
  }, [props.fetchSummaryError]);

  useEffect(() => {
    if (props.fetchSummarySuccess && !props.fetchSummaryError && props.summary.is_promo_applied === true) {
      history.push("/cart");
    }
  }, [props.fetchSummarySuccess]);

  function fnHideModal() {
    setShowAlert(false);
    setValue("")
  }

  function fnHidePopup(){
    setSummaryError(false)
    // props.resetPromo();
    setValue("")
  }

  const applyCoupon = () => {
    let products = [];
    for (let prod of Object.values(props.products)) {
      let p = {
        count: prod.count,
        sku_id: prod.skuId,
      };
      products.push(p);
    }
    const payload = {
      city_id: cityId,
      gps: gps, 
      products: products,
      retailer_id: retailerId,
      state_id: stateId,
      order_type: "delivery",
      coupon: value
    }
    if (value.length >= 2){
      props.searchVoucherCode(payload);
    }
  }

  return (
    <div className="voucher-text-container">
      <div className="voucher-code">
        <EditText
          id="voucherCode"
          placeholder="Enter Voucher Code"
          inputType="text"
          autoComplete="none"
          value={value}
           onTextChanged={(id, value) => { 
             setValue(value)
             if (value.length >= 2) {
               setDisable(true)
             } else {
               setDisable(false)
             }
             }}
        />
      </div>
      <div id="apply" className={(disable === true ? "active" : "disabled")} onClick={applyCoupon}>APPLY</div>
      {showAlert === true && (
        <Alert
          title={"Sorry!"}
          handleOption={fnHideModal}
          show={true}
          content={props.searchVoucherError}
          option={"Ok"}
        />
      )}
      {
       props.fetchSummarySuccess &&  summaryError === true && (
          <Alert
            title={"Sorry!"}
            handleOption={fnHidePopup}
            show={true}
            content={props.fetchSummaryErrorMessage}
            option={"Ok"}
          />
        )
      }
    </div>
  );
}

export default SearchVoucher;
