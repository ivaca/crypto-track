import CoinsActionTypes from "./coins.types";

export const addCoin = (coin) => ({
  type: CoinsActionTypes.ADD_COIN,
  payload: coin,
});
