import React from "react";
import PropTypes from "prop-types";
import {LoadingComponent} from '../../common/loading'
import{BrandComponent}from '../../common/brand'

function RetailerComponent(props) {
    const {query,data,pending}=props;
    
    const renderSku = (item) => {
      return (
        <>
          {item.brands.map((item, index) => (
            <BrandComponent key={index+'key'}  brandList={item} />
          ))}
        </>
      );
    };
    if(pending){
      return  <LoadingComponent />
    }
    if(query.length <=2 ){
      return(<div className="initial-text">
      <div>What are you looking for today?</div>
      <div className="mid-light-text">We'tell you where it's available !</div>
    </div>)
    }
    return (
      <>
        {data.length ? (
          <div className="accordion-container">
            {data.map((item, index) => <React.Fragment key={index+'s'}>
            <div className="accordion-title">
            <span> </span>
              <div key={item.retailer_name}>{item.retailer_name}</div>
            </div>
            {renderSku(item)}</React.Fragment>)}
          </div>
        ) : ( 
          <div className="initial-text">
            <div>Sorry! </div>
            <div className="sorry-text" style={{width:'100%',margin:0,padding:'5px 20px'}}>The drink you searched for isn't available at a store near you right now</div>
          </div>       
        )}
      </>
    );
  }

  RetailerComponent.propTypes = {
    query: PropTypes.string,
    getSearchDrinks: PropTypes.func,
    data:PropTypes.array,
    pending:PropTypes.bool
  };
  
  export { RetailerComponent };