import { selectAddressAction } from "./actions";

const SelectAddressOperation = (value) => {
  return (dispatch, getState) => {
    var selectedAddress = getState().addressStore.savedUserAddresses.find(
      (address) => {
        return address.address_id == value;
      }
    );
    dispatch(selectAddressAction(selectedAddress));
  };
};

export { SelectAddressOperation };
