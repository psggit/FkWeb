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

export const jpUpiConf = (JusPay) => {
  return () => {
    return JusPay.Setup({
      payment_form: "#upi_payment_form",
      success_handler: successHandler(),
      error_handler: errorHandler(),
      iframe_element_callback: function (event) {
        console.log(event);
      },
    });
  };
};
