import React, { useEffect, useState } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import AddressComponent from "./../components";
import { addAddressIcon } from "../../../assets/images";
import { BottomNextComponent } from "../../common/bottomNext";
import { LoadingComponent } from "../../common/loading";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { AlertWithOptions } from "../../common/alert";
import "./style.scss";

SelectAddressComponent.propTypes = {
  savedUserAddresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  selectAddressFunc: PropTypes.func,
  validateAddressFunc: PropTypes.func,
  delelteAddressFunc: PropTypes.func,
  onMountFunc: PropTypes.func,
  flow: PropTypes.string,
  redirect: PropTypes.string,
  apiStatus: PropTypes.object,
  isEmpty: PropTypes.object,
};

function SelectAddressComponent(props) {
  useEffect(() => {
    props.onMountFunc();
  }, []);

  useEffect(() => {
    if (props.apiStatus.validateAddressStatus == "failed") {
      setHideModal(true);
    }

    if (props.apiStatus.validateAddressStatus == "success") {
      history.push("/order/summary");
    }
  }, [props.apiStatus.validateAddressStatus]);

  let [hideModal, setHideModal] = useState(false);
  const listAddressApiStatus = props.apiStatus.listAddressStatus;
  const deleteAddressApiStatus = props.apiStatus.deleteAddressStatus;
  const validateAddressApiStatus = props.apiStatus.validateAddressStatus;
  const history = useHistory();
  const alertDetails = {
    title: "GPS Validation",
    content:
      "This location is not servicable yet. We're working hard to change that.",
    option1: "",
    option2: "OK",
    handleOption1: fnHideModal,
    handleOption2: fnHideModal,
  };

  function fnHideModal() {
    setHideModal(false);
  }

  function showAddAddress() {
    history.push({
      pathname: "/choose/location/" + props.redirect,
      state: {
        address: null,
      },
    });
  }

  
  function onClickProcess() {
    if (props.redirect === "sf") {
      // if (Object.keys(props.isEmpty).length == 0) {
      //   history.push("/home");
      // } else {
      //   props.validateAddressFunc(props.selectedAddress);
      // }
      history.push("/home");
    } else if (props.redirect === "osm") {
      props.validateAddressFunc(props.selectedAddress);
      // history.push("/order/summary");
    } else {
      history.push("/home");
    }
  }
  return (
    <>
      <ToolbarComponent helpVisibility={false} title="Choose Address" />
      <div className="page-container">
        {(listAddressApiStatus === "inProgress" ||
          listAddressApiStatus === "waiting" ||
          deleteAddressApiStatus === "inProgress") &&
        validateAddressApiStatus === "waiting" ? (
          <LoadingComponent />
        ) : (
          <>
            <AddressComponent {...props} />
            <div className="add-new-address" onClick={showAddAddress}>
              <div className="title">Add New Address</div>
              <img src={addAddressIcon} className="add-image" />
            </div>
          </>
        )}
      </div>
      <BottomNextComponent
        onClickFunc={onClickProcess}
        inActive={props.selectedAddress == undefined}
        title="Proceed"
      />
      {hideModal == true ? <AlertWithOptions {...alertDetails} /> : null}
    </>
  );
}

export { SelectAddressComponent };
