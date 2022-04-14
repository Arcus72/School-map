import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import './Map3D.scss';

import Lights from './Lights/Lights';
import Camera from './Camera/Camera';
import TempFloor from './Floors/TempFloor/TempFloor';

import roomsLocations from '../../data/roomsLocation.json';

function Map3D() {
  const [floorNumber] = useState(1);

  return (
    <Canvas
      className='Map3D'
      linear
      camera={{ position: [0, 20, 20], fov: 75 }}
    >
      <Camera />
      <Lights />

      <Suspense fallback={null}>
        <TempFloor roomsLocations={roomsLocations[`floor${floorNumber}`]} />
      </Suspense>
      <gridHelper args={[30, 30, `white`, `gray`]} />
      <axesHelper position={[0, 4, 0]} />
    </Canvas>
  );
}

export default Map3D;
