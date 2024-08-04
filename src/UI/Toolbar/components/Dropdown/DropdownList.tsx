import React from 'react';
import Link from 'next/link';
import './DropdownList.scss';

interface Props {
  list: string[];
}

const DropdownList: React.FC<Props> = ({ list }) => {
  return (
    <div className="dropdown-lists">
      <ul className="dropdown-lists-list">
        {list.map((item, index) => (
          <li key={index} className="dropdown-lists-list-item">
            <Link href="/service/1">{list}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
