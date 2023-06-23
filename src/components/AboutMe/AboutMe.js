import SectionHeader from "../SectionHeader/SectionHeader";

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <SectionHeader>Студент</SectionHeader>
            <h3 className="about-me__title">Юлия</h3>
            <p className="about-me__about">Фронтенд-разработчик</p>
            <p className="about-me__text">Я живу в Санкт-Петербурге, закончила физико-химический факультет Тартуского университета по специальности учитель физики, математики и информатики. Увлекаюсь выращиванием комнатных цветов и вязанием игрушек. Более 15 лет проработала учителем информатики в школе. Недавно решила сменить сферу деятельности и заняться фронтенд-разработкой.</p>
        </section>
);
}
  
export default AboutMe; 