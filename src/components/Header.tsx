import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// абсолютные якоря строятся от базового пути (на GitHub Pages это /uniforma/)
const BASE = import.meta.env.BASE_URL;

const NAV_LINKS = [
  { label: "Каталог", href: `${BASE}#catalog`, route: false },
  { label: "Портфолио", href: "/portfolio", route: true },
  { label: "Образы", href: `${BASE}#looks`, route: false },
  { label: "Пошив", href: `${BASE}#features`, route: false },
  { label: "Контакты", href: `${BASE}#footer`, route: false },
];

interface HeaderProps {
  onRequestClick: () => void;
}

export default function Header({ onRequestClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const renderLink = (link: (typeof NAV_LINKS)[number], onClick?: () => void) =>
    link.route ? (
      <Link to={link.href} onClick={onClick}>
        {link.label}
      </Link>
    ) : (
      <a href={link.href} onClick={onClick}>
        {link.label}
      </a>
    );

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label="SLAP — Uniform & Textile">
            <img src={`${BASE}slap-logo.png`} alt="" />
          </Link>

          <nav className="header__nav header__nav--desktop">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>{renderLink(link)}</li>
              ))}
            </ul>
          </nav>

          <div className="header__actions header__actions--desktop">
            <button className="btn btn-solid" onClick={onRequestClick}>
              Оставить заявку
            </button>
          </div>

          <button
            className="header__burger"
            aria-label="Открыть меню"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`drawer-backdrop ${menuOpen ? "drawer-backdrop--open" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`drawer ${menuOpen ? "drawer--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="drawer__top">
          <Link to="/" className="drawer__logo" aria-label="SLAP — Uniform & Textile" onClick={closeMenu}>
            <img src={`${BASE}slap-logo.png`} alt="" />
          </Link>
          <button className="drawer__close" aria-label="Закрыть меню" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>

        <nav className="drawer__nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>{renderLink(link, closeMenu)}</li>
            ))}
          </ul>
        </nav>

        <div className="drawer__actions">
          <button
            className="btn btn-solid"
            onClick={() => {
              closeMenu();
              onRequestClick();
            }}
          >
            Оставить заявку
          </button>
        </div>
      </aside>
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
