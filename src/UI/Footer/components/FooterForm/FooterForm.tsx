import React from 'react';
import './FooterForm.scss';

const FooterForm = () => {
  return (
    <div className="footer-form">
      <form className="form">
        <div className="input-field">
          <input type="text" name="name" id="name" required />
          <label htmlFor="name">Ваше имя</label>
        </div>

        <div className="input-field">
          <input type="tel" name="phone" id="phone" required />
          <label htmlFor="phone">Ваш номер телефона или E-mail</label>
        </div>

        <div className="input-field">
          <input type="text" name="service" id="service" required />
          <label htmlFor="service">Какая услуга вас интересует? (Можно выбрать несколько)</label>
        </div>

        <div className="input-field">
          <textarea name="comment" id="comment" required />
          <label htmlFor="service">Оставьте комментарий или задайте вопрос</label>
        </div>

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
