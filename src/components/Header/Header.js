import logo from "../../images/header-logo.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип проекта" lang="ru" className="header__logo" />
      <Navigation loggedIn={props.loggedIn}/>
    </header>
  );
}
  
export default Header; 