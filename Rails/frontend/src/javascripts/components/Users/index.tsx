import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import List from "./List";
import New from "./New";

export const Users: React.FC = () => {
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
      </Switch>
    </React.Fragment>
  );
};
