function Footer() {
    return (
      <footer className="footer">
        <p>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <p className="footer__copyright" lang="en">
          &copy; {new Date().getFullYear()}. Mesto Russia
        </p>
      </footer>
    );
  }
  
  export default Footer;