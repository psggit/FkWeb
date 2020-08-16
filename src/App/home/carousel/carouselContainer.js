import { connect } from "react-redux";
import { CarouselComponent } from "./carouselComponent";
import { fetchHomeCarousel, resetOnUnmount } from "./duck";

const mapStateToProps = (state) => {
  return {
    items: state.home.carousel.items,
    address: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeCarousel: (value) => dispatch(fetchHomeCarousel(value)),
    resetOnUnmount: () => dispatch(resetOnUnmount()),
  };
};

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselComponent);

export { CarouselContainer };
