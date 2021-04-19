import CurrencyActionTypes from "./currency.types";

export const addCurrency = (currency) => ({
  type: CurrencyActionTypes.ADD_CURRENCY,
  payload: currency,
});
