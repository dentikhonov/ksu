import Reveal from "./Reveal";
import "./FeaturesSection.css";

const STEPS = [
  ["01", "Бриф", "Фиксируем задачи, зоны заведения, объём и сроки."],
  ["02", "Материалы", "Подбираем ткани под визуальную задачу и эксплуатацию."],
  ["03", "Эскиз и образец", "Прорабатываем конструкцию и собираем первый образец."],
  ["04", "Корректировки", "Проверяем посадку, детали и соответствие концепции."],
  ["05", "Партия", "Запускаем производство и контролируем единый стандарт."],
  ["06", "Дозакупки", "Сохраняем параметры проекта для повторных заказов."],
];

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <Reveal>
          <div className="features__head">
            <p className="section-eyebrow">Как работаем</p>
            <h2 className="features__title">От задачи до готовой партии</h2>
          </div>
        </Reveal>
        <div className="features__grid">
          {STEPS.map(([number, title, text], index) => (
            <Reveal key={number} delay={(index % 3) * 80}>
              <article className="feature-card">
                <span className="feature-card__number">{number}</span>
                <h3 className="feature-card__title">{title}</h3>
                <p className="feature-card__text">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
