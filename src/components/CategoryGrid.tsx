import { useState } from "react";
import womenImg from "../assets/images/khaki-kaftan-women.jpeg";
import menImg from "../assets/images/men-shirt-ethno.jpeg";
import ethnoImg from "../assets/images/ethno-team.jpeg";
import serviceImg from "../assets/images/men-camp-shirt-brown.jpeg";
import dressImg from "../assets/images/dress-beige-collar.jpeg";
import apronFrontImg from "../assets/images/apron-beige-front.jpeg";
import apronBackImg from "../assets/images/apron-beige-back.jpeg";
import hostessImg from "../assets/images/woman-hostess-stripe.jpeg";
import Reveal from "./Reveal";
import Lightbox, { type LightboxSlide } from "./Lightbox";
import "./CategoryGrid.css";

interface Category {
  title: string;
  image: string;
  gallery: LightboxSlide[];
}

const CATEGORIES: Category[] = [
  {
    title: "Женская форма",
    image: womenImg,
    gallery: [
      { image: womenImg, caption: "Женская форма" },
      { image: dressImg, caption: "Женская форма" },
      { image: apronFrontImg, caption: "Женская форма" },
      { image: apronBackImg, caption: "Женская форма" },
    ],
  },
  {
    title: "Мужская форма",
    image: menImg,
    gallery: [
      { image: menImg, caption: "Мужская форма" },
      { image: serviceImg, caption: "Мужская форма" },
    ],
  },
  {
    title: "Этно-форма",
    image: ethnoImg,
    gallery: [
      { image: ethnoImg, caption: "Этно-форма" },
      { image: womenImg, caption: "Этно-форма" },
      { image: menImg, caption: "Этно-форма" },
    ],
  },
  {
    title: "Сервисная форма",
    image: serviceImg,
    gallery: [
      { image: serviceImg, caption: "Сервисная форма" },
      { image: hostessImg, caption: "Сервисная форма" },
      { image: apronFrontImg, caption: "Сервисная форма" },
    ],
  },
];

export default function CategoryGrid() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  return (
    <section className="categories" id="catalog">
      <div className="container categories__grid">
        {CATEGORIES.map((category, index) => (
          <Reveal key={category.title} delay={index * 120}>
            <button
              type="button"
              className="category-card"
              onClick={() => setOpenCategory(category)}
            >
              <div className="category-card__media">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="category-card__label">
                <span>{category.title}</span>
                <ExpandIcon />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {openCategory && (
        <Lightbox
          slides={openCategory.gallery}
          startIndex={0}
          onClose={() => setOpenCategory(null)}
        />
      )}
    </section>
  );
}

function ExpandIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6" />
    </svg>
  );
}
