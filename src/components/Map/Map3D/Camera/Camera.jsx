import React from 'react';
import { MapControls } from '@react-three/drei';
const mapControlsSettings = {
  maxPolarAngle: Math.PI / 3,
  minDistance: 10,
  maxDistance: 80,
  zoomSpeed: 1.5,
};

function Camera() {
  return (
    <>
      <MapControls {...mapControlsSettings} />
    </>
  );
}

export default Camera;
