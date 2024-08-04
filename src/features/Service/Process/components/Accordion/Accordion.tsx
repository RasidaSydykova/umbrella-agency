import React, { useState } from 'react';
import './Accordion.scss';

interface Props {
  index: number;
  title: string;
  list: string[];
  isOpen: boolean;
  onClick: () => void;
}

const Accordion: React.FC<Props> = ({ index, title, list, isOpen, onClick }) => {
  const [open, setOpen] = useState<boolean>(index === 1);

  return (
    <div className="accordion-block">
        <div className={isOpen ? 'active accordion' : 'accordion'} onClick={onClick}>
          <p className={isOpen ? 'active accordion-title' : 'accordion-title'}>
            <span className="accordion-title-index">{index}</span>
            {title}
          </p>
        </div>
        <div className="card">
          {isOpen && (
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
