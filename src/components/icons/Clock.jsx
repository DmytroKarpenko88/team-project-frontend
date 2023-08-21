import React from 'react';
import { SVGStyledStroke } from './SVG.styled';

export const Clock = () => {
  return (
    <SVGStyledStroke
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M12.7578 7V12L15.7578 15M21.7578 12C21.7578 16.9706 17.7284 21 12.7578 21C7.78725 21 3.75781 16.9706 3.75781 12C3.75781 7.02944 7.78725 3 12.7578 3C17.7284 3 21.7578 7.02944 21.7578 12Z"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGStyledStroke>
  );
};
