'use client'

import React from 'react';
import Link from 'next/link'; // Import Next.js Link

// interfaces
interface NavBarButtonsProps {
  text: string;
  backgroundColor: string;
  linkTo: string;
}

const NavBarButtons: React.FC<NavBarButtonsProps> = ({ text, backgroundColor, linkTo }) => {
  return (
    <div>
      <Link href={linkTo} passHref>
        <button
          className={`${backgroundColor} h-[34px] px-[10px] py-[12px] flex items-center justify-center font-[500] uppercase rounded-[10px] hover:opacity-80
            transform transition-transform duration-150 active:scale-95`}
        >
          <p className="text-[14px]"> {text} </p>
        </button>
      </Link>
    </div>
  );
};

export default NavBarButtons;
