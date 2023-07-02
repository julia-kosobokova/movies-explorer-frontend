import SectionHeader from "../SectionHeader/SectionHeader";

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <SectionHeader>О проекте</SectionHeader>
            <div className="about-project__columns">
                <div className="about-project__column">
                    <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__column">
                    <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__table">
                <div className="about-project__table-left">
                    <div  className="about-project__table-title about-project__table-title_green">1 неделя</div>
                    <p className="about-project__table-text">Back-end</p>
                </div>
                <div className="about-project__table-right">
                    <div className="about-project__table-title">4 недели</div>
                    <p className="about-project__table-text">Front-end</p>
                </div>
            </div>
        </section>
);
}
  
export default AboutProject; 