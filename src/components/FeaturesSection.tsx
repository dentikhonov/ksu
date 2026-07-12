import Reveal from "./Reveal";
import "./FeaturesSection.css";

const FEATURES = [
  {
    title: "Индивидуальный пошив",
    text: "Создаём форму по вашим меркам и фирменному стилю — от первого эскиза до готового комплекта.",
    icon: <ShirtIcon />,
  },
  {
    title: "Качественные материалы",
    text: "Ткани премиум-класса, которые выдерживают ежедневные смены, стирки и постоянное движение.",
    icon: <LayersIcon />,
  },
  {
    title: "Комфорт и функциональность",
    text: "Эргономичный крой не мешает работе: зал, кухня и бар — форма продумана под реальные задачи.",
    icon: <FeatherIcon />,
  },
  {
    title: "Эстетика бренда",
    text: "Форма, которая усиливает образ заведения и помогает команде выглядеть цельно.",
    icon: <SparklesIcon />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <Reveal>
          <div className="features__head">
            <p className="section-eyebrow">Пошив</p>
            <h2 className="features__title">Форма, продуманная до детали</h2>
          </div>
        </Reveal>

        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 120}>
              <div className="feature-card">
                <div className="feature-card__icon">{feature.icon}</div>
                <span className="feature-card__number">0{index + 1}</span>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShirtIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function FeatherIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </svg>
  );
}
