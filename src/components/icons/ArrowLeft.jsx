import React from 'react';
import { SVGStyledStroke } from './SVG.styled';

export const ArrowLeft = () => {
  return (
    <SVGStyledStroke
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 12L20 12M4 12L10 6M4 12L10 18"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGStyledStroke>
  );
};
