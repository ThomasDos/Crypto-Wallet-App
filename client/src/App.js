import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home.component";
import AddPage from "./pages/add/add.component";
import RemovePage from "./pages/remove/remove.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={AddPage} exact path="/add" />
        <Route component={RemovePage} exact path="/remove" />
      </Switch>
    </div>
  );
}

export default App;
