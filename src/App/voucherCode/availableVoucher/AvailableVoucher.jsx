import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss"
import { nextIcon } from "../../../assets/images";
import { useHistory } from "react-router-dom";
import { Alert, AlertWithOptions } from "../../common/alert";

AvailableVoucher.propTypes = {
  fetchAvailableVoucher: PropTypes.func,
  searchVoucherCode: PropTypes.func,
  searchVoucherFailed: PropTypes.bool,
  searchVoucherSuccess: PropTypes.bool,
  fetchAvailableVoucherSuccess: PropTypes.bool,
  products: PropTypes.any,
};

function AvailableVoucher(props) {
  const history = useHistory();
  const retailerId = props.retailer.id
  const cityId = props.selectedAddress.city.id
  const stateId = props.selectedAddress.state.id
  const gps = props.selectedAddress.city.gps

  useEffect(() => {
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
      order_type: "delivery"
    }
    props.fetchAvailableVoucher(payload);
  }, []);

  const applyAvailableCoupon = (item) => {
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
      coupon: item.value
    }
    props.searchVoucherCode(payload);
  }

  const handleLearnMore = (item) => {
    history.push({
      pathname: "/voucher/terms",
      state: {
        voucherDetails: item
      },
    });
  }
  return (
    <div>
      <div className="available-voucher-code">Available Voucher Code</div>
      { props.fetchAvailableVoucherSuccess &&
        props.voucherData.data.map((item) => {
          return (
            <div className="wrap-voucher">
              <div className="wrap-title">
               <div>
                  <p>{item.value}</p>
                  <p>{item.expiresIn}</p>
               </div>
                <p className="apply-btn" onClick={() => applyAvailableCoupon(item)}>APPLY</p>
              </div>
              <div>{item.attributes.description}</div>
              <div className="bottom-button" onClick={() => handleLearnMore(item)}>
                LEARN MORE
                <img className="btn-arrow" src={nextIcon} />
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default AvailableVoucher;
