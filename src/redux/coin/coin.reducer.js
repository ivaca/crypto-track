import CoinActionTypes from "./coin.types";

const INITIAL_STATE = { data: [], message: {} };

const coinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CoinActionTypes.FETCH_COIN_REQUESTED:
      return { ...state };
    case CoinActionTypes.FETCH_COIN_SUCCEEDED:
      return { data: action.payload.data, currency: action.payload.currency };
    case CoinActionTypes.FETCH_COIN_FAILED:
      return { message: action.payload };
    default:
      return state;
  }
};

export default coinReducer;
