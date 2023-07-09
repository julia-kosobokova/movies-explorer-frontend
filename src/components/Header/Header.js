import { Link } from "react-router-dom";
import logo from "../../images/header-logo.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип проекта" className="header__logo" />
      </Link>
      <Navigation loggedIn={props.loggedIn} activeLink={props.activeLink} />
    </header>
  );
}
  
export default Header; 