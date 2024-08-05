import React from 'react';
import './Team.scss';

const Team = () => {
  return (
    <section className="team container">
      <div className="team-text">
        <h5 className="team-text-title">Состав команды, которая будет заниматься вашим проектом</h5>
      </div>
      <div className="team-specialists">
        <div className="specialists">
          <span className="specialist">Копирайтер</span>
          <span className="specialist">Маркетолог</span>
        </div>
        <div className="specialists">
          <span className="specialist">Дизайнер</span>
          <span className="specialist">Таргетолог</span>
        </div>
      </div>
    </section>
  );
};

export default Team;
