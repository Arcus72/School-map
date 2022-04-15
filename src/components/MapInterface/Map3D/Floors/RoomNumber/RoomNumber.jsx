import React, { useRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import './RoomNumber.scss';

function RoomNumber({ displayName, position }) {
  const groupRef = useRef(null);
  useFrame((state) => {
    let { x, y, z } = { ...state.camera.position };
    groupRef.current.lookAt(x, y, z);
  });

  return (
    <group ref={groupRef} position={Object.values(position)}>
      <Html distanceFactor={10}>
        <div className='RoomNumber__text'>{displayName}</div>
      </Html>
    </group>
  );
}

export default RoomNumber;
