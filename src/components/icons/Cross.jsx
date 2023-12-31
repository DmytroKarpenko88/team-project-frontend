import React from 'react';
import { SVGStyledStroke } from './SVG.styled';

export function Cross() {
  return (
    <SVGStyledStroke
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="yellow"
    >
      <path
        d="M19 5L5 19M5.00004 5L19 19"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGStyledStroke>
  );
}
