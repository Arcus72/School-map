import React from 'react';
import { Html } from '@react-three/drei';
import PropTypes from 'prop-types';
import './RoomPointer.scss';
function RoomPointer({ room, status }) {
  return (
    <group position={Object.values(room.position)}>
      <Html distanceFactor={9} center>
        <div
          className={`RoomPointer__text ${
            status == 'start'
              ? 'RoomPointer__text--start'
              : 'RoomPointer__text--end'
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
