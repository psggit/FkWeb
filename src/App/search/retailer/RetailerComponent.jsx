import React from "react";
import PropTypes from "prop-types";
import { LoadingComponent } from "../../common/loading";
import { BrandContainer } from "../../common/brand";
import { SearchNotAvailable } from "../../common/searchNotAvailable";
import { useHistory } from "react-router-dom";

function RetailerComponent(props) {
  const { query, data, pending } = props;
  const ht = useHistory()
  function redirectToStore(retailer) {
    ht.push({
      pathname: "/storefront",
      state: {
        retailer: retailer,
      },
    });
  }

  const renderSku = (retailer) => {
    return (
      <>
        {retailer.brands.map((brand, index) => (
          <BrandContainer
            key={brand.brand_id + "," + retailer.retailer_id}
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
      <div className="initial-text search-message-container">
        <div>What are you looking for today?</div>
        <div className="mid-light-text">
          We&apos;ll tell you where it&apos;s
        </div>
        <div className="mid-light-text">available!</div>
      </div>
    );
  }
  return (
    <>
      {data ? (
        data.length == 0 ? (
          <SearchNotAvailable
            title="Sorry!"
            content="The drink you searched for isn't available at a store near you right now."
          />
        ) : (
          <div className="accordion-container">
            {data.map((retailer, index) => (
              <React.Fragment key={index + "s"}>
                <div className="accordion-title">
                  <span> </span>
                  <div
                    onClick={() => redirectToStore(retailer)}
                    key={retailer.retailer_name}
                  >
                    {retailer.retailer_name}
                  </div>
                </div>
                {renderSku(retailer)}
              </React.Fragment>
            ))}
          </div>
        )
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
  address: PropTypes.object,
  getSearchDrinks: PropTypes.func,
  data: PropTypes.array,
  pending: PropTypes.bool,
};

export { RetailerComponent };
