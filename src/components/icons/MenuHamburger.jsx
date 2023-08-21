import React from 'react';
import { SVGStyledStroke } from './SVG.styled';

export const MenuHamburger = () => {
  return (
    <SVGStyledStroke
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGStyledStroke>
  );
};
