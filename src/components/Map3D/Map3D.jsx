import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Model from '../BufferFloor/TempFloor';
import './index.scss';

const OrbitControlsSetting = {
  enablePan: false,
  maxPolarAngle: Math.PI / 2,
  enableDamping: true,
  minDistance: 10,
  maxDistance: 100,
};

function Map3D() {
  return (
    <Canvas
      className='Map3D'
      linear
      camera={{ position: [0, 20, 20], fov: 75 }}
    >
      <OrbitControls {...OrbitControlsSetting} />
      <ambientLight intensity={0.5} />
      <pointLight castShadow position={[5, 20, 4]} />
      <pointLight castShadow position={[-5, 20, -4]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <gridHelper args={[30, 30, `white`, `gray`]} />
      <axesHelper position={[0, 2, 0]} />
    </Canvas>
  );
}

export default Map3D;
