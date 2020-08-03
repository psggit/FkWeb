import { connect } from "react-redux";
import { CarouselComponent } from "./carouselComponent";
import { fetchHomeCarousel } from "./duck";

const mapStateToProps = (state) => {
  return {
    items: state.home.carousel.items,
    address: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeCarousel: (value) => dispatch(fetchHomeCarousel(value)),
  };
};

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselComponent);

export { CarouselContainer };
