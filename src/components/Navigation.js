import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../store/Auth-context";
import { useContext } from "react";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const history = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(StoreContext);

  const logaoutHandler = () => {
    setIsLoggedIn(false);
    history("/");
  };

  return (
    <nav className={classes.navigation}>
      <Link className={classes.nav_button} onClick={logaoutHandler} to="/">
        Logout
      </Link>
      <Link className={classes.nav_button} to="/user">
        All movies
      </Link>
      <Link className={classes.nav_button} to="/fav">
        Best for me
      </Link>
    </nav>
  );
};

export default Navigation;
