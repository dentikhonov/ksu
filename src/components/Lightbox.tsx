import { useEffect, useState } from "react";
import "./Lightbox.css";

export interface LightboxSlide {
  image: string;
  caption?: string;
}

interface LightboxProps {
  slides: LightboxSlide[];
  startIndex: number;
  onClose: () => void;
}

export default function Lightbox({ slides, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = slides[index];

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox__close" aria-label="Закрыть" onClick={onClose}>
        &times;
      </button>

      {slides.length > 1 && (
        <>
          <button
            className="lightbox__arrow lightbox__arrow--prev"
            aria-label="Предыдущее фото"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            className="lightbox__arrow lightbox__arrow--next"
            aria-label="Следующее фото"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            <ArrowIcon direction="right" />
          </button>
        </>
      )}

      <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
        <img src={slide.image} alt={slide.caption ?? ""} />
        {slide.caption && <figcaption>{slide.caption}</figcaption>}
      </figure>

      {slides.length > 1 && (
        <span className="lightbox__counter">
          {index + 1} / {slides.length}
        </span>
      )}
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      style={direction === "left" ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
