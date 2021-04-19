import { createSelector } from "reselect";

const selectCoin = (state) => state.coins.data;
export const selectCoins = createSelector([selectCoin], (coins) => coins);
export const selectCoinByName = (coinName) => {
  return createSelector([selectCoin], (coins) =>
    coins.find((coin) => coin.FROMSYMBOL === coinName)
  );
};
