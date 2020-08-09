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

export const jpNewCardConf = (JusPay) => {
  return () => {
    console.log(JusPay);
    return JusPay.Setup({
      payment_form: "#new_card_payment_form",
      success_handler: successHandler,
      error_handler: errorHandler,
      iframe_elements: {
        card_number: {
          container: ".card_number_div",
          attributes: {
            //            placeholder: "4111 1111 1111 1111",
          },
        },
        name_on_card: {
          container: ".name_on_card_div",
          attributes: {
            //          placeholder: "Cardholder Name",
          },
        },
        card_exp_month: {
          container: ".card_exp_month_div",
          attributes: {
            //        placeholder: "MM",
          },
        },
        card_exp_year: {
          container: ".card_exp_year_div",
          attributes: {
            //      placeholder: "YY",
          },
        },
        security_code: {
          container: ".security_code_div",
          attributes: {
            //    placeholder: "123",
          },
        },
      },
      auto_tab_enabled: true,
      auto_tab_from_card_number: "card_exp_month",
      styles: {
        input: {},
        ".card_number": {
          "line-height": "10px",
          "font-size": "16px",
          width: "100%",
          color: "#d1d2dd",
        },
        ".name_on_card": {
          "line-height": "20px",
          "font-size": "16px",
          width: "100%",
          color: "#d1d2dd",
        },
        ".card_exp_month": {
          "line-height": "30px",
          "font-size": "16px",
          width: "100%",
          color: "#d1d2dd",
        },
        ".card_exp_year": {
          "line-height": "40px",
          "font-size": "16px",
          width: "100%",
          color: "#d1d2dd",
        },
        ".security_code": {
          "line-height": "50px",
          "font-size": "16px",
          width: "100%",
          color: "#d1d2dd",
        },
        ":focus": {
          outline: "none",
        },
      },
      iframe_element_callback: function (event) {
        console.log(event);
      },
    });
  };
};
