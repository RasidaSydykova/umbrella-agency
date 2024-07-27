import React from 'react';
import '../ApplicationButton/ApplicationButton.scss';

const ApplicationButton = () => {
  return (
    <div className="btn-container">
      <button className="btn" type="button">
        Оставить заявку
        <img className="arrow" src="/assets/umbrella_arrow.svg" alt="umbrella" />
      </button>
    </div>
  );
};

export default ApplicationButton;