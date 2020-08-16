import { savedCardValid } from "./actions";
const successHandler = () => {
  return (status) => {
    console.log(status);
  };
};

const errorHandler = () => {
  return (
    error_code,
    error_message,
    bank_error_code,
    bank_error_message,
    gateway_id
  ) => {
    console.log(
      error_code,
      error_message,
      bank_error_code,
      bank_error_message,
      gateway_id
    );
  };
};

export const jpSavedCardsConf = (JusPay, index) => {
  return (dispatch) => {
    return JusPay.Setup({
      payment_form: "#payment_form" + index,
      type: "express",
      success_handler: successHandler(),
      error_handler: errorHandler(),

      iframe_elements: {
        security_code: {
          /* Class name of the <div> which will hold the iframe element for card security code. */
          container: ".security_code_div",
          attributes: {
            /* Field Attributes, which you want to set for the <input> field inside the iframe element. */
            placeholder: "cvv",
          },
        },
      },

      styles: {
        /* Add the styling for card security code input field here */
        ".security_code": {
          "line-height": "40px",
          "font-size": "16px",
          width: "100%",
          outline: "none",
          color: "#d1d2dd",
        },
        /* Add the styling to be added to input fields in focus state */
        ":focus": {},
      },

      iframe_element_callback: function (event) {
        let savedCardProp = {
          isValid: event.valid,
          index: index,
        };
        switch (event.type) {
          case "onready":
            savedCardProp.isValid = false;
            dispatch(savedCardValid(savedCardProp));
            break;
          default:
            savedCardProp.isValid = event.valid;
            dispatch(savedCardValid(savedCardProp));
            break;
        }
      },
    });
  };
};
