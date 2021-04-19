import { addCoin } from "../redux/coins/coins.actions";
import React from "react";
import { connect } from "react-redux";
import { selectListOfCurrencys } from "../redux/currency/currency.selectors";
import { addCurrency } from "../redux/currency/currency.actions";
import { createStructuredSelector } from "reselect";
class Listener extends React.Component {
  constructor({ addCoin, currencyList, addCurrency }) {
    super();
    this.state = {
      addCoin,
      currencyList,
      addCurrency,
    };
  }

  async componentDidMount() {
    const addCoin = (coin) => this.state.addCoin(coin);
    await fetch(
      `https://min-api.cryptocompare.com/data/top/price?limit=30&tsym=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        let currencyArray = data.Data.map((coin) => coin.CoinInfo.Name);
        this.state.addCurrency(currencyArray);

        data.Data.map((coin) =>
          addCoin({
            FROMSYMBOL: coin.CoinInfo.Name,
            ImageUrl: coin.CoinInfo.ImageUrl,
          })
        );

        const subs = currencyArray.map((coin) => `5~CCCAGG~${coin}~USD`);
        this.setState({
          subOpen: {
            action: "SubAdd",
            subs,
          },
          subClose: {
            action: "SubRemove",
            subs,
          },
        });
      });
    const init = () => {
      let { socket, subOpen } = this.state;

      socket.onopen = function (e) {
        socket.send(JSON.stringify(subOpen));
      };

      socket.onmessage = function (event) {
        const data = JSON.parse(event.data);

        if (data.TYPE === "5") addCoin(data);
      };
    };
    this.setState(
      {
        socket: new WebSocket(
          "wss://streamer.cryptocompare.com/v2?api_key=3fcfffe50f77167f3cd04dbad295184f5ac956da429af743be8116d3b6ab6bd3"
        ),
      },
      () => init.call()
    );
  }
  componentWillUnmount() {
    let { socket, subClose } = this.state;

    socket.send(JSON.stringify(subClose));
  }

  render() {
    return <></>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCoin: (coin) => dispatch(addCoin(coin)),
  addCurrency: (currency) => dispatch(addCurrency(currency)),
});

const mapStateToProps = createStructuredSelector({
  currencyList: selectListOfCurrencys,
});

export default connect(mapStateToProps, mapDispatchToProps)(Listener);
