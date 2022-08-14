import React from 'react';

function ArrowLeft({ onClick }) {
  return (
    <svg
      onClick={() => onClick()}
      viewBox='0 0 16 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.0904263 32.9575C0.0904263 32.4546 0.229014 31.9494 0.530778 31.5046L9.82066 17.5787L0.439133 4.08424C-0.363338 2.87495 -0.036985 1.24542 1.17231 0.442947C2.37713 -0.363994 4.01113 -0.0376415 4.8136 1.17165L15.1652 16.1213C15.7554 16.9998 15.7554 18.1509 15.1697 19.0339L4.90972 34.4149C4.10725 35.6242 2.46878 35.9528 1.26395 35.1481C0.499484 34.6385 0.0904263 33.8047 0.0904263 32.9575Z'
        fill='black'
      />
    </svg>
  );
}

export default ArrowLeft;