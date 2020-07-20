import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";

function OrderPlaced() {
  return (
    <>
      <ToolbarComponent title="Order Info" />
      <div className="page-container"></div>
      <BottomNextComponent routePath="/" title="Home" />
    </>
  );
}

export { OrderPlaced };
