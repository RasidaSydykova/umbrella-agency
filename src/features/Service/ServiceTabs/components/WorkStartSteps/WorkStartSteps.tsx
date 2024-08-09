import { FC } from 'react';
import WorkStartCard from '@/features/Service/ServiceTabs/components/WorkStartSteps/components/WorkStartCard/WorkStartCard';
import './WorkStartSteps.scss';

const WorkStartSteps: FC<any> = ({ steps }) => {
  return (
    <section className="work-start-steps container">
      <h4 className="work-start-steps-title">До начала работы:</h4>
      <div className="work-start-steps-cards">
        {steps.map((card: any, i: any) => (
          <WorkStartCard key={i} index={i + 1} title={card.title} text={card.description} />
        ))}
      </div>
      <div className="start">
        <h4 className="start-title">Начните путь к успеху с командой профессионалов!</h4>
      </div>
    </section>
  );
};

export default WorkStartSteps;
