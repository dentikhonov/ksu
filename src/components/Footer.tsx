import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <p className="footer__logo">УНИФОРМА</p>
          <p className="footer__tagline">
            Профессиональная форма для HoReCa. Проектируем и создаём с
            вниманием к деталям и вашему бизнесу.
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
              <a href="/#catalog">Каталог</a>
            </li>
            <li>
              <Link to="/portfolio">Портфолио</Link>
            </li>
            <li>
              <a href="/#looks">Образы</a>
            </li>
            <li>
              <a href="/#features">Пошив</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Каталог</p>
          <ul>
            <li>
              <a href="/#catalog">Женская форма</a>
            </li>
            <li>
              <a href="/#catalog">Мужская форма</a>
            </li>
            <li>
              <a href="/#catalog">Этно-форма</a>
            </li>
            <li>
              <a href="/#catalog">Сервисная форма</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Контакты</p>
          <ul>
            <li>
              <a href="tel:+74951234567">+7 (495) 123-45-67</a>
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
        <span>© УНИФОРМА, {new Date().getFullYear()}</span>
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
