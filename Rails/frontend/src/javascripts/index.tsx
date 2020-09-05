import "bulma/bulma.sass";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "../../node_modules/bulma/bulma.sass";
import axios from "./api/common/axios";
import { Addresses } from "./components/Addresses";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Header } from "./components/shared/layouts/Header";
import { rootReducer } from "./reducers/RootReducer";

async function LoggedIn() {
  try {
    const response = await axios.get("/admin_user_login/authenticated");
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

(async () => {
  const response = await LoggedIn();
  const isLoggedIn = response;

  const store = createStore(
    rootReducer,
    { isLoggedIn: isLoggedIn },
    composeWithDevTools(
      applyMiddleware()
      // other store enhancers if any
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addresses">
            <Addresses />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>,
    document.querySelector('div[data-react-entry="index"]')
  );
})();
