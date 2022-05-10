import React from 'react';
import { Html } from '@react-three/drei';
import PropTypes from 'prop-types';
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

RoomPointer.prototype = {
  status: PropTypes.oneOf(['start', 'end']).isRequired,
  floorNumber: PropTypes.number.isRequired,
  room: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default RoomPointer;
