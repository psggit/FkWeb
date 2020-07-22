import React from "react";
import { RetailerListContainer } from "./retailerList";
import { CarouselContainer } from "./carousel";
import BottomNavigationComponent from "../common/bottomNavigation";

function Home() {
  return (
    <div>
      <CarouselContainer />
      <RetailerListContainer />;
      <BottomNavigationComponent />
    </div>
  );
}

export { Home };
