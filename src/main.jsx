import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let amountOfLoadedFloors = 4;
document.hideLoader = (className) => {
  if (className == '.LoaderMap3D') {
    amountOfLoadedFloors -= 1;
    if (amountOfLoadedFloors == 0) {
      const loader = document.querySelector(className);
      if (loader) {
        loader.style.display = 'none';
      }
      return 1;
    }
  }
  const loader = document.querySelector(className);
  if (loader) {
    loader.style.display = 'none';
  }
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab='home' />);
