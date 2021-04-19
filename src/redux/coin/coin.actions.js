import CoinActionTypes from "./coin.types";

export const fetchCoin = (currency) => ({
  type: CoinActionTypes.FETCH_COIN_REQUESTED,
  payload: currency,
});

export const fetchCoinSucceeded = (coin) => ({
  type: CoinActionTypes.FETCH_COIN_SUCCEEDED,
  payload: coin,
});

export const fetchCoinFailed = (error) => ({
  type: CoinActionTypes.FETCH_COIN_FAILED,
  payload: error,
});
