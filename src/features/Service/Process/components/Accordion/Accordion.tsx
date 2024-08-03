import React, { useState } from 'react';
import './Accordion.scss';

interface Props {
  index: number;
  title: string;
  list: string[];
}

const Accordion: React.FC<Props> = ({ index, title, list }) => {
  const [open, setOpen] = useState<boolean>(index === 1);

  return (
    <div className="accordion-block">
      <div className={open ? 'active accordion' : 'accordion'} onClick={() => setOpen(!open)}>
        <p className={open ? 'active accordion-title' : 'accordion-title'}>
          <span className="accordion-title-index">{index}</span>
          {title}
        </p>
      </div>
      <div className="card">
        {open && (
          <div className="card-wrapper">
            <ul className="card-wrapper-list">
              {list.map((item, index) => (
                <li key={index} className="card-wrapper-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
