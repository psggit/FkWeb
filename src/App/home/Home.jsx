import React from "react";
import { RetailerListContainer } from "./retailerList";
import { CarouselContainer } from "./carousel";

function Home() {
  return (
    <div>
      <CarouselContainer />
      <RetailerListContainer />;
    </div>
  );
}

export { Home };
