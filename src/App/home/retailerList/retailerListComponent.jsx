import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { rightArrowIcon } from "../../../assets/images";
import { useHistory } from "react-router-dom";

RetailerList.propTypes = {
  retailers: PropTypes.array,
  message: PropTypes.string,
  retailerFetchStatus: PropTypes.string,
  fetchRetailersFunc: PropTypes.func,
  selectedAddress: PropTypes.object,
};

function RetailerTemplate(retailers, history) {
  const ht = history;
  function showStoreDetails(retailer) {
    ht.push({
      pathname: "/storefront",
      state: {
        retailer: retailer,
      },
    });
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
          <div className="retailer_name no-fold-text">
            {retailer.retailer_name}
          </div>
          <div className="retailer_info no-fold-text">
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
      {text}
      <div onClick={() => showChooseAddress()} className="tryDifferentAddress">
        Try a different address...
      </div>
    </div>
  );
}

function FetchFailedTemplate(selectedAddress) {
  return (
    <div
      className="noRetailers hcenter vcenter flex"
      onClick={() => fetchRetailersFunc(selectedAddress)}
    >
      Failed to Fetch...
    </div>
  );
}

function ServiceUnavailableTemplate() {
  return <div>Service Unavailable in your city...</div>;
}

function RetailerList(props) {
  const history = useHistory();
  const retailers = props.retailers;
  const message = props.message;
  const retailerFetchStatus = props.retailerFetchStatus;
  const fetchRetailersFunc = props.fetchRetailersFunc;
  const selectedAddress = props.selectedAddress;
  useEffect(() => {
    fetchRetailersFunc(selectedAddress);
  }, []);

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
        RetailerTemplate(retailers, history)}
      {retailers.length === 0 &&
        retailerFetchStatus === "success" &&
        NoRetailerTemplate(message, history)}
      {retailerFetchStatus === "failed" && (
        <FetchFailedTemplate selectedAddress={selectedAddress} />
      )}
    </div>
  );
}

export { RetailerList };
