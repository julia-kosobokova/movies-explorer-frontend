import SectionHeader from "../SectionHeader/SectionHeader";

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <SectionHeader>О проекте</SectionHeader>
            <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </section>
);
}
  
export default AboutProject; 