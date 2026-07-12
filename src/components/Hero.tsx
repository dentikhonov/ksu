import heroImage from "../assets/images/apron-beige-front.jpeg";
import Reveal from "./Reveal";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal>
          <div className="hero__card">
          <div className="hero__text">
            <p className="section-eyebrow">Форма для HoReCa</p>
            <h1 className="hero__title">
              Стиль в деталях,
              <br />
              сервис в форме
            </h1>
            <p className="hero__subtitle">
              Продуманная форма для ресторанов, отелей и кафе — от концепции
              до безупречного исполнения.
            </p>
            <a href="#catalog" className="btn hero__cta">
              Перейти в каталог
              <ArrowIcon />
            </a>
          </div>
          <div className="hero__media">
            <img src={heroImage} alt="Форма для ресторанного персонала" />
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
