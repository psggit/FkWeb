import React from "react";
import { RetailerListContainer } from "./retailerList";
import { CarouselContainer } from "./carousel";
import { CriticalAdsContainer } from "./criticalAds";
import BottomNavigationComponent from "../common/bottomNavigation";

function Home() {
  return (
    <div>
      <CriticalAdsContainer />
      <CarouselContainer />
      <RetailerListContainer />
      <BottomNavigationComponent />
    </div>
  );
}

export { Home };
