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
            <h3 className="modal__title">Оставить заявку</h3>
            <p className="modal__subtitle">
              Расскажите о вашем заведении — подберём форму под ваш формат и
              команду.
            </p>
            <form className="modal__form" onSubmit={handleSubmit}>
              <label>
                Имя
                <input type="text" name="name" required placeholder="Как к вам обращаться" />
              </label>
              <label>
                Телефон
                <input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" />
              </label>
              <label>
                Комментарий
                <textarea name="comment" rows={3} placeholder="Тип заведения, количество сотрудников" />
              </label>
              <button type="submit" className="btn btn-solid modal__submit">
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
