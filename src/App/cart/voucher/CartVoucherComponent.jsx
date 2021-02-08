import React from "react";
import { nextIcon, promoIcon, cancelPromo } from "../../../assets/images";
import "./style.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

CartVoucherComponent.propTypes = {
  summary: PropTypes.object,
  fetchSummary: PropTypes.func,
};

function CartVoucherComponent(props) {
  const history = useHistory();

  const handleNext = () => {
    console.log("from next")
    // history.push("/vouchers")
    history.push({
      pathname: "/vouchers"
    })
  }
  const handleCancelPromo = () => {
    location.reload()
    props.resetPromo();
  }
  return (
    <div className="voucher">
      <div className="voucher-main">
        <div className="section-1">
          <div className="promo-icon"><img className="promo" src={promoIcon} /></div>
           {props.summary !== null && props.summary.is_promo_applied === true ?
            <div className="applied-promo">
              <div className="promo-name">{props.summary.promo_code}</div>
              <div className="promo-message">{props.summary.promo_message}</div>
            </div> :
            <div className="apply-promo">Apply Voucher</div>
          }
        </div>
        <div className="section-2">
          { props.summary !== null && props.summary.is_promo_applied === true ?
            <img src={cancelPromo} onClick={handleCancelPromo}/> : <img src={nextIcon} onClick={handleNext}/>
          }
        </div>
      </div>
      {props.summary !== null && props.summary.is_promo_applied === true &&
        <div className="cashback-message">
          {props.summary.cashback_message}
        </div>
      }
    </div>
  );
}

export { CartVoucherComponent };
