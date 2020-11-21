import "bulma/bulma.sass";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "../../node_modules/bulma/bulma.sass";
import { IsAdmin, IsLoggedIn } from "./api/user";
import { AddressBooks } from "./components/AddressBooks";
import { Login } from "./components/Login";
import Menu from "./components/Menu";
import { Layout } from "./components/shared/layouts";
import { Users } from "./components/Users";
import reducer from "./reducers";

(async () => {
  const [isLoggedIn, isAdmin] = await Promise.all([IsLoggedIn(), IsAdmin()]);
  const store = createStore(
    reducer,
    { isLoggedIn, isAdmin },
    composeWithDevTools(
      applyMiddleware()
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
