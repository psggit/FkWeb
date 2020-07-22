import React, { useState, useEffect } from "react";
import UpArrow from "../../../assets/images/up.svg";
import DownArrow from "../../../assets/images/down.svg";
function AccordionItem(props) {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  const activeClass = active ? "active" : "inactive";
  const brandList = props.details;
  return (
    <div className={activeClass}>
      <div className="accordionItem" onClick={toggle}>
        <span className="summary">{brandList.brand_name}</span>
        <span className="">
          <img src={active ? DownArrow : UpArrow} alt="up" />
        </span>
      </div>
      <span className="folding-pannel answer">50 ml</span>
      <span className="folding-pannel answer">100 ml</span>
    </div>
  );
}

function Accordion() {
  const [data, setData] = useState(sampleQuestions);
  const renderQuestion = (key) => {
    return <AccordionItem key={key} index={key} details={data[key]} />;
  };

  return (
    <div>
      <div className="accordion-container">
        <div className="accordion-title"><span> </span><h5>Kloud Bar</h5></div>
        {sampleQuestions.map((item, index) => renderQuestion(index))}{" "}
      </div>
    </div>
  );
}
const sampleQuestions = [
  {
    brand_name: "Budejovicky Budvar",
    brand_id: 2192,
    logo_low_res_image:
      "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_300/v1557824990/Brand%20Logo's/TN/Beer.jpg",
    promo_text: "",
    sku: [
      {
        sku_id: 3465,
        volume: 330,
        promo_text: "",
        price: 270,
        offer_value: 0,
        is_on_pack: false,
      },
    ],
  },
  {
    brand_name: "Budweiser",
    brand_id: 5888,
    logo_low_res_image:
      "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_300/v1528879128/AB%20INBEV/SKU/Budweiser_650.jpg",
    promo_text: "",
    sku: [
      {
        sku_id: 12209,
        volume: 650,
        promo_text: "",
        price: 110,
        offer_value: 0,
        is_on_pack: false,
      },
    ],
  },
  {
    brand_name: "Budweiser Premium King of Beers",
    brand_id: 15,
    logo_low_res_image:
      "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_300/v1553255597/Brand%20Logo's/AB%20Inbev/Budweiser.jpg",
    promo_text: "",
    sku: [
      {
        sku_id: 980,
        volume: 330,
        promo_text: "",
        price: 160,
        offer_value: 0,
        is_on_pack: false,
      },
    ],
  },
];
export { Accordion };
