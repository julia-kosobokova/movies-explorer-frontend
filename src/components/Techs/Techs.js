import SectionHeader from "../SectionHeader/SectionHeader";

function Techs() {
    return (
        <section className="techs" id="techs">
            <SectionHeader>Технологии</SectionHeader>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__links">
                <li className="techs__list-item">
                    <a href="https://developer.mozilla.org/ru/docs/Learn/HTML" target="_blank" rel="noreferrer" className="techs__link" lang="en">HTML</a>
                </li>
                <li className="techs__list-item">
                    <a href="https://developer.mozilla.org/ru/docs/Learn/CSS" target="_blank" rel="noreferrer" className="techs__link" lang="en">CSS</a>
                </li>
                <li className="techs__list-item">
                    <a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript" target="_blank" rel="noreferrer" className="techs__link" lang="en">JS</a>
                </li>
                <li className="techs__list-item">
                    <a href="https://ru.legacy.reactjs.org/" target="_blank" rel="noreferrer" className="techs__link" lang="en">React</a>
                </li>
                <li className="techs__list-item">
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="techs__link" lang="en">Git</a>
                </li>
                <li className="techs__list-item">
                    <a href="https://expressjs.com/ru/" target="_blank" rel="noreferrer" className="techs__link" lang="en">Express.js</a>
                </li>
                <li className="techs__list-item">
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="techs__link" lang="en">mongoDB</a>
                </li>
            </ul>
        </section>
    );
}
  
export default Techs; 