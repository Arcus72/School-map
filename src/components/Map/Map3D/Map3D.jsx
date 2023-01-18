import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import './Map3D.scss';

import Lights from './Lights/Lights';
import Camera from './Camera/Camera';
import Building from './Building/Building';

function Map3D({ roomsToHighlight, currentFloor, messageToCamera }) {
  return (
    <Suspense fallback={null}>
      <Canvas className='Map3D' camera={{ position: [-80, 5, 5], fov: 75 }}>
        <Camera messageToCamera={messageToCamera} />
        <Lights />

        <Building
          roomsToHighlight={roomsToHighlight}
          currentFloorNumber={currentFloor}
        />
      </Canvas>
    </Suspense>
  );
}

export default Map3D;
