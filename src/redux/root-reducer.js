import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import coinsReducer from "./coins/coins.reducer";
import coinReducer from "./coin/coin.reducer";
import searchReducer from "./search/search.reducers";
import currencyReducer from "./currency/currency.reducer";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["search", "currency"],
  whitelist: ["coins"],
};

const rootReducer = combineReducers({
  coins: coinsReducer,
  search: searchReducer,
  currency: currencyReducer,
  coin: coinReducer,
});

export default persistReducer(persistConfig, rootReducer);
