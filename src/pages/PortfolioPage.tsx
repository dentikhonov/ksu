import { useEffect, useState } from "react";
import dressImg from "../assets/images/dress-beige-collar.jpeg";
import menEthnoImg from "../assets/images/men-shirt-ethno.jpeg";
import apronFrontImg from "../assets/images/apron-beige-front.jpeg";
import apronBackImg from "../assets/images/apron-beige-back.jpeg";
import hostessImg from "../assets/images/woman-hostess-stripe.jpeg";
import campShirtImg from "../assets/images/men-camp-shirt-brown.jpeg";
import ethnoTeamImg from "../assets/images/ethno-team.jpeg";
import kaftanImg from "../assets/images/khaki-kaftan-women.jpeg";
import newUniformImg from "../assets/images/uniform-beige-ruffle.jpeg";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import "./PortfolioPage.css";

const TAGS = ["Все", "Зал", "Кухня и бар", "Этно"] as const;
type Tag = (typeof TAGS)[number];

interface Work {
  image: string;
  title: string;
  venue: string;
  tag: Exclude<Tag, "Все">;
}

const WORKS: Work[] = [
  {
    image: newUniformImg,
    title: "Фартук-сарафан с рюшами",
    venue: "Новый образ",
    tag: "Зал",
  },
  {
    image: apronFrontImg,
    title: "Фартук-сарафан с рюшами",
    venue: "Квелли",
    tag: "Зал",
  },
  {
    image: dressImg,
    title: "Платье с вышитым воротником",
    venue: "Сувары",
    tag: "Зал",
  },
  {
    image: ethnoTeamImg,
    title: "Форма для команды веранды",
    venue: "Тифлис",
    tag: "Этно",
  },
  {
    image: campShirtImg,
    title: "Рубашка свободного кроя",
    venue: "Ботаника",
    tag: "Кухня и бар",
  },
  {
    image: kaftanImg,
    title: "Кафтаны с орнаментом",
    venue: "Сувары",
    tag: "Этно",
  },
  {
    image: hostessImg,
    title: "Образ хостес с фартуком",
    venue: "Морошка",
    tag: "Зал",
  },
  {
    image: menEthnoImg,
    title: "Рубашка с этно-планкой",
    venue: "Тифлис",
    tag: "Кухня и бар",
  },
  {
    image: apronBackImg,
    title: "Сарафан, вид со спины",
    venue: "Квелли",
    tag: "Зал",
  },
];

export default function PortfolioPage() {
  const [activeTag, setActiveTag] = useState<Tag>("Все");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const works =
    activeTag === "Все" ? WORKS : WORKS.filter((work) => work.tag === activeTag);

  const slides = works.map((work) => ({
    image: work.image,
    caption: `${work.title} — «${work.venue}»`,
  }));

  return (
    <main className="portfolio-page">
      <div className="container">
        <Reveal>
          <div className="portfolio-page__head">
            <div>
              <p className="section-eyebrow">Кейсы и фото</p>
              <h1 className="portfolio-page__title">Проекты SLAP</h1>
              <p className="portfolio-page__subtitle">
                Реальные проекты, детали изделий и униформа в ресторанной среде.
              </p>
            </div>
            <div className="portfolio-page__tags">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`portfolio-page__tag ${activeTag === tag ? "portfolio-page__tag--active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="portfolio-page__grid">
          {works.map((work, index) => (
            <Reveal key={work.title} delay={(index % 4) * 90}>
              <button
                type="button"
                className="work-card"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="work-card__media">
                  <img src={work.image} alt={`${work.title} для «${work.venue}»`} loading="lazy" />
                  <span className="work-card__venue">«{work.venue}»</span>
                </div>
                <span className="work-card__title">{work.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          slides={slides}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </main>
  );
}
