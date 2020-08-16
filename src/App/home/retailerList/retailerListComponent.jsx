import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { rightArrowIcon } from "../../../assets/images";
import { useHistory } from "react-router-dom";
import { Alert } from "../../common/alert";

RetailerList.propTypes = {
  retailers: PropTypes.array,
  message: PropTypes.string,
  retailerFetchStatus: PropTypes.string,
  fetchRetailersFunc: PropTypes.func,
  selectedAddress: PropTypes.object,
  resetOnUnmount: PropTypes.func,
};

function RetailerTemplate(retailers, history, showRetailerDisabledFunc) {
  const ht = history;
  function showStoreDetails(retailer) {
    if (retailer.should_blur) {
      showRetailerDisabledFunc();
    } else {
      ht.push({
        pathname: "/storefront",
        state: {
          retailer: retailer,
        },
      });
    }
  }

  return retailers.map((retailer) => {
    return (
      <div
        key={retailer.retailer_id}
        className="retailer_item"
        onClick={() => {
          showStoreDetails(retailer);
        }}
      >
        <div className="retailer_link">
          <div
            className={
              (retailer.should_blur
                ? "retailer_name_disable"
                : "retailer_name_enable") + " retailer_name line-clamp"
            }
          >
            {retailer.retailer_name}
          </div>
          <div className={"retailer_info line-clamp"}>
            {retailer.store_info_msg}
          </div>
        </div>
        <img src={rightArrowIcon} className="retailer_item_image" />
      </div>
    );
  });
}
function NoRetailerTemplate(text, history) {
  function showChooseAddress() {
    history.push("address/select/home");
  }
  return (
    <div className="noRetailers hcenter vcenter flex">
      <div>{text}</div>
      <div onClick={() => showChooseAddress()} className="tryDifferentAddress">
        Sorry! We don't deliver here yet.
      </div>
    </div>
  );
}

function FetchFailedTemplate(props) {
  return (
    <div
      className="noRetailers hcenter vcenter flex"
      onClick={() => props.fetchRetailersFunc(props.selectedAddress)}
    >
      Failed to Fetch...
      <br />
      <span className="retry">Retry</span>
    </div>
  );
}

function RetailerList(props) {
  const history = useHistory();
  const retailers = props.retailers;
  const message = props.message;
  const retailerFetchStatus = props.retailerFetchStatus;
  const fetchRetailersFunc = props.fetchRetailersFunc;
  const selectedAddress = props.selectedAddress;
  const [showRetailerDisabled, SetShowRetailerDisabled] = useState(false);

  useEffect(() => {
    fetchRetailersFunc(selectedAddress);
    return () => props.resetOnUnmount();
  }, []);

  if (showRetailerDisabled) {
    return (
      <Alert
        title={"Sorry!"}
        content={
          "This store is currently not accepting new orders. Please try later."
        }
        option={"OKAY"}
        show={true}
        handleOption={() => {
          SetShowRetailerDisabled(false);
        }}
      />
    );
  }

  function enableRetailerDisabled() {
    SetShowRetailerDisabled(true);
  }

  return (
    <div className="retailer_list_wrap">
      {retailerFetchStatus === "inProgress" &&
        retailerFetchStatus === "waiting" && (
          <div className="flex hcenter vcenter loading">
            {" "}
            <div className="loader"></div>
          </div>
        )}
      {retailers.length !== 0 &&
        retailerFetchStatus === "success" &&
        RetailerTemplate(retailers, history, enableRetailerDisabled)}
      {retailers.length === 0 &&
        retailerFetchStatus === "success" &&
        NoRetailerTemplate(message, history)}
      {retailerFetchStatus === "failed" && <FetchFailedTemplate {...props} />}
    </div>
  );
}

export { RetailerList };
