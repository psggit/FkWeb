import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import successIcon from "../../assets/images/success.svg";
import PropTypes from "prop-types";
import {
  OrderTotalComponent,
  CartTotalComponent,
  GstNumberComponent,
  AdditionalChargersComponent,
} from "../common/summary";
import "./styles.scss";

OrderPlacedHeaderComponent.propTypes = {
  orderPrice: PropTypes.string,
  retailerName: PropTypes.string,
  purchasedOn: PropTypes.string,
  orderID: PropTypes.string,
};

function OrderPlacedHeaderComponent(props) {
  const { orderPrice, retailerName, purchasedOn, orderID } = props;

  return (
    <>
      <div className="header-container">
        <img src={successIcon} className="header-image" />
        <div className="header-detail-container">
          <div className="order-price">{orderPrice}</div>
          <div className="retailer-name">{retailerName}</div>
        </div>
      </div>
      <div className="order-info">
        <div className="detail">
          <div className="header">Purchased on:</div>
          <div className="content">{purchasedOn}</div>
        </div>
        <div className="detail">
          <div className="header">Order ID:</div>
          <div className="content">{orderID}</div>
        </div>
      </div>
    </>
  );
}

ArrivingComponent.propTypes = {
  arrivalTime: PropTypes.string,
  otp: PropTypes.string,
};

function ArrivingComponent(props) {
  const { arrivalTime, otp } = props;

  return (
    <>
      <div className="arrival-container">
        <div className="arrival-time">{arrivalTime}</div>
        <div className="otp-container">
          <div className="otp-title">OTP:</div>
          <div className="otp-number">{otp}</div>
        </div>
        <div className="keep-id-ready">keep your proof of ID ready</div>
        <div className="tell-a-friend-container">
          <div className="tell-a-friend">
            <div className="header">Tell a friend</div>
            <div className="content">Good news must be shared!</div>
          </div>
          <div className="invite-container">
            <div className="invite">Invite</div>
          </div>
        </div>
      </div>
    </>
  );
}

OrderDrinksComponent.propTypes = {
  brandName: PropTypes.string,
  volume: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
};

function OrderDrinksComponent(props) {
  const { brandName, volume, price, quantity } = props;

  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">DRINKS</div>
        <div className="brand-item">
          <div className="brand-details">
            <div className="brand-name">{brandName}</div>
            <div className="brand-sku-details">
              {volume} | {price}
            </div>
          </div>
          <div className="quantity">{quantity}</div>
        </div>
      </div>
    </>
  );
}

DeliveryAddressComponent.propTypes = {
  address: PropTypes.string,
  addressType: PropTypes.string,
};

function DeliveryAddressComponent(props) {
  const { addressType, address } = props;
  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">DELIVERY ADDRESS</div>
        <div className="address-type">{addressType}</div>
        <div className="address">{address}</div>
      </div>
    </>
  );
}

OrderSummaryComponent.propTypes = {
  orderTotal: PropTypes.string,
  cartTotal: PropTypes.string,
  additionalCharges: PropTypes.string,
  taxAmount: PropTypes.string,
  gstNumber: PropTypes.string,
};

function OrderSummaryComponent(props) {
  const {
    orderTotal,
    cartTotal,
    additionalCharges,
    taxAmount,
    gstNumber,
  } = props;

  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">ORDER SUMMARY</div>
        <OrderTotalComponent total={orderTotal} />
        <CartTotalComponent cartTotal={cartTotal} />
        <AdditionalChargersComponent
          label="Additional Charges"
          charges={additionalCharges}
        />
        <AdditionalChargersComponent label="Taxes" charges={taxAmount} />
        <GstNumberComponent gstNumber={gstNumber} />
      </div>
    </>
  );
}

function OrderPlaced() {
  return (
    <>
      <ToolbarComponent title="Order Info" />
      <div className="page-container order-placed">
        <OrderPlacedHeaderComponent
          orderPrice="Rs 50000"
          retailerName="Kloud Bar"
          purchasedOn="15, Apr 2020 12:20pm"
          orderID="#1233113213"
        />
        <ArrivingComponent arrivalTime="Arrving Today" otp="864753" />
        <OrderDrinksComponent
          brandName="Jhonnie"
          volume="750ml"
          price="Rs 2,000"
          quantity="1"
        />
        <DeliveryAddressComponent
          address="Address, Palavkaam,chennai"
          addressType="Home"
        />
        <OrderSummaryComponent
          orderTotal="Rs. 5214"
          cartTotal="Rs.5000"
          additionalCharges="Rs.100"
          taxAmount="Rs.120"
          gstNumber="15HBPD197123"
        />
      </div>
      <BottomNextComponent routePath="/" title="Home" />
    </>
  );
}

export { OrderPlaced };
