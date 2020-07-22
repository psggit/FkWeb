import { connect } from "react-redux";
import { CarouselComponent } from "./carouselComponent";
import { fetchHomeCarousel } from "./duck";

const mapStateToProps = (state) => {
  return { items: state.home.carousel.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeCarousel: () => dispatch(fetchHomeCarousel()),
  };
};

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselComponent);

export { CarouselContainer };
