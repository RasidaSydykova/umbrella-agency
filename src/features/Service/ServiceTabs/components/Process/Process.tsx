'use client';
import React, { useState } from 'react';
import Accordion from '@/features/Service/ServiceTabs/components/Process/components/Accordion/Accordion';
import './Process.scss';

const Process = ({ processes }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processList = [
    'Lorem ipsum dolor sit amet consectetur. Sed tempus aenean malesuada eros sodales neque et. ' +
      'Blandit in quam in consectetur nec eget at enim orci. Sodales malesuada quis tellus integer',
    'Dictumst tellus tristique dignissim mauris faucibus fermentum pretium. Ut eget sit vulputate ' +
      'fringilla faucibus augue. Fusce eget quis sit volutpat auctor amet. Nunc neque mi gravida .',
    'Integer quis quam fusce sed mi feugiat morbi orci ligula. Arcu non malesuada et nisi turpis ' +
      'urna curabitur ante. Amet sapien odio auctor egestas est quam pharetra bibendum.',
  ];

  const accordionsData = [
    { index: 1, title: 'Lorem ipsum dolor sit amet consectetur', list: processList },
    { index: 2, title: 'Lorem ipsum dolor sit amet consectetur', list: processList },
    { index: 3, title: 'Lorem ipsum dolor sit amet consectetur', list: processList },
    { index: 4, title: 'Lorem ipsum dolor sit amet consectetur', list: processList },
    { index: 5, title: 'Lorem ipsum dolor sit amet consectetur', list: processList },
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
          {processes?.map((accordion, i) => (
            <Accordion
              key={i}
              index={accordion.id}
              title={'Lorem ipsum dolor sit amet consectetur'}
              list={[accordion.description]}
              isOpen={openIndex === i}
              onClick={() => handleAccordionClick(i)}
            />
          ))}
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
