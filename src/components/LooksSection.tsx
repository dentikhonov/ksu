import { Link } from "react-router-dom";
import dressImg from "../assets/images/dress-beige-collar.jpeg";
import hostessImg from "../assets/images/woman-hostess-stripe.jpeg";
import kaftanImg from "../assets/images/khaki-kaftan-women.jpeg";
import apronBackImg from "../assets/images/apron-beige-back.jpeg";
import Reveal from "./Reveal";
import "./LooksSection.css";

export default function LooksSection() {
  return (
    <section className="looks" id="looks">
      <Reveal className="container">
      <div className="looks__grid">
        <div className="looks__intro">
          <p className="section-eyebrow">Кейсы и фото</p>
          <h2 className="looks__title">Реализованные проекты</h2>
          <p className="looks__text">
            Форма на персонале, детали изделий и решения для проектов HoReCa.
          </p>
          <Link to="/portfolio" className="btn">
            Смотреть проекты
            <ArrowIcon />
          </Link>
        </div>

        <div className="looks__media looks__media--tall-left">
          <img src={kaftanImg} alt="Кафтаны с орнаментом для персонала" />
        </div>

        <div className="looks__stack">
          <div className="looks__media">
            <img src={dressImg} alt="Форма с вышитым воротником" />
          </div>
          <div className="looks__media">
            <img src={hostessImg} alt="Форма для хостес в полоску" />
          </div>
        </div>

        <div className="looks__media looks__media--tall-right">
          <img src={apronBackImg} alt="Форма с рюшами, вид сзади" />
        </div>
      </div>
      </Reveal>
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
