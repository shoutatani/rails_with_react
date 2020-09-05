import { Column, Columns } from "bloomer";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../../../../api/common/axios";
import { RootState } from "../../../../reducers/RootReducer";

export const Header: React.FC = () => {
  const isLoggedIn = useSelector<RootState>((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogoutClicked: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response = await axios.get("/user_login/logout");
      if (response.status == 200) {
        dispatch({ type: "LOGOUT" });
      }
    } catch (error) {
      throw new Error("Something wrong on logout");
    }
  };

  return (
    <Columns>
      <Column isSize={2}>
        <Link to="/">{"Logo"}</Link>
      </Column>
      <Column isSize={10} style={{ textAlign: "right" }}>
        {isLoggedIn ? (
          <React.Fragment>
            <div>Logged in as xxxx</div>
            <a onClick={handleLogoutClicked}>Log out</a>
          </React.Fragment>
        ) : (
          <div>
            <Link to="/login">Log in</Link>
          </div>
        )}
      </Column>
    </Columns>
  );
};
