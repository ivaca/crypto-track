import { takeEvery, put, call } from "redux-saga/effects";
import { fetchCoinSucceeded, fetchCoinFailed } from "./coin.actions";
import CoinActionTypes from "./coin.types";

function* fetchCoinAsync(action) {
  try {
    const coin = yield fetch(
      `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${action.payload}&tsym=USD&limit=30`
    )
      .then((response) => response.json())
      .then((json) => json.Data);

    yield put(
      fetchCoinSucceeded({ data: [...coin.Data], currency: action.payload })
    );
  } catch (e) {
    yield put(fetchCoinFailed(e.message));
  }
}
export function* fetchCoinStart() {
  yield takeEvery(CoinActionTypes.FETCH_COIN_REQUESTED, fetchCoinAsync);
}
