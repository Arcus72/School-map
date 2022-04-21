import React from 'react';
import { Html } from '@react-three/drei';
function RoomPointer({ room, status }) {
  return (
    <group position={Object.values(room.position)}>
      <Html distanceFactor={10} center>
        <div
          className={`RoomNumber__text ${
            status == 'start'
              ? 'RoomNumber__text--start'
              : 'RoomNumber__text--end'
          }`}
        >
          {room.displayName}
        </div>
      </Html>
    </group>
  );
}

export default RoomPointer;
