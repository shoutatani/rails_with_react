import "bulma/bulma.sass";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "../../node_modules/bulma/bulma.sass";
import axios from "./api/common/axios";
import { AddressBooks } from "./components/AddressBooks";
import { Login } from "./components/Login";
import Menu from "./components/Menu";
import { Layout } from "./components/shared/layouts";
import { Users } from "./components/Users";
import { rootReducer } from "./reducers/RootReducer";

async function LoggedIn() {
  try {
    const response = await axios.get("/user_login/authenticated");
    console.log("response=", response);
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
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/address_books">
              <AddressBooks />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Menu />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector('div[data-react-entry="index"]')
  );
})();
