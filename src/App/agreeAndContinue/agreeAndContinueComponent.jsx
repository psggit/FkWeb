import React from "react";
import "./styles/style.scss";
import logo from "../../assets/images/drinksAppLogo.svg";

function AgreeAndContinueComponent() {
  return (
    <div className = "aAndCWrap">
      <div className="brandBox">
        <img src={logo}/>
        <div className = "subHead">
            YOUR BAR <br/> ON THE CLOUD
        </div>
        <div className = "tcWrap">
            <div className = "tc">
                I undertake that I am of <span>legal drinking age</span> at the location where I intend to purchase drinks. Further, I expressly instruct & authorise HipBar to <span>display
                pricing, content & catalog information</span> relating to alcoholic beverages in the HipBar App license for my use.
            </div>
          </div>
      </div>
      <div className="acButtonWrap">
        <div className="acButton"> Agree & Continue </div>
      </div>
      <div className = "aAndCTerms">
        <div className="tcLink">
            terms & conditions
        </div>
        <div className="tcLink">
            <div className = "subtcLink privacyLink">
                Privacy Policy
            </div>
            <div className = "subtcLink gpLink">
                Grievance Policy
            </div>
        </div>
      </div>
    </div>
  );
}

export { AgreeAndContinueComponent };
