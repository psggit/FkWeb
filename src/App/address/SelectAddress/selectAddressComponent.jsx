import React, { useEffect } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import AddressComponent from "./../components";
import { addAddressIcon } from "../../../assets/images";
import { BottomNextComponent } from "../../common/bottomNext";
import { LoadingComponent } from "../../common/loading";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./style.scss";

SelectAddressComponent.propTypes = {
  savedUserAddresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  selectAddressFunc: PropTypes.func,
  delelteAddressFunc: PropTypes.func,
  onMountFunc: PropTypes.func,
  flow: PropTypes.string,
  redirect: PropTypes.string,
  apiStatus: PropTypes.object,
};

function SelectAddressComponent(props) {
  useEffect(() => {
    props.onMountFunc();
  }, []);

  const listAddressApiStatus = props.apiStatus.listAddressStatus;
  const deleteAddressApiStatus = props.apiStatus.deleteAddressStatus;
  const history = useHistory();

  function showAddAddress() {
    history.push("/choose/location");
  }

  function onClickProcess() {
    if (props.redirect === "sf") {
      history.push("/home");
    } else if (props.redirect === "osm") {
      history.push("/order/summary");
    } else {
      history.push("/home");
    }
  }

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Choose Address" />
      <div className="page-container">
        <AddressComponent {...props} />
        {(listAddressApiStatus === "inProgress" ||
          deleteAddressApiStatus === "inProgress") && <LoadingComponent />}
        <div className="add-new-address" onClick={showAddAddress}>
          <div className="title">Add New Address</div>
          <img src={addAddressIcon} className="add-image" />
        </div>
      </div>
      <BottomNextComponent
        onClickFunc={onClickProcess}
        inActive={props.selectedAddress == undefined}
        title="Proceed"
      />
    </>
  );
}

export { SelectAddressComponent };
