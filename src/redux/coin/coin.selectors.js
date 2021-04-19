import { createSelector } from "reselect";

const selectCoin = (state) => (state.coin ? state.coin : {});
export const selectCoinHistoryData = createSelector(
  [selectCoin],
  (coin) => coin
);
