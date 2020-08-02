import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import PropTypes from "prop-types";
import "./style.scss";

CriticaladsComponent.propTypes = {
    items: PropTypes.any,
    fetchHomeCriticalAds: PropTypes.any,
    setPopupVisibility: PropTypes.any,
    isFirstView: PropTypes.any
};

function CriticaladsComponent(props) {
    const isVisible = props.isFirstView;
    let [startIndex, setStartIndex] = useState(0);
    
    const onCloseHandler = () => {
      props.setPopupVisibility();
    }

    const handleSelect = (selectedIndex, e) => {
      setStartIndex(selectedIndex);
    };

    useEffect(() => {
      props.fetchHomeCriticalAds();
    }, [isVisible]);

    if(!isVisible){
      return null;
    }

   
    return (
      <div className="options-overlay">
        <div className="modal-content">
            <div className="modal-body">
              <Carousel activeIndex={startIndex} onSelect={handleSelect} controls={false} indicators={false}>
                  {props.items.map((item, index) => (
                  <Carousel.Item key={"carousel-item-" + index}>
                    <img src={item.high_res_image} />
                    <div className="section-bottom">
                        <p className="ad_title">{item.ad_title}</p>
                        <p className="ad_description">{item.description}</p>
                        <p className="ad_disclaimer">{item.disclaimer}</p>
                    </div>
                  </Carousel.Item>
                  ))}
              </Carousel>
              <div className="carousel-indicators">
                {props.items.map((item, index) => (
                  (index == startIndex) ?  <span key={"indicator-"+index} className="indicator active"></span> : <span key={"indicator-"+index} className="indicator"></span>
                  
                ))}
              </div>
            </div>
            <div className="closeButtonContainer">
              <button onClick={onCloseHandler} className="closeButton">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0.666504C21.3733 0.666504 27.3333 6.6265 27.3333 13.9998C27.3333 21.3732 21.3733 27.3332 14 27.3332C6.62667 27.3332 0.666672 21.3732 0.666672 13.9998C0.666672 6.6265 6.62667 0.666504 14 0.666504ZM18.7867 7.33317L14 12.1198L9.21334 7.33317C9.21334 7.33317 8.66667 7.33317 8.00001 7.99984C7.33334 8.6665 7.33334 9.21317 7.33334 9.21317L12.12 13.9998L7.33334 18.7865C7.33334 18.7865 7.33334 19.3332 8.00001 19.9998C8.66667 20.6665 9.21334 20.6665 9.21334 20.6665L14 15.8798L18.7867 20.6665C18.7867 20.6665 19.3333 20.6665 20 19.9998C20.6667 19.3332 20.6667 18.7865 20.6667 18.7865L15.88 13.9998L20.6667 9.21317C20.6667 9.21317 20.6667 8.6665 20 7.99984C19.3333 7.33317 18.7867 7.33317 18.7867 7.33317Z" fill="#D1D2DD"/>
                  </svg>
              </button>
            </div>
        </div>
      </div>
    );
  }
  
  export { CriticaladsComponent };