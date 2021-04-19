import { createSelector } from "reselect";

const selectCurrencys = (state) => state.currency;

export const selectListOfCurrencys = createSelector(
  [selectCurrencys],
  (currency) => currency.data
);
