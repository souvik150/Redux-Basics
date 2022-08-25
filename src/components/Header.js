import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "./../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {!auth ? (
          <button onClick={loginHandler}>Login</button>
        ) : (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>{auth && <button onClick={logoutHandler}>Logout</button>}</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
