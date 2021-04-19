import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component";
import Coinpage from "./components/pages/coinpage/coinpage.component";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Listener from "./utils/Listener";
import Header from "./components/pages/homepage/header/header.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/crypto-track/" component={Listener} />
        <Route exact path="/crypto-track/" component={Homepage} />
        <Route path="/crypto-track/coin/:name" component={Coinpage} />
      </div>
    </Router>
  );
}

export default App;
