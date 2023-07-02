import SectionHeader from "../SectionHeader/SectionHeader";
import avatar from "../../images/about-me.jpg";

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <SectionHeader>Студент</SectionHeader>
            <div className="about-me__columns">
                <div className="about-me__column">
                    <img src={avatar} className="about-me__avatar" alt="Фото автора" />
                </div>
                <div className="about-me__column">
                    <div className="about-me__info">
                        <h3 className="about-me__title">Юлия</h3>
                        <p className="about-me__about">Фронтенд-разработчик</p>
                        <p className="about-me__text">Я живу в Санкт-Петербурге, закончила физико-химический факультет Тартуского университета по специальности учитель физики, математики и информатики. Более 15 лет проработала учителем информатики в школе. Недавно решила сменить сферу деятельности и заняться фронтенд-разработкой.</p>
                    </div>
                    <div>
                        <a href="https://github.com/julia-kosobokova" target="_blank" rel="noreferrer" className="about-me__link" lang="en">Github</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default AboutMe; 