import Reveal from "./Reveal";
import "./BrandSections.css";

const AUDIENCES = [
  "Рестораны и кафе",
  "Бары и кофейни",
  "Отели и загородные комплексы",
  "Банкетные пространства",
  "Ресторанные сети",
  "Новые проекты на запуске",
];

export function AboutSection() {
  return (
    <section className="brand-about" id="about">
        <div className="container brand-about__grid">
          <Reveal>
            <p className="section-eyebrow">О студии</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="brand-about__content">
              <h2>Текстиль как часть образа заведения</h2>
              <p>
                SLAP — студия униформы и текстиля для ресторанов, отелей и
                проектов HoReCa. Мы разрабатываем решения для команды,
                сервировки и интерьера, чтобы все зоны работали в одной
                визуальной логике.
              </p>
              <p>
                Материалы и конструкция рассчитаны на реальные смены, стирки,
                движение персонала и постоянную эксплуатацию.
              </p>
            </div>
          </Reveal>
        </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="audience" id="audience">
        <div className="container">
          <Reveal>
            <div className="audience__head">
              <p className="section-eyebrow">Для кого</p>
              <h2>Проекты HoReCa, которым важен внешний стандарт</h2>
            </div>
          </Reveal>
          <div className="audience__grid">
            {AUDIENCES.map((item, index) => (
              <Reveal key={item} delay={(index % 3) * 80}>
                <div className="audience__item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
    </section>
  );
}
