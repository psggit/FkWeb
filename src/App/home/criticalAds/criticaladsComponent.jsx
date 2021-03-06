import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import "./style.scss";
import CloseIcon from "../../../assets/images/close.svg";

CriticaladsComponent.propTypes = {
  items: PropTypes.any,
  fetchHomeCriticalAds: PropTypes.any,
  setPopupVisibility: PropTypes.any,
  hasViewed: PropTypes.any,
  address: PropTypes.object,
};

function CriticaladsComponent(props) {
  const userHasViewed = props.hasViewed;
  let [startIndex, setStartIndex] = useState(0);

  const onCloseHandler = () => {
    document.body.classList.remove("modal-open");
    props.setPopupVisibility();
  };

  const handleSelect = (selectedIndex) => {
    setStartIndex(selectedIndex);
  };

  useEffect(() => {
    if (props.address && !userHasViewed) {
      props.fetchHomeCriticalAds({
        cityID: props.address.city.id,
      });
    }
  }, []);

  if (userHasViewed || props.items.length === 0) {
    return null;
  }

  document.body.classList.add("modal-open");
  return (
    <div className="options-overlay flex hcenter vcenter">
      <div className="ad-modal-content">
        <div className="modal-body">
          <Carousel
            activeIndex={startIndex}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
          >
            {props.items.map((item, index) => (
              <Carousel.Item key={"carousel-item-" + item.id}>
                <img className="critical-ad-image" src={item.high_res_image} />
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
