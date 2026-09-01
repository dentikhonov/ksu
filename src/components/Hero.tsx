import heroImage from "../assets/images/apron-beige-front.jpeg";
import Reveal from "./Reveal";
import "./Hero.css";

export default function Hero({ onRequestClick }: { onRequestClick: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal>
          <div className="hero__card">
          <div className="hero__text">
            <p className="section-eyebrow">Студия униформы и текстиля для HoReCa</p>
            <h1 className="hero__title">
              Текстиль, который собирает образ заведения
            </h1>
            <p className="hero__subtitle">
              Создаём единую текстильную систему: от униформы команды до
              сервировочного и интерьерного текстиля.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn-solid hero__cta" onClick={onRequestClick}>
                Обсудить проект
                <ArrowIcon />
              </button>
              <a href="#catalog" className="hero__text-link">Смотреть направления</a>
            </div>
          </div>
          <div className="hero__media">
            <img src={heroImage} alt="Униформа SLAP для ресторанного персонала" />
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
