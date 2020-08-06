import React from "react";
import PropTypes from "prop-types";
import { LoadingComponent } from "../../common/loading";
import { BrandContainer } from "../../common/brand";

function RetailerComponent(props) {
  const { query, data, pending } = props;

  const renderSku = (retailer) => {
    return (
      <>
        {retailer.brands.map((brand, index) => (
          <BrandContainer
            key={brand.brand_id}
            brand={brand}
            retailer={retailer}
          />
        ))}
      </>
    );
  };
  if (pending) {
    return <LoadingComponent />;
  }
  if (query.length <= 2) {
    return (
      <div className="initial-text">
        <div>What are you looking for today?</div>
        <div className="mid-light-text">We'tell you where it's available !</div>
      </div>
    );
  }
  return (
    <>
      {data.length ? (
        <div className="accordion-container">
          {data.map((retailer, index) => (
            <React.Fragment key={index + "s"}>
              <div className="accordion-title">
                <span> </span>
                <div key={retailer.retailer_name}>{retailer.retailer_name}</div>
              </div>
              {renderSku(retailer)}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="initial-text">
          <div>Sorry! </div>
          <div
            className="sorry-text"
            style={{ width: "100%", margin: 0, padding: "5px 20px" }}
          >
            The drink you searched for isn't available at a store near you right
            now
          </div>
        </div>
      )}
    </>
  );
}

RetailerComponent.propTypes = {
  query: PropTypes.string,
  getSearchDrinks: PropTypes.func,
  data: PropTypes.array,
  pending: PropTypes.bool,
};

export { RetailerComponent };

