import { FC } from 'react';
import './Loader.scss'

const Loader: FC = () => {
  return <div className='loader'>
    <div className='icon'>
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_691_4168)">
      <rect width="150" height="150" transform="translate(0 150) rotate(-90)" fill="white"/>
      <path d="M24.6504 21.2472L72.0526 70.9639L72.0526 0.000699832L24.6504 21.2472Z" fill="#6989AA"/>
      <path d="M123.506 21.2472L76.1036 70.9639L76.1036 0.000703976L123.506 21.2472Z" fill="#6989AA"/>
      <path d="M2.28438 73.2L69.6102 73.5004L21.3552 23.3219L2.28438 73.2Z" fill="#6989AA"/>
      <path d="M145.872 73.1999L78.546 73.5004L126.801 23.3219L145.872 73.1999Z" fill="#6989AA"/>
      <path d="M2.28439 77.176L69.6103 76.8755L21.3552 127.054L2.28439 77.176Z" fill="#6989AA"/>
      <path d="M145.871 77.176L78.545 76.8756L126.8 127.054L145.871 77.176Z" fill="#6989AA"/>
      <path d="M24.6504 128.754L72.0526 79.0369L72.0526 150L24.6504 128.754Z" fill="#6989AA"/>
      <path d="M123.506 128.754L76.1036 79.0369L76.1036 150L123.506 128.754Z" fill="#6989AA"/>
      </g>
      <defs>
      <clipPath id="clip0_691_4168">
      <rect width="150" height="150" fill="white" transform="translate(0 150) rotate(-90)"/>
      </clipPath>
      </defs>
      </svg>
    </div>
  </div>
};

export default Loader;