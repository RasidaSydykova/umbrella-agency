'use client';
import React, { useState } from 'react';
import Accordion from '@/features/Service/ServiceTabs/components/Process/components/Accordion/Accordion';
import './Process.scss';

const Process = ({ processes }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
