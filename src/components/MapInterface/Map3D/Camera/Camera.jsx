import React from 'react';
import { MapControls } from '@react-three/drei';

const mapControlsSettings = {
  maxPolarAngle: Math.PI / 3,
  minDistance: 10,
  maxDistance: 80,
};

function Camera() {
  return (
    <>
      <MapControls {...mapControlsSettings} />
    </>
  );
}

export default Camera;
