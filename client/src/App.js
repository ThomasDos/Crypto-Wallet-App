import { Route, Switch } from "react-router-dom";
import "./App.css";
import GraphPreview from "./pages/graph-preview/grap-preview.component";
import AddPage from "./pages/add/add.component";
import RemovePage from "./pages/remove/remove.component";
import Header from "./components/header/header.component";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/home/home.component";

function App() {
  const [dailyData, setDailyData] = useState({
    BTC: 0,
    ETH: 0,
    XRP: 0,
    date: "01-01-1970",
  });
  useEffect(() => {
    axios("crypto/day")
      .then((result) => {
        console.log("my RESULT >>>", result.data);
        let { BTC, ETH, XRP, dateString: date } = result.data;
        date = date.split("-").reverse().join("-");
        setDailyData({ BTC, ETH, XRP, date });
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header {...dailyData} />
      <Switch>
        <Route render={() => <HomePage {...dailyData} />} exact path="/" />
        <Route component={GraphPreview} exact path="/graph" />
        <Route component={AddPage} exact path="/add" />
        <Route component={RemovePage} exact path="/remove" />
      </Switch>
    </div>
  );
}

export default App;
