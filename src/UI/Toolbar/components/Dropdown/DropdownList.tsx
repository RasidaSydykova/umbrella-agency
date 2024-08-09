import React from 'react';
import Link from 'next/link';
import './DropdownList.scss';

interface Props {
  list: string[];
  id: number;
}

const DropdownList: React.FC<Props> = ({ list, id }) => {
  return (
    <div className="dropdown-lists">
      <ul className="dropdown-lists-list">
        {list.map((item, index) => (
          <li key={index} className="dropdown-lists-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
