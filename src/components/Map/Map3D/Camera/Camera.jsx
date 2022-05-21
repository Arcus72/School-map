import React from 'react';
import { MapControls } from '@react-three/drei';
const mapControlsSettings = {
  maxPolarAngle: Math.PI / 3,
  minDistance: 15,
  maxDistance: 50,
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
