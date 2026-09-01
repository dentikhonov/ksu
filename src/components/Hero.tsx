import heroImage from "../assets/images/hero-model-cutout-clean.png";
import Reveal from "./Reveal";
import "./Hero.css";

export default function Hero({ onRequestClick }: { onRequestClick: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal>
          <div className="hero__stage">
            <p className="hero__manifesto">
              Текстиль,
              <br />
              который собирает
              <br />
              образ заведения.
            </p>

            <p className="hero__wordmark" aria-hidden="true">SLAP</p>

            <div className="hero__portrait">
              <img src={heroImage} alt="Униформа SLAP для команды ресторана" />
            </div>

            <div className="hero__actions">
              <button type="button" className="btn btn-solid" onClick={onRequestClick}>
                Обсудить проект
              </button>
              <a href="#catalog" className="hero__text-link">Смотреть направления</a>
            </div>

            <div className="hero__meta">
              <span>UNIFORM</span>
              <span>TABLE TEXTILE</span>
              <span>INTERIOR TEXTILE</span>
              <small>HoReCa · 2026</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
