import React, { useRef } from 'react';
import { Text } from '@react-three/drei';

import { useFrame } from '@react-three/fiber';

function RoomNumber({ displayName, position }) {
  const groupRef = useRef(null);
  useFrame((state) => {
    let { x, y, z } = { ...state.camera.position };
    groupRef.current.lookAt(x, y, z);
  });

  return (
    <group ref={groupRef} position={Object.values(position)}>
      <Text
        scale={[10, 10, 10]}
        color='black'
        anchorX='center'
        anchorY='middle'
      >
        {displayName}
      </Text>
    </group>
  );
}

export default RoomNumber;
