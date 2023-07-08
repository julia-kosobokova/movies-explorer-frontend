import logo from "../../images/header-logo.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="header">
      <a href="/" className="header__link">
        <img src={logo} alt="Логотип проекта" className="header__logo" />
      </a>
      <Navigation loggedIn={props.loggedIn}/>
    </header>
  );
}
  
export default Header; 