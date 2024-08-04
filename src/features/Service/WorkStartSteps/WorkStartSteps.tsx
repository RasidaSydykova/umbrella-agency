import React from 'react';
import WorkStartCard from '@/features/Service/WorkStartSteps/components/WorkStartCard/WorkStartCard';
import './WorkStartSteps.scss';

const WorkStartSteps = () => {
  const cardsData = [
    {
      index: 1,
      title: 'Lorem ipsum dolor sit amet consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur. Dignissim nulla pulvinar adipiscing tellus ' +
        'volutpat magna et id enim. Nibh nunc eleifend non cursus duis. Cursus semper eget ut vel ' +
        'suspendisse libero adipiscing. Sem vulputate netus consectetur morbi ultrices. ',
    },
    {
      index: 2,
      title: 'Lorem ipsum dolor sit amet consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur. Dignissim nulla pulvinar adipiscing tellus ' +
        'volutpat magna et id enim. Nibh nunc eleifend non cursus duis. Cursus semper eget ut vel ' +
        'suspendisse libero adipiscing. Sem vulputate netus consectetur morbi ultrices. ',
    },
    {
      index: 3,
      title: 'Lorem ipsum dolor sit amet consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur. Dignissim nulla pulvinar adipiscing tellus ' +
        'volutpat magna et id enim. Nibh nunc eleifend non cursus duis. Cursus semper eget ut vel ' +
        'suspendisse libero adipiscing. Sem vulputate netus consectetur morbi ultrices. ',
    },
  ];

  return (
    <section className="work-start-steps container">
      <h4 className="work-start-steps-title">До начала работы:</h4>
      <div className="work-start-steps-cards">
        {cardsData.map((card, i) => (
          <WorkStartCard
            key={i}
            index={card.index}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
      <div className="start">
        <h4 className="start-title">Начните путь к успеху с командой профессионалов!</h4>
      </div>
    </section>
  );
};

export default WorkStartSteps;
