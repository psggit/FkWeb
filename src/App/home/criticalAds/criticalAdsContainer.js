import { connect } from "react-redux";
import { CriticaladsComponent } from "./criticaladsComponent";
import { fetchHomeCriticalAds, setPopupVisibility } from "./duck";

const mapStateToProps = (state) => {
  return {
    ...state,
    items: state.home.criticalads.items,
    hasViewed: state.home.criticalads.hasViewed,
    address: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeCriticalAds: (cityID) => dispatch(fetchHomeCriticalAds(cityID)),
    setPopupVisibility: () => dispatch(setPopupVisibility()),
  };
};

const CriticalAdsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CriticaladsComponent);

export { CriticalAdsContainer };
