import { connect } from "react-redux";
import { CriticaladsComponent } from "./criticaladsComponent";
import { fetchHomeCriticalAds, setPopupVisibility } from "./duck";

const mapStateToProps = (state) => {
  return {
    ...state,
    items: state.home.criticalads.items,
    isViewed: state.home.criticalads.isViewed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeCriticalAds: () => dispatch(fetchHomeCriticalAds()),
    setPopupVisibility: () => dispatch(setPopupVisibility()),
  };
};

const CriticalAdsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CriticaladsComponent);

export { CriticalAdsContainer };
