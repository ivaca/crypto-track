import React from "react";
import "./coin.styles.scss";
import { connect } from "react-redux";

import { selectCoinByName } from "../../../../redux/coins/coins.selectors";

const Coin = ({ coin, filtered, history }) => {
  if (coin) {
    let { FROMSYMBOL, PRICE, ImageUrl } = coin;
    return (
      <div
        className={`coin${filtered ? "-no-anim" : ""}`}
        onClick={() => {
          history.push(`/crypto-track/coin/${FROMSYMBOL}`);
        }}
      >
        <div className="coin-img">
          <img src={`https://www.cryptocompare.com${ImageUrl}`} />
        </div>
        <div className="coin-name">{FROMSYMBOL}</div>
        <div className="coin-price">$ {PRICE ? PRICE : "-"}</div>
      </div>
    );
  }
  return <></>;
};

const mapStateToProps = (state, ownProps) => ({
  coin: selectCoinByName(ownProps.currency)(state),
});

export default connect(mapStateToProps)(Coin);
