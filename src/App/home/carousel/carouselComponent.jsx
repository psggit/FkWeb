import React, { useLayoutEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";

CarouselComponent.propTypes = {
  items: PropTypes.any,
  fetchHomeCarousel: PropTypes.any,
};

function CarouselComponent(props) {
  useLayoutEffect(() => {
    props.fetchHomeCarousel();
  });

  return (
    <div className="m_wrap">
      <div className="s_wrap">
        <div className="dx">
          {props.items.map((item, index) => (
            <div key={"carousel-item-" + index} className="xc">
              <img src={item.high_res_image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { CarouselComponent };
