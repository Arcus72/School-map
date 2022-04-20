import React from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import './RoomNumber.scss';

function RoomNumber({ displayName, position }) {
  console.log('RoomNumber');
  const { camera } = useThree();
  camera.position.x += 0.0000001;
  return (
    <group position={Object.values(position)}>
      <Html distanceFactor={10} center>
        <div className='RoomNumber__text'>{displayName}</div>
      </Html>
    </group>
  );
}

export default RoomNumber;
