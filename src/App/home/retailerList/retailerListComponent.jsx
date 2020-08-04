import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { rightArrowIcon } from "../../../assets/images";
import { useHistory } from "react-router-dom";

RetailerList.propTypes = {
  retailers: PropTypes.array,
  retailerFetchStatus: PropTypes.string,
  fetchRetailersFunc: PropTypes.func,
  selectedAddress: PropTypes.object,
};

function RetailerTemplate(retailers) {
  const history = useHistory();

  function showStoreDetails(retailer) {
    history.push({
      pathname: "/storefront",
      state: {
        retailer: retailer,
      },
    });
  }

  return retailers.retailers.map((retailer) => {
    return (
      <div
        key={retailer.retailer_id}
        className="retailer_item"
        onClick={() => {
          showStoreDetails(retailer);
        }}
      >
        <div className="retailer_link">
          <div className="retailer_name">{retailer.retailer_name}</div>
          <div className="retailer_info">{retailer.store_info_msg}</div>
        </div>
        <img src={rightArrowIcon} className="retailer_item_image" />
      </div>
    );
  });
}
function NoRetailerTemplate() {
  return <div>NO RETAILERS FOUND...</div>
}

function FetchFailedTemplate() {
  return <div>Failed to Fetch...</div>
}

function ServiceUnavailableTemplate() {
  return <div>Service Unavailable in your city...</div>
}

function RetailerList(props) {
  const retailers = props.retailers;
  const retailerFetchStatus = props.retailerFetchStatus;
  const fetchRetailersFunc = props.fetchRetailersFunc;
  const selectedAddress = props.selectedAddress;
  useEffect(() => {
    fetchRetailersFunc(selectedAddress);
  }, []);

  return (
    <div className="retailer_list_wrap">
      {retailerFetchStatus === "inProgress" && (
        <div className="flex hcenter vcenter loading">
          {" "}
          <div className="loader"></div>
        </div>
      )}
      {retailers.length !== 0 && retailerFetchStatus === "success" && (
        <RetailerTemplate retailers={retailers} />
      )}
      {retailers.length === 0 && retailerFetchStatus === "success" && (
        <NoRetailerTemplate />
      )}
      {retailerFetchStatus === "failed" && <FetchFailedTemplate />}
    </div>
  );
}

export { RetailerList };
