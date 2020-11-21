import { Column, Columns } from "bloomer";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../../../../actions";
import axios from "../../../../api/common/axios";
import { RootState } from "../../../../reducers";

export const Header: React.FC = () => {
  const isLoggedIn = useSelector<RootState>((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [shouldRedirectToTop, setShouldRedirectToTop] = React.useState(false);

  const handleLogoutClicked: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user_login/logout");
      if (response.status == 200) {
        dispatch(Logout());
      }
    } catch (error) {
      console.error("Something wrong on logout");
    }
    setShouldRedirectToTop(true);
  };

  if (shouldRedirectToTop) {
    window.location.href = "/";
  }

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
