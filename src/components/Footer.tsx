import { Link } from "react-router-dom";
import "./Footer.css";

const BASE = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img className="footer__logo" src={`${BASE}slap-logo.png`} alt="SLAP — Uniform & Textile" />
          <p className="footer__tagline">
            Студия униформы и текстиля для HoReCa. Текстиль, который собирает
            образ заведения.
          </p>
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://t.me/uniforma" target="_blank" rel="noreferrer" aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a href="mailto:hello@uniforma.ru" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Меню</p>
          <ul>
            <li>
              <a href={`${BASE}#about`}>О студии</a>
            </li>
            <li>
              <a href={`${BASE}#catalog`}>Направления</a>
            </li>
            <li>
              <Link to="/portfolio">Проекты</Link>
            </li>
            <li>
              <a href={`${BASE}#features`}>Как работаем</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Направления</p>
          <ul>
            <li>
              <a href={`${BASE}#catalog`}>Униформа команды</a>
            </li>
            <li>
              <a href={`${BASE}#catalog`}>Фартуки</a>
            </li>
            <li>
              <a href={`${BASE}#catalog`}>Сервировочный текстиль</a>
            </li>
            <li>
              <a href={`${BASE}#catalog`}>Интерьерный текстиль</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Контакты</p>
          <ul>
            <li>
              <a href="tel:+79778822864">+7 (977) 882-28-64</a>
            </li>
            <li>
              <a href="mailto:hello@uniforma.ru">hello@uniforma.ru</a>
            </li>
            <li>
              <span>Москва, ул. Большая Дмитровка, 25</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© SLAP UNIFORM &amp; TEXTILE, {new Date().getFullYear()}</span>
        <div className="footer__bottom-links">
          <span>Политика конфиденциальности</span>
          <span>Договор оферты</span>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 4 3 11l6 2m12-9-3.5 16-8.5-6m12-10-8.5 10" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6 8 7 8-7" />
    </svg>
  );
}
