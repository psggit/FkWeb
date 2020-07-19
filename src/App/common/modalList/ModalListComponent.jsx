import React from "react";

function ModalListComponent() {
  return (
    <div className="options-overlay flex center hide" id="kycID">
      <div className="options">
        <div className="option_header flex vcenter no-fold-text">
          Select ID Proof
        </div>
        <div className="option_content">
          {availableConsumerIDs.map((id) => (
            <div key={id.idType}>
              <input
                type="radio"
                id={id.idType}
                name="idType"
                value={id.idType}
                onClick={(e) => props.selectingIDProofFunc(e.target.value)}
              />
              <label
                htmlFor={id.idType}
                className="no-fold-text option flex vcenter"
              >
                {" "}
                {id.idType}{" "}
              </label>
            </div>
          ))}
        </div>
        <div className="option_footer">
          <div onClick={() => CloseIDOptions()} className="cancel">
            Cancel
          </div>
          <div onClick={(e) => props.selectingIDProofFunc(e)} className="next">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
