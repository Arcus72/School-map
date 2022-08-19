import React from 'react';
import { Html } from '@react-three/drei';
import PropTypes from 'prop-types';
import './RoomPointer.scss';

function RoomPointer({ room: { displayName, position }, status }) {
  let isMobile =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i);

  return (
    <Html
      position={Object.values(position)}
      distanceFactor={isMobile ? 5 : 9}
      center
    >
      <div
        className={`RoomPointer__background ${
          status == 'start'
            ? 'RoomPointer__background--start'
            : 'RoomPointer__background--end'
        }`}
      >
        <span className={displayName == '7' && 'RoomPointer--goldenText'}>
          {displayName}
        </span>
      </div>
    </Html>
  );
}

RoomPointer.prototype = {
  status: PropTypes.oneOf(['start', 'end']).isRequired,
  room: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    displayName: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default RoomPointer;
