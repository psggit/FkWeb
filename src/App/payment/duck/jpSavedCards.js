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

export const jpSavedCardsConf = (JusPay) => {
  return () => {
    console.log(JusPay);
    return JusPay.Setup({
      payment_form: "#payment_form",
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
          "line-height": "50px",
          "font-size": "16px",
          width: "100%",
          outline: "none",
          color: "#d1d2dd",
        },
        /* Add the styling to be added to input fields in focus state */
        ":focus": {},
      },
      /*
       * This function will be called with an event object as parameter in two cases:
       * 1. When some event occurs on the security_code field inside iframe element.
       * 2. The user clicks on the submit button and the values in some of the input fields are invalid. (In second case, we will send the event object with state of the first invalid field in checkout form, which is security_code here.)
       *
       * This event object will contain the state of the input field. You should use this event object to show validation messages in your checkout form.
       *
       */
      iframe_element_callback: function (event) {
        /*
         *  The following information will be available in the event object:
         *  1. event.target_element - (security_code) Name of the field field which generated this event.
         *
         *  2. event.valid - (true/false) This explains whether the value inside the input field of target_element is valid or not.
         *
         *  3. event.empty - (true/false) This explains whether the input field of target_element is empty or not.
         *
         *  4. event.card_brand - MASTERCARD/VISA/MAESTRO/AMEX/DINERS/DISCOVER/JCB/RUPAY
         *
         */
        console.log(event);
      },
    });
  };
};
