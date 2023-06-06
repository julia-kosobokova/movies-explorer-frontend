import logo from "../../images/header-logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип проекта" lang="ru" className="header__logo" />
      <div>{props.children}</div>
    </header>
  );
}
  
export default Header; 