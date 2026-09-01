import teamImg from "../assets/images/ethno-team.jpeg";
import apronImg from "../assets/images/apron-beige-front.jpeg";
import detailImg from "../assets/images/dress-beige-collar.jpeg";
import campaignImg from "../assets/images/khaki-kaftan-women.jpeg";
import Reveal from "./Reveal";
import "./EditorialShowcase.css";

const QUICK_DIRECTIONS = [
  { title: "Униформа", text: "Команда в единой визуальной системе", image: teamImg, href: "#catalog" },
  { title: "Фартуки", text: "Зал, бар, кухня и специальные задачи", image: apronImg, href: "#catalog" },
  { title: "Текстиль", text: "Сервировка и интерьер заведения", image: detailImg, href: "#catalog" },
];

const BENEFITS = [
  ["01", "HoReCa-фокус", "Понимаем ресторанную эксплуатацию"],
  ["02", "Материалы", "Подбираем ткань под задачу"],
  ["03", "Единый стандарт", "Команда, стол и интерьер"],
  ["04", "Дозакупки", "Сохраняем параметры проекта"],
];

export default function EditorialShowcase() {
  return (
    <section className="editorial-showcase">
      <div className="editorial-showcase__rail">
        <div className="container editorial-showcase__rail-grid">
          {QUICK_DIRECTIONS.map((item) => (
            <a className="quick-direction" href={item.href} key={item.title}>
              <img src={item.image} alt="" />
              <div><h2>{item.title}</h2><p>{item.text}</p><span>Подробнее →</span></div>
            </a>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="editorial-showcase__campaign">
          <div className="container editorial-showcase__campaign-grid">
            <div className="editorial-showcase__campaign-copy">
              <p className="section-eyebrow">Единый текстильный образ</p>
              <h2>Команда, стол и пространство</h2>
              <p>SLAP связывает униформу, сервировку и интерьер в одну визуальную систему заведения.</p>
              <a href="#about" className="btn">О студии</a>
            </div>
            <div className="editorial-showcase__campaign-media">
              <img src={campaignImg} alt="Униформа SLAP в ресторанной среде" loading="lazy" />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="editorial-showcase__benefits">
        <div className="container editorial-showcase__benefit-grid">
          {BENEFITS.map(([number, title, text]) => (
            <div className="editorial-benefit" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
