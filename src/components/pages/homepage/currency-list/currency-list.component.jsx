import React from "react";
import "./currency-list.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Coin from "../coin/coin.component";

import {
  selectSearchText,
  selectUseStatus,
} from "../../../../redux/search/search.selectors";
import { selectListOfCurrencys } from "../../../../redux/currency/currency.selectors";
import { toggleUsed } from "../../../../redux/search/search.actions";
import { addCoin } from "../../../../redux/coins/coins.actions";
const CurrencyList = ({
  searchText,
  currencyList,
  toggleUsed,
  isSearched,
  ...props
}) => {
  console.log(props);
  return (
    <div className="currency-list">
      {currencyList
        .filter((coin) =>
          coin.includes(searchText.toUpperCase()) || !searchText.length
            ? coin
            : null
        )
        .map((coin) =>
          searchText.length || isSearched ? (
            (toggleUsed(),
            (<Coin {...props} currency={coin} filtered key={coin} />))
          ) : (
            <Coin {...props} currency={coin} key={coin} />
          )
        )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  searchText: selectSearchText,
  isSearched: selectUseStatus,
  currencyList: selectListOfCurrencys,
});
const mapDispatchToProps = (dispatch) => ({
  addCoin: (coin) => dispatch(addCoin(coin)),
  toggleUsed: () => dispatch(toggleUsed()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
