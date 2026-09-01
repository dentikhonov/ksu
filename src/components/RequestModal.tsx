import { useState, type FormEvent } from "react";
import "./RequestModal.css";

interface RequestModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RequestModal({ open, onClose }: RequestModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal__close" aria-label="Закрыть" onClick={handleClose}>
          &times;
        </button>

        {submitted ? (
          <div className="modal__success">
            <h3>Заявка отправлена</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
            <button className="btn btn-solid" onClick={handleClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal__title">Обсудить проект</h3>
            <p className="modal__subtitle">
              Расскажите о заведении и задачах — подготовим следующий шаг по проекту.
            </p>
            <form className="modal__form" onSubmit={handleSubmit}>
              <label>
                Название заведения
                <input type="text" name="venue" required placeholder="Название проекта" />
              </label>
              <label>
                Город
                <input type="text" name="city" required placeholder="Город" />
              </label>
              <label>
                Направление
                <select name="direction" required defaultValue="">
                  <option value="" disabled>Выберите направление</option>
                  <option>Униформа команды</option>
                  <option>Фартуки</option>
                  <option>Сервировочный текстиль</option>
                  <option>Интерьерный текстиль</option>
                  <option>Комплексное решение</option>
                </select>
              </label>
              <label>
                Имя
                <input type="text" name="name" required placeholder="Как к вам обращаться" />
              </label>
              <label>
                Телефон
                <input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" />
              </label>
              <label>
                Объём и сроки
                <textarea name="comment" rows={3} placeholder="Количество сотрудников, столов или окон; желаемые сроки" />
              </label>
              <button type="submit" className="btn btn-solid modal__submit">
                Обсудить проект
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
