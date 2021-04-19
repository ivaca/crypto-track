import CurrencyActionTypes from "./currency.types";

const INITIAL_STATE = { data: [] };

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyActionTypes.ADD_CURRENCY:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default currencyReducer;
