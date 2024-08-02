import React from 'react';
import './FooterForm.scss';

const FooterForm = () => {
  return (
    <div className="footer-form">
      <form className="form">
        <input
          className="form-input"
          type="text"
          name="name"
          id="name"
          placeholder="Ваше имя"
          // value={state.name}
          // onChange={inputChange}
        />
        <input
          className="form-input"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Ваш номер телефона или E-mail"
          // value={state.phone}
          // onChange={inputChange}
        />
        <input
          className="form-input"
          type="text"
          name="service"
          id="service"
          placeholder="Какая услуга вас интересует?  (Можно выбрать несколько)"
          // value={state.service}
          // onChange={inputChange}
        />
        <textarea
          className="form-input form-textarea"
          id="comment"
          name="comment"
          placeholder="Оставьте комментарий или задайте вопрос"
          // value={state.comment}
          // onChange={inputChange}
        />
        <p className="form-warning">Оставляя заявку вы соглашаетесь на обработку ваших данных</p>
        <button className="form-button" type="submit">
          Отправить
          <img
            className="form-button-arrow"
            src="/assets/umbrella-arrow-white.svg"
            alt="umbrella"
          />
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
