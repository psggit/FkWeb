import React, { useLayoutEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";

CarouselComponent.propTypes = {
  items: PropTypes.any,
  fetchHomeCarousel: PropTypes.any,
  address: PropTypes.object,
  resetOnUnmount: PropTypes.func,
};

function CarouselComponent(props) {
  useLayoutEffect(() => {
    if (props.address && props.items.length === 0) {
      props.fetchHomeCarousel({
        cityID: props.address.city.id,
      });
    }
    return () => props.resetOnUnmount();
  }, []);

  const carouselItems = (props) => {
    return props.items.map((item, index) => {
      return (
        <div key={"carousel-item-" + index} className="xc">
          <img src={item.high_res_image} />
        </div>
      );
    });
  };

  return (
    <div className="m_wrap">
      <div className="s_wrap">
        <div className="dx">{props.items ? carouselItems(props) : <div />}</div>
      </div>
    </div>
  );
}

export { CarouselComponent };
