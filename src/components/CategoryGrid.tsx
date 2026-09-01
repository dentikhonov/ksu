import teamImg from "../assets/images/ethno-team.jpeg";
import apronImg from "../assets/images/apron-beige-front.jpeg";
import Reveal from "./Reveal";
import "./CategoryGrid.css";

const DIRECTIONS = [
  { number: "01", title: "Униформа команды", text: "Официанты, хостес, администраторы, бармены, бариста, повара и банкетная служба.", image: teamImg },
  { number: "02", title: "Фартуки", text: "Решения для зала, бара, кухни, кофеен и брендированные серии.", image: apronImg },
  { number: "03", title: "Сервировочный текстиль", text: "Скатерти, салфетки, дорожки, банкетный текстиль и сезонные комплекты.", tone: "blue" },
  { number: "04", title: "Интерьерный текстиль", text: "Шторы и текстиль для залов, VIP-комнат, отелей и загородных комплексов.", tone: "cacao" },
  { number: "05", title: "Комплексные решения", text: "Униформа, сервировка и интерьерный текстиль в единой системе проекта.", tone: "beige" },
];

export default function CategoryGrid() {
  return (
    <section className="categories" id="catalog">
      <div className="container">
        <Reveal>
          <div className="categories__head">
            <p className="section-eyebrow">Направления</p>
            <h2>Текстильная система заведения</h2>
          </div>
        </Reveal>
        <div className="categories__grid">
          {DIRECTIONS.map((direction, index) => (
            <Reveal key={direction.number} delay={(index % 3) * 90}>
              <article className={`direction-card direction-card--${direction.tone ?? "image"}`}>
                {direction.image && (
                  <div className="direction-card__media">
                    <img src={direction.image} alt={direction.title} loading="lazy" />
                  </div>
                )}
                <div className="direction-card__content">
                  <span>{direction.number}</span>
                  <div><h3>{direction.title}</h3><p>{direction.text}</p></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
