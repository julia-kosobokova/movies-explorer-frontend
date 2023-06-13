function Footer() {
    return (
      <footer className="footer">
        <p className="footer__top">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()}
          </p>
          <ul className="footer__links">
            <li className="footer__list-item">
              <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__list-item" lang="en">
              <a href="https://github.com/julia-kosobokova/" className="footer__link">Github</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;