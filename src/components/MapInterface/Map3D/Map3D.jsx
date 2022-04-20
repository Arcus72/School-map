import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';

import './Map3D.scss';

import Lights from './Lights/Lights';
import Camera from './Camera/Camera';
import Building from './Building/Building';

function Map3D() {
  console.log('Map3D');
  const [floorNumber, setFloorNumber] = useState(2);

  return (
    <Canvas className='Map3D' camera={{ position: [0, 20, 20], fov: 75 }}>
      <Camera />
      <Lights />

      <Building floorNumber={floorNumber} />

      <gridHelper args={[80, 80, `white`, `gray`]} />
      <axesHelper position={[0, 4, 0]} />
    </Canvas>
  );
}

export default Map3D;
