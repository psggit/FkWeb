import React from "react";
import { BottomNextComponent } from "../common/bottomNext";
import { ToolbarComponent } from "../common/toolbar";
import { EditText } from "../common/editText";

function AddCardAndProcessPayment() {
  return (
    <>
      <ToolbarComponent helpVisibility="false" title="Payment" />
      <div className="page-container">
        <EditText />
      </div>
      <BottomNextComponent routePath={"/order/placed"} title="Pay" />
    </>
  );
}

export { AddCardAndProcessPayment };
