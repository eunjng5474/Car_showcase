'use client';

import Image from 'next/image';
import { CustomButtonsProps } from '../types';

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonsProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`felx-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
