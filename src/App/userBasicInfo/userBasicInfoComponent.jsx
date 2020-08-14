import React, { useEffect } from "react";
import "./styles/style.scss";
import { shieldIcon, drinksIcon, tick } from "../../assets/images";
import { ToolbarComponent } from "../common/toolbar";
import { Alert } from "../common/alert";
import { SplashLoadingComponent } from "../common/splashLoading";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { BottomNextComponent } from "../common/bottomNext";
import { AlertWithOptions } from "../common/alert";

GranTokenFailure.propTypes = {
  login: PropTypes.func,
  grantTokenErrorMessage: PropTypes.string,
  exitToFk: PropTypes.func,
};

function GranTokenFailure(props) {
  return (
    <AlertWithOptions
      title={"Login Failed"}
      content={props.grantTokenErrorMessage}
      option1={"TRY AGAIN"}
      option2={"EXIT"}
      handleOption1={props.login}
      handleOption2={props.exitToFk}
    />
  );
}

LFComponent.propTypes = {
  login: PropTypes.func,
};

function LFComponent(props) {
  const login = props.login;
  return (
    <>
      <SplashLoadingComponent
        motion={false}
        icon={drinksIcon}
        text="Something went wrong, please try again."
        buttonFunc={login}
        buttonText="Retry"
      />
    </>
  );
}

CollectInfoComponent.propTypes = {
  yob: PropTypes.string,
  gender: PropTypes.string,
  fetchKYCOptionsFunc: PropTypes.func,
  selectedID: PropTypes.string,
  consumerIDTypes: PropTypes.array,
  showConsumerIDs: PropTypes.bool,
  showDeclaration: PropTypes.bool,
  checkDeclaration: PropTypes.bool,
  selectedDocument: PropTypes.object,
  finalisedDocument: PropTypes.object,
  selectedDocumentValue: PropTypes.string,
  checkDeclarationFunc: PropTypes.func,
  changeBirthYear: PropTypes.func,
  changingGenderFunc: PropTypes.func,
  selectingIDProofFunc: PropTypes.func,
  changeDocumentValueFunc: PropTypes.func,
  finaliseIDProofFunc: PropTypes.func,
  grantTokenError: PropTypes.bool,
  grantTokenErrorMessage: PropTypes.string,
};

const OpenIDOptions = () => {
  document.getElementById("kycID").classList.remove("hide");
};

const CloseIDOptions = () => {
  document.getElementById("kycID").classList.add("hide");
};

YearOfBirthInputComponent.propTypes = {
  yob: PropTypes.string,
  changeBirthYear: PropTypes.func,
};

function YearOfBirthInputComponent(props) {
  return (
    <div className="input-component">
      <div className="input-component-label">YEAR OF BIRTH</div>
      <div className="inputComponentField input">
        <input
          onChange={(e) => props.changeBirthYear(e.target.value)}
          className="input_field_100 dob"
          value={props.yob}
          type="number"
        />
      </div>
    </div>
  );
}

GenderSelectionComponent.propTypes = {
  gender: PropTypes.string,
  changingGenderFunc: PropTypes.func,
};

function GenderSelectionComponent(props) {
  const gender = props.gender;
  return (
    <div className="input-component">
      <div className="input-component-label">GENDER</div>
      <div className="one-button-select-component">
        <div
          onClick={() => props.changingGenderFunc("male")}
          className={(gender == "male" ? "selected " : "") + "input-select"}
        >
          Male
        </div>
        <div
          onClick={() => props.changingGenderFunc("female")}
          className={(gender == "female" ? "selected " : "") + "input-select"}
        >
          Female
        </div>
        <div
          onClick={() => props.changingGenderFunc("na")}
          className={(gender == "na" ? "selected " : "") + "input-select"}
        >
          Non-Binary
        </div>
      </div>
    </div>
  );
}

function InfoComponent() {
  return (
    <div className="input-component flex">
      <div className="input-info">
        HipBar is an age verified platform. Please select a proof of identity to
        confirm and continue.
      </div>
      <div className="input-shield">
        <img src={shieldIcon} />
      </div>
    </div>
  );
}

function SelectIDComponent(props) {
  const finalisedDocument = props.finalisedDocument;
  //const showConsumerIDs = props.showConsumerIDs;
  const selectedDocument = props.selectedDocument;
  const availableConsumerIDs = props.consumerIDTypes;
  const selectedDocumentValue = props.selectedDocumentValue;
  return (
    <>
      <div className="input-component">
        <div className="input-component-label">PROOF OF IDENTITY</div>
        <div className="inputComponentField input">
          <input
            placeholder="Select ID proof"
            onClick={() => OpenIDOptions()}
            className="input_field_100"
            value={finalisedDocument.value}
            type="text"
            readOnly
          />
        </div>
      </div>
      <div className="options-overlay flex center hide" id="kycID">
        <div className="options">
          <div className="option_header flex vcenter no-fold-text">
            Select ID Proof
          </div>
          <div className="option_content">
            {availableConsumerIDs.map((id) => (
              <div className="radio_item flex vcenter" key={"key_" + id.idType}>
                <input
                  type="radio"
                  id={id.name}
                  name="idType"
                  value={id.idType}
                  onClick={(e) =>
                    props.selectingIDProofFunc({
                      id: id.name,
                      value: id.idType,
                    })
                  }
                />
                <div className="radiobtn radiobtn-relative"></div>
                <label
                  htmlFor={id.name}
                  className="no-fold-text option flex vcenter"
                >
                  {id.idType}
                </label>
              </div>
            ))}
          </div>
          <div className="option_footer flex vcenter hend">
            <div onClick={() => CloseIDOptions()} className="btun cancel">
              Cancel
            </div>
            <div
              onClick={() => {
                props.finaliseIDProofFunc(selectedDocument);
                CloseIDOptions();
              }}
              className={
                (selectedDocument != "" ? "active " : "inactive ") + "btun"
              }
            >
              Next
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          (finalisedDocument.value == undefined ? "hide " : "") +
          "input-component"
        }
      >
        <div className="input-component-label no-fold-text">
          ENTER YOUR <span className="caps">{finalisedDocument.value} </span>{" "}
          NUMBER
        </div>
        <div className="inputComponentField input">
          <input
            placeholder={"Enter your " + finalisedDocument.value + " number"}
            className="input_field_100"
            onChange={(e) => props.changeDocumentValueFunc(e.target.value)}
            value={selectedDocumentValue}
            type="text"
          />
        </div>
      </div>
    </>
  );
}
function CheckBoxComponent(props) {
  return (
    <div className="input-component">
      <div
        onClick={() => props.checkDeclarationFunc(true)}
        className={
          (props.checkDeclaration ? "selected " : "") +
          (props.showDeclaration ? "" : "inactive ") +
          "input-component-checkbox"
        }
      >
        <div className="checkbox flex hcenter vcenter">
          <img className="tick" src={tick} />
        </div>
        <div className="checkbox-text">
          I declare that the details furnished above are correct
        </div>
      </div>
    </div>
  );
}

function AlertValidateErrorComponent(props) {
  return (
    <Alert
      handleOption={() => props.closeError()}
      show={true}
      content={props.errorMessage}
      option={"Ok"}
    />
  );
}

function CollectInfoComponent(props) {
  const yob = props.yob;
  const checkDeclaration = props.checkDeclaration;
  const showDeclaration = props.showDeclaration;
  const updateKycFunc = props.updateKycFunc;
  const data = {
    dob: yob,
    gender: props.gender,
    kycType: props.finalisedDocument.id,
    kycValue: props.selectedDocumentValue,
  };

  return (
    <div className="page-container userBasicInfoComponent">
      <ToolbarComponent helpVisibility={false} title="Let's Get Started!" />
      <InfoComponent {...props} />
      <YearOfBirthInputComponent {...props} />
      <GenderSelectionComponent {...props} />
      <SelectIDComponent {...props} />
      <CheckBoxComponent {...props} />
      <BottomNextComponent
        title="Proceed"
        onClickFunc={() => updateKycFunc(data)}
        inActive={!checkDeclaration}
      />
      {props.showError && <AlertValidateErrorComponent {...props} />}
    </div>
  );
}

UserBasicInfoComponent.propTypes = {
  yob: PropTypes.string,
  gender: PropTypes.string,
  selectedID: PropTypes.string,
  consumerIDTypes: PropTypes.array,
  showConsumerIDs: PropTypes.bool,
  changeBirthYear: PropTypes.func,
  changingGenderFunc: PropTypes.func,
  updateKycFunc: PropTypes.func,
  selectingIDProofFunc: PropTypes.func,
  selectedDocument: PropTypes.object,
  selectedDocumentValue: PropTypes.string,
  checkDeclarationFunc: PropTypes.func,
  loginInProgress: PropTypes.bool,
  loginFailed: PropTypes.bool,
  loginSuccess: PropTypes.bool,
  collectUserDetails: PropTypes.bool,
  login: PropTypes.func,
  selectedAddress: PropTypes.object,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  closeError: PropTypes.func,
  userInfo: PropTypes.object,
  grantTokenError: PropTypes.bool,
};

function UserBasicInfoComponent(props) {
  const loginSuccess = props.loginSuccess;
  const loginInProgress = props.loginInProgress;
  const loginFailed = props.loginFailed;
  const collectUserDetails = props.collectUserDetails;
  const grantTokenError = props.grantTokenError;
  const trigger =
    !grantTokenError && !(loginSuccess || loginFailed || loginInProgress);
  useEffect(() => {
    if (trigger) {
      props.login();
    }
  });

  useEffect(() => {
    if (loginSuccess) {
      window.fcWidget.user.setProperties({
        firstName: props.userInfo.name,
        email: props.userInfo.email,
        phone: props.userInfo.mobile,
        userLoginType: "fk-web",
      });
    }
  }, [props.loginSuccess]);

  if (props.grantTokenError) {
    return <GranTokenFailure {...props} />;
  }

  if (loginInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  } else if (loginFailed) {
    return <LFComponent login={props.login} />;
  } else if (loginSuccess) {
    if (collectUserDetails) {
      return <CollectInfoComponent {...props} />;
    } else if (props.selectedAddress !== null) {
      return <Redirect to="/home" />;
    } else {
      return <Redirect to="/address/select/sf" />;
    }
  } else {
    return <div> </div>;
  }
}

export { UserBasicInfoComponent };
