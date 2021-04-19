import { addCoin } from "./coins.utils";
import CoinsActionTypes from "./coins.types";

const INITIAL_STATE = { data: [] };

const coinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CoinsActionTypes.ADD_COIN:
      return { data: addCoin(state.data, action.payload) };

    default:
      return state;
  }
};

export default coinReducer;
