const PASSPORT_REGEX = new RegExp("^[A-Z]{1}[0-9]{7}$");
const PAN_CARD_REGEX = new RegExp("^[A-Z]{3}[P]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$");
const VOTER_ID_REGEX = new RegExp("^[A-Z]{2}[A-Z0-9]{8,10}$");
const DRIVING_LISCENSE_REGEX = new RegExp(
  "^[A-Z]{2}[0-9]{2}[A-Za-z0-9]{11,12}$"
);
const DRIVING_LISCENSE_KERALA_REGEX = new RegExp("^[0-9]{11}$");

export const validateKyc = (type, value) => {
  let valid = false;
  let message = "Invalid proof of identity";
  switch (type) {
    case "dl":
      valid =
        DRIVING_LISCENSE_REGEX.test(value) ||
        DRIVING_LISCENSE_KERALA_REGEX.test(value);
      message = "Invalid Driving License";
      break;
    case "passport":
      valid = PASSPORT_REGEX.test(value);
      message = "Invalid Passport";
      break;
    case "pan":
      valid = PAN_CARD_REGEX.test(value);
      message = "Invalid PAN";
      break;
    case "voterid":
      valid = VOTER_ID_REGEX.test(value);
      message = "Invalid Voter ID";
      break;
    default:
      valid = false;
      break;
  }
  return { valid, message };
};
