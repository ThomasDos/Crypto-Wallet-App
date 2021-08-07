import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home.component";
import AddPage from "./pages/add/add.component";
import RemovePage from "./pages/remove/remove.component";
import Header from "./components/header/header.component";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dailyData, setDailyData] = useState();
  useEffect(() => {
    axios("crypto/day")
      .then((result) => {
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
        <Route component={HomePage} exact path="/" />
        <Route component={AddPage} exact path="/add" />
        <Route component={RemovePage} exact path="/remove" />
      </Switch>
    </div>
  );
}

export default App;
