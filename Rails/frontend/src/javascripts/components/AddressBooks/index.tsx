import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import List from "./List";
import New from "./New";
import { Complete } from "./New/Complete";

export const AddressBooks: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={path}>
          <List />
        </Route>
        <Route path={`${path}/new`}>
          <New />
        </Route>
        <Route path={`${path}/complete`}>
          <Complete />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
