import { Avatar, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import "./Header.css";

const Header = () => {
  const user = useSelector(selectUser);

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">Godswill Blog App</Link>
      </div>

      {user ? (
        <div className="header__right">
          <div className="header__icons">
            <Link to="/">
              <i className="fas fa-home"></i>{" "}
            </Link>{" "}
            <Link to="#search">
              <i className="fas fa-search"></i>{" "}
            </Link>{" "}
            <Link to="#notifications">
              <i className="fas fa-bell"></i>{" "}
            </Link>
            <Link to="!#">
              <i onClick={signOut} class="fas fa-power-off" alt="Sign Out"></i>
            </Link>
            <Avatar className="header__avatar" src={user.photo}></Avatar>
          </div>
        </div>
      ) : (
        <Button onClick={signIn} variant="contained" color="primary">
          Sign In
        </Button>
      )}
    </div>
  );
};

export default Header;
