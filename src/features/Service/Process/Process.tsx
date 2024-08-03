'use client';
import React from 'react';
import Accordion from '@/features/Service/Process/components/Accordion/Accordion';
import './Process.scss';

const Process = () => {
  const processList = [
    'Lorem ipsum dolor sit amet consectetur. Sed tempus aenean malesuada eros sodales neque et. ' +
      'Blandit in quam in consectetur nec eget at enim orci. Sodales malesuada quis tellus integer',
    'Dictumst tellus tristique dignissim mauris faucibus fermentum pretium. Ut eget sit vulputate ' +
      'fringilla faucibus augue. Fusce eget quis sit volutpat auctor amet. Nunc neque mi gravida .',
    'Integer quis quam fusce sed mi feugiat morbi orci ligula. Arcu non malesuada et nisi turpis ' +
      'urna curabitur ante. Amet sapien odio auctor egestas est quam pharetra bibendum.',
  ];

  return (
    <section className="process">
      <div className="container">
        <div className="process-info">
          <h4 className="process-info-title">Процесс</h4>
          <p className="process-info-text">
            Вы прозрачно отслеживаете весь процесс, и до последних копеек знаете, куда направляется
            ваш бюджет
          </p>
        </div>
        <div className="process-steps">
          <Accordion index={1} title="Lorem ipsum dolor sit amet consectetur" list={processList} />
          <Accordion index={2} title="Lorem ipsum dolor sit amet consectetur" list={processList} />
          <Accordion index={3} title="Lorem ipsum dolor sit amet consectetur" list={processList} />
          <Accordion index={4} title="Lorem ipsum dolor sit amet consectetur" list={processList} />
          <Accordion index={5} title="Lorem ipsum dolor sit amet consectetur" list={processList} />
        </div>
        <div className="process-img-box">
          <img
            className="process-img-box-img"
            src="/assets/service/process-background-img.svg"
            alt="Process Background"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
