import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import "./style.scss";
import CloseIcon from "../../../assets/images/close.svg";

CriticaladsComponent.propTypes = {
  items: PropTypes.any,
  fetchHomeCriticalAds: PropTypes.any,
  setPopupVisibility: PropTypes.any,
  isViewed: PropTypes.any,
};

function CriticaladsComponent(props) {
  const isVisible = props.isViewed;
  let [startIndex, setStartIndex] = useState(0);

  const onCloseHandler = () => {
    props.setPopupVisibility();
  };

  const handleSelect = (selectedIndex) => {
    setStartIndex(selectedIndex);
  };

  useEffect(() => {
    props.fetchHomeCriticalAds();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="options-overlay">
      <div className="modal-content">
        <div className="modal-body">
          <Carousel
            activeIndex={startIndex}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
          >
            {props.items.map((item, index) => (
              <Carousel.Item key={"carousel-item-" + index}>
                <img src={item.high_res_image} />
                <div className="section-bottom">
                  <div className="section-content">
                    <p className="ad_title">{item.ad_title}</p>
                    <p className="ad_description">{item.description}</p>
                    <p className="ad_disclaimer">{item.disclaimer}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="carousel-indicators">
            {props.items.map((item, index) =>
              index == startIndex ? (
                <span
                  key={"indicator-" + index}
                  className="indicator active"
                ></span>
              ) : (
                <span key={"indicator-" + index} className="indicator"></span>
              )
            )}
          </div>
        </div>
        <div className="closeButtonContainer">
          <button onClick={onCloseHandler} className="closeButton">
            <img src={CloseIcon} alt="Close Popup" />
          </button>
        </div>
      </div>
    </div>
  );
}

export { CriticaladsComponent };
