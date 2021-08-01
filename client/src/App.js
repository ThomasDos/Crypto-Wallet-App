import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={SignInSignUpPage} exact path="/login" />
      </Switch>
    </div>
  );
}

export default App;
