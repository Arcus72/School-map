import React from 'react';
import { MapControls } from '@react-three/drei';
//, OrbitControls
const mapControlsSettings = {};

// const OrbitControlsSetting = {
//   // enablePan: false,
//   maxPolarAngle: Math.PI / 2,
//   enableDamping: true,
//   minDistance: 10,
//   maxDistance: 100,
// };

function Camera() {
  return (
    <>
      {/* <OrbitControls {...OrbitControlsSetting} /> */}
      <MapControls {...mapControlsSettings} />
    </>
  );
}

export default Camera;
