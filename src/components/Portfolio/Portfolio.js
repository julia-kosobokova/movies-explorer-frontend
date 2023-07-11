function Portfolio() {
  return ( <
    section className = "portfolio" >
    <
    h2 className = "portfolio__title" > Портфолио < /h2> <
    ul className = "portfolio__links" >
    <
    li className = "portfolio__list-item" >
    <
    a href = "https://github.com/julia-kosobokova/how-to-learn"
    target = "_blank"
    rel = "noreferrer"
    className = "portfolio__link" >
    Статичный сайт <
    span > ↗ < /span> <
    /a> <
    /li> <
    li className = "portfolio__list-item" >
    <
    a href = "https://github.com/julia-kosobokova/russian-travel"
    target = "_blank"
    rel = "noreferrer"
    className = "portfolio__link" >
    Адаптивный сайт <
    span > ↗ < /span> <
    /a> <
    /li> <
    li className = "portfolio__list-item" >
    <
    a href = "https://github.com/julia-kosobokova/react-mesto-auth"
    target = "_blank"
    rel = "noreferrer"
    className = "portfolio__link" >
    Одностраничное приложение <
    span > ↗ < /span> <
    /a> <
    /li> <
    /ul> <
    /section>
  );
}

export default Portfolio;