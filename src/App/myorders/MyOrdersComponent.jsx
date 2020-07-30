import React, { useEffect } from "react";
import { HeaderComponent } from "../common/toolbar";
import "./style.scss";
import { OrderItem } from "./components";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

MyOrdersComponent.propTypes = {
  getMyOrdersFunc: PropTypes.func,
};

function MyOrdersComponent(props) {
  const history = useHistory();

  useEffect(() => {
    props.getMyOrdersFunc;
  }, []);

  function showOrderDetail() {
    history.push("/order/info");
  }

  return (
    <>
      <HeaderComponent title="My Orders" />
      <div className="page-container myorders-container">
        <OrderItem
          title="Order Info"
          amount="₹ 6,824.65"
          date="15 Apr, 2020  12:12 PM"
          retailerName="Kloud Bar"
          onClick={showOrderDetail}
        />
        <OrderItem
          title="Payment Failed"
          amount="₹ 6,824.65"
          date="15 Apr, 2020  12:12 PM"
          onClick={showOrderDetail}
        />
      </div>
    </>
  );
}

export { MyOrdersComponent };
