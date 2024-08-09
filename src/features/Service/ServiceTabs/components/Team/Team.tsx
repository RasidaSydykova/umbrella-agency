import React from 'react';
import './Team.scss';

const Team = ({ team }) => {
  return (
    <section className="team container">
      <div className="team-text">
        <h5 className="team-text-title">Состав команды, которая будет заниматься вашим проектом</h5>
      </div>
      <div className="team-specialists">
        <div className="specialists">
          {team.map((item: { id: number; position: string }) => (
            <span className="specialist" key={item.id}>
              {item.position}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
